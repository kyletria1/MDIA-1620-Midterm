const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

//Planning//
//Name variable for name//
//Name variable for money//
//Name variable for lunch//
//Name variable for cost//
//Name variable for function//
//money >= cost "[student name] purchased [lunch item] purchased!"//
//money < cost "[student name] does not have sufficient funds to buy [lunch item]!"//
//code function//
//write questions//
//test code//

//determine a proper function name and parameter variable name
function LunchMoneyManagementSystem(name, money, lunch, cost){

  //write your code here
  if(money >= cost){
    console.log(name,"purchased",lunch,"purchased!")
  }

  else if(money < cost){
    console.log(name,"does not have sufficient funds to buy",lunch,"!")
  }
}

function StartApp(){
  readline.question("What is your name?", Name => {
    readline.question("How much money is in your account? (Please enter numbers only.)", Money => {
      readline.question("What are you ordering: Sandwich ($1.00), Hotdog ($2.00), or Pizza ($3.00)?", Lunch => {
        readline.question("What does your lunch cost? (Please enter numbers only.)", Cost => {

          //call your function here.
LunchMoneyManagementSystem(Name,(Number(Money)), Lunch, (Number(Cost)))
          // readline.close();
          if(Cost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();