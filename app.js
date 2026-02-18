"use strict";

// // var

// const user1Name = "Ada";
// let user1Score = 10;

// const user2Name = "Grace";
// let user2Score = 20;

const user1 = {
    userName: 'Ada',
    userScore: 10,
};

const user2 = {
    userName: "Grace",
    userScore: 20,
}

const metaPhone4 = {
    screensize: 1.9,
    processor: "4.5gz",
    powerOn: function(){
        // send signal to battery
    }
}

    const header = {
        position: "sticky",
        width: "100%",
        links: ["Home","About","Sales"],

        getCodeSpaces: function (){
            // go to DB and find out
        }
    }

console.log(user1.userName + "" + user1.userScore);
console.log(user2.userName, user2.userScore);

user1.userScore = user1.userScore + 5;
user1.userScore = user1.userScore + 5;
user1.userScore = user1.userScore + 5;



console.log(user1.userName, user1.userScore);


function displayText(){
  document.writeln("Hello!")
  console.log("Hi!!!")
  console.table(["Hello","Hi"])
}

displayText()


