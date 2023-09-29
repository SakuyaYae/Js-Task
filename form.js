const questions = require("./questions.json");
const previusResults = require("./result.json");
const awnsers = require("./awnsers.json");
const fs = require("fs");
const userInput = require("prompt-sync")({ sigint: true });

const resultArr = [];

var awnser;
var totalPoints = 0;

function sortCompareNumbers(value1, value2) {
  return value1 - value2;
}

resultArr.push(previusResults);

console.log("Ange ditt namn: ");
awnser = userInput("").trim();

awnsers.name = awnser;
awnsers.date = Date().substring(0, 24);

var i = 0;
while (i < questions.length) {
  console.log(questions[i].question + "\n Ja \n Nej");
  awnser = userInput("").trim().toLowerCase();

  if (awnser === "ja") {
    awnsers.cat += questions[i].yes.pointsCat;
    awnsers.dog += questions[i].yes.pointsDog;
    awnsers.rabbit += questions[i].yes.pointsRabbit;
    awnsers.fish += questions[i].yes.pointsFish;
    i++;
  }
  else if (awnser === "nej") {
    awnsers.cat += questions[i].no.pointsCat;
    awnsers.dog += questions[i].no.pointsDog;
    awnsers.rabbit += questions[i].no.pointsRabbit;
    awnsers.fish += questions[i].no.pointsFish;
    i++
  }
  else {
    console.log("Du måste svara Ja eller Nej! Du svarade: " + awnser);
  }
}

totalPoints = awnsers.cat + awnsers.dog + awnsers.fish + awnsers.rabbit;

awnsers.cat = (awnsers.cat / totalPoints) * 100;
awnsers.dog = (awnsers.dog / totalPoints) * 100;
awnsers.rabbit = (awnsers.rabbit / totalPoints) * 100;
awnsers.fish = (awnsers.fish / totalPoints) * 100;

const awnserArr = [awnsers.cat, awnsers.dog, awnsers.fish, awnsers.rabbit];

awnserArr.sort(sortCompareNumbers);

for (var i = 0; i < awnserArr.length; i++) {
  awnserArr[i] += "%";
}
awnserArr.push(awnsers.name);
awnserArr.push(awnsers.date);

resultArr.push(awnserArr);

console.log(awnserArr);

fs.writeFile("./result.json", JSON.stringify(resultArr, null, 2), (err) => {
  if (err) throw err;
  console.log("Form saved");
});


