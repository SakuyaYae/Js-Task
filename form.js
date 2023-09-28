const questions = require("./questions.json");
const previusResults = require("./result.json");
const fs = require("fs");
const userInput = require("prompt-sync")({ sigint: true });

const questionsArr = [questions[0].question1, questions[0].question2, questions[0].question3, questions[0].question4, questions[0].question5, questions[0].question6, questions[0].question7, questions[0].question8, questions[0].question9, questions[0].question10, questions[0].question11, questions[0].question12, questions[0].question13, questions[0].question14, questions[0].question15];

const resultArr = [];

const awnsers = {
  "cat": 0,
  "dog": 0,
  "rabbit": 0,
  "fish": 0,
  "name": "",
  "date": ""
};
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
while (i < questionsArr.length) {
  console.log(questionsArr[i].question + "\n Ja \n Nej");
  awnser = userInput("").trim().toLowerCase();

  if (awnser === "ja") {
    awnsers.cat += questionsArr[i].yes.pointsCat;
    awnsers.dog += questionsArr[i].yes.pointsDog;
    awnsers.rabbit += questionsArr[i].yes.pointsRabbit;
    awnsers.fish += questionsArr[i].yes.pointsFish;
    i++;
  }
  else if (awnser === "nej") {
    awnsers.cat += questionsArr[i].no.pointsCat;
    awnsers.dog += questionsArr[i].no.pointsDog;
    awnsers.rabbit += questionsArr[i].no.pointsRabbit;
    awnsers.fish += questionsArr[i].no.pointsFish;
    i++
  }
  else {
    console.log("Du måste svara Ja eller Nej! Du svarade: " + awnser);
  }
}

totalPoints = awnsers.cat + awnsers.dog + awnsers.fish + awnsers.rabbit;

awnsers.cat = (awnsers.cat / 100) * totalPoints;
awnsers.dog = (awnsers.dog / 100) * totalPoints;
awnsers.rabbit = (awnsers.rabbit / 100) * totalPoints;
awnsers.fish = (awnsers.fish / 100) * totalPoints;

const awnserArr = [awnsers.cat, awnsers.dog, awnsers.fish, awnsers.rabbit];

awnserArr.sort(sortCompareNumbers);
for (var i = 0; i < awnserArr.length; i++) {
  awnserArr[i] += "%";
}
awnserArr.push(awnsers.name);
awnserArr.push(awnsers.date);

resultArr.push(awnserArr);

fs.writeFile("./result.json", JSON.stringify(resultArr, null, 2), (err) => {
  if (err) throw err;
  console.log("Form saved");
});


