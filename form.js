const questions = require("./questions.json");
//const result = require("./result.json");
const fs = require("fs");
const userInput = require("prompt-sync")({ sigint: true });

var awnser;
const awnsers = {
  "cat": 0,
  "dog": 0,
  "rabbit": 0,
  "fish": 0
};

console.log(questions[0].question1.question + "\n Yes \n No");
awnser = userInput("").trim().toLowerCase();

if (awnser === "yes") {
  awnsers.cat += questions[0].question1.yes.pointsCat;
  awnsers.dog += questions[0].question1.yes.pointsDog;
  awnsers.rabbit += questions[0].question1.yes.pointsRabbit;
  awnsers.fish += questions[0].question1.yes.pointsFish;
}
else if (awnser === "no") {
  awnsers.cat += questions[0].question1.no.pointsCat;
  awnsers.dog += questions[0].question1.no.pointsDog;
  awnsers.rabbit += questions[0].question1.no.pointsRabbit;
  awnsers.fish += questions[0].question1.no.pointsFish;
}
else {
  console.log("Wrong awnser, you must awnser yes or no!");
}

console.log(awnsers.cat);