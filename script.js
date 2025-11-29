// let a = 12;
// var b = !!12
// let score = 90;
// let grade = score>= 90 ? "A" : "B";
// console.log(grade);
// let x =3;
// let y = x++;
// console.log(x,y);
// let count = 5;
// if(--count == 5)
// {
//     console.log("Matched")
// }else {
//     console.log("Unmatched")
// }
//Question--> Write a functon  getGrade(Score) that:
// Takes a student's marks ( 0 to 100)
// returns the grade based on this logic;
/// 90 - 100    A+
//  80 - 89     A
//  70 - 79     B
//  60 - 69     C
//  33 - 59     D
//  0 - 32      Fail
//  Anything else     Invalid marks ❌
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 33 && score <= 59) return "D";
    else if (score >= 0 && score <= 32) return "Fail";
    else return "Invalid Marks";

}
// let Marks = 90
// console.log(getGrade(Marks));
let marks = prompt("Enter your marks: ");     // user input
marks = Number(marks);                        // convert to number

console.log("Your Grade is:", getGrade(marks));