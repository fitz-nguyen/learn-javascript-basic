const fs = require("fs");
const co = require("co");

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: "utf8" }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

co(function*() {
    // var song1 = yield readFilePromise("song1.txt");
    // var song2 = yield readFilePromise("song1.txt");
    // var song3 = yield  readFilePromise("song3.txt");
    values = yield [
        readFilePromise("song1.txt"),
        readFilePromise("song2.txt"),
        readFilePromise("song3.txt")
    ];
    return values;
})
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });

var readFile = co.wrap(function*(files) {
    var values = yield files.map(file => {
        readFilePromise(file);
    });
    return values;
});

readFile(["song1.txt", "song2.txt", "song3.txt"])
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });
