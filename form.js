const questions = require("./questions.json");
const previusResults = require("./result.json");
const awnsers = require("./awnsers.json");
const fs = require("fs");
const userInput = require("prompt-sync")({ sigint: true });

const resultArr = [];

var awnser;
var totalPoints = 0;

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
    awnsers.result[0].points += questions[i].yes.pointsCat;
    awnsers.result[1].points += questions[i].yes.pointsDog;
    awnsers.result[2].points += questions[i].yes.pointsRabbit;
    awnsers.result[3].points += questions[i].yes.pointsFish;
    i++;
  }
  else if (awnser === "nej") {
    awnsers.result[0].points += questions[i].no.pointsCat;
    awnsers.result[1].points += questions[i].no.pointsDog;
    awnsers.result[2].points += questions[i].no.pointsRabbit;
    awnsers.result[3].points += questions[i].no.pointsFish;
    i++
  }
  else {
    console.log("Du måste svara Ja eller Nej! Du svarade: " + awnser);
  }
}

totalPoints = awnsers.result[0].points + awnsers.result[1].points + awnsers.result[2].points + awnsers.result[3].points;

awnsers.result[0].points = (awnsers.result[0].points / totalPoints) * 100;
awnsers.result[1].points = (awnsers.result[1].points / totalPoints) * 100;
awnsers.result[2].points = (awnsers.result[2].points / totalPoints) * 100;
awnsers.result[3].points = (awnsers.result[3].points / totalPoints) * 100;

awnsers.result.sort((pointValue1, pointValue2) => pointValue1.points - pointValue2.points);

for (var i = 0; i < awnsers.result.length; i++) {
  awnsers.result[i].points += "%";
}

resultArr.push(awnsers);

fs.writeFile("./result.json", JSON.stringify(resultArr, null, 2), (err) => {
  if (err) throw err;
  console.log("Form saved");
});
