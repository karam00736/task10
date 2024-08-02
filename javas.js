// principle amount
const principle = 309651;
// rate of interest in decimal
const rate = 0.05;
// time duration of compound interest
const n = 12;
// duration of time
const time = 3;
// calculate of total amount after compound interest
const amount = principle*Math.pow((1+rate/n),(n*time));
// compound interest 
const compoundInterest = Math.round(principle - amount);
// print the principle amount on console window
console.log("the principle amount is ₹" + principle);
// print the compund interest on console window
console.log("the compound interest of 3 years is ₹" + compoundInterest);
// print the total amount included compound interest on console window
console.log("the total amount after 3 years included  compound interest ₹" + Math.round(amount));