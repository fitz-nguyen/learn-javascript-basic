var readlineSync = require("readline-sync");
var fs = require("fs");

var students = [];
function loadData() {
    var fileContents = fs.readFileSync("./data.json");
    students = JSON.parse(fileContents);
}
function showMenu() {
    console.log("1. Show all students");
    console.log("2. Create a new student");
    console.log("3. Save & Exit");
    var options = readlineSync.question("> ");
    switch (options) {
        case "1":
            showStudents();
            break;
        case "2":
            showCreateStudent();
            showMenu();
            break;
        case "3":
            saveAndExit();
            break;
        default:
            console.log("wrong option");
            showMenu();
            break;
    }
}

function showStudents() {
    for (let student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question("name: ");
    var age = readlineSync.question("age: ");
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    let content = JSON.stringify(students);
    fs.writeFileSync("./data.json", content, { encoding: "utf8" });
}
function main() {
    loadData();
    showMenu();
}
main();
