const questions = require("./questions.json");
//const result = require("./result.json");
const fs = require("fs");
const userInput = require("prompt-sync")({ sigint: true });

const questionsArr = [questions[0].question1, questions[0].question2, questions[0].question3, questions[0].question4, questions[0].question5, questions[0].question6, questions[0].question7, questions[0].question8, questions[0].question9, questions[0].question10, questions[0].question11, questions[0].question12, questions[0].question13, questions[0].question14, questions[0].question15];
const awnsers = {
  "cat": 0,
  "dog": 0,
  "rabbit": 0,
  "fish": 0,
  "name": "",
  "date": ""
};
var awnser;

console.log("Ange ditt namn: ");
awnser = userInput("").trim();

awnsers.name = awnser;
awnsers.date = Date();

for (var i = 0; i < questionsArr.length; i++) {
  console.log(questionsArr[i].question + "\n Ja \n Nej");
  awnser = userInput("").trim().toLowerCase();

  if (awnser === "yes") {
    awnsers.cat += questionsArr[i].yes.pointsCat;
    awnsers.dog += questionsArr[i].yes.pointsDog;
    awnsers.rabbit += questionsArr[i].yes.pointsRabbit;
    awnsers.fish += questionsArr[i].yes.pointsFish;
  }
  else if (awnser === "no") {
    awnsers.cat += questionsArr[i].no.pointsCat;
    awnsers.dog += questionsArr[i].no.pointsDog;
    awnsers.rabbit += questionsArr[i].no.pointsRabbit;
    awnsers.fish += questionsArr[i].no.pointsFish;
  }
  else {
    console.log("Du måste svara Ja eller Nej!");
  }
}

console.log(awnsers.name);
console.log(awnsers.date);
console.log(awnsers.cat);
console.log(awnsers.dog);
console.log(awnsers.rabbit);
console.log(awnsers.fish);