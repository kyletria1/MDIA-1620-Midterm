const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//Planning//
//Name variable for name//
//Name variable for score//
//Name variable for function//
//score >= 86 "Excellent! name has an A."//
//score >= 72 && score <= 85 "Great job! name has a B."//
//score >= 60 && score < 71 "Good effort! name has a C."//
//score >= 50 && score < 59 "Needs improvement. name has a D."//
//score < 50 "Fail. name has a F."//
//code function//
//write questions//
//test code//

//Bonus Planning//
//make new function//
//score >= 84 && score <= 85 "Almost there!",name,"is close to a A."//
//score >= 70 && score <= 71 "Almost there!",name,"is close to a B."//
//score >= 58 && score <= 59 "Almost there!",name,"is close to a C."//
//score >= 48 && score <= 49 "Almost there!",name,"is close to a D."//
//score >= 86 && score <= 87 "Work Hard!",name,"is almost falling to B."//
//score >= 72 && score <= 73 "Work Hard!",name,"is almost falling to C."//
//score >= 60 && score <= 61 "Work Hard!",name,"is almost falling to D."//
//score >= 50 && score <= 51 "Work Hard!",name,"is almost falling to F."//

//determine a proper function name and parameter variable name
function GradingSystem(name, score){

  //write your code here

  if(score >= 86){
    console.log("Excellent!",name,"has an A.")
  }

  else if(score >= 72 && score <= 85){
    console.log("Great job!",name,"has a B.")
  }

  else if(score >= 60 && score < 71){
    console.log("Good effort!",name,"has a C.")
  }

  else if(score < 50){
    console.log("Fail.",name,"has a F.")
  }
}

function AdvancedGradingSystem(name, score){
  if(score >= 84 && score <= 85){
    console.log("Almost there!",name,"is close to a A.")
  }

  else if(score >= 70 && score <= 71){
    console.log("Almost there!",name,"is close to a B.")
  }

  else if(score >= 58 && score <= 59){
    console.log("Almost there!",name,"is close to a C.")
  }

  else if(score >= 48 && score <= 49){
    console.log("Almost there!",name,"is close to a D.")
  }

  else if(score >= 86 && score <= 87){
    console.log("Work Hard!",name,"is almost falling to B.")
  }

  else if(score >= 72 && score <= 73){
    console.log("Work Hard!",name,"is almost falling to C.")
  }

  else if(score >= 60 && score <= 61){
    console.log("Work Hard!",name,"is almost falling to D.")
  }

  else if(score >= 50 && score <= 51){
    console.log("Work Hard!",name,"is almost falling to F.")
  }
}

function StartApp(){
  readline.question("What is the student's name?", Name => {
    readline.question("What is the student's grade?", Score => {

      //call your function here.
GradingSystem(Name,(Number(Score)))
AdvancedGradingSystem(Name,(Number(Score)))
      // readline.close();
      if(Score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();