/*
functions return
by Daniel Wen
May 15 2017
*/

function setup() {
 var km = milesToKm(26.3);//uses the function milesToKm to convert 26.3 miles to km
 console.log(km); //shows the result in the console log
 
 var km2 = milesToKm(100);//uses the function milesToKm to convert 100 miles to km
  console.log(km2);//shows the result in the console log
}

function draw() {
  
}

function milesToKm(miles) {//the function milestokm which converts the parameter miles to kilometers
  var km = miles * 1.6; //a variable km which contains the converted miles to km 
  return km; //returns the result of km which is the parameter * 1.6
}