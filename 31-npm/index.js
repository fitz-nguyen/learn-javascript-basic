var readlineSync = require("readline-sync");
var languages = [];
var language = readlineSync.question("What is your language? ");
languages.push(language);

console.log(languages);
