/* Write a code which can give grades to students according to theirs marks using Conditionals
80%-100%, Distinction
60%-79%, First Class
50%-59%, Second Class
35%-49%, Pass
0%-34%, FAIL*/


let marks = 50;

if (marks >= 80 && marks <= 100) {

    console.log("Distinction");
} 
else if (marks >= 60 && marks <= 79) 
    {
    console.log("First Class");
} 
else if (marks >= 50 && marks <= 59) 
    {
    console.log("Second Class");
} 
else if (marks >= 35 && marks <= 49) 
    {
    console.log("Pass");
} 
else if (marks >= 0 && marks <= 34)
    {
    console.log("FAIL");
}
 else 
{
    console.log("Invalid marks! Enter a valid marks.");
}