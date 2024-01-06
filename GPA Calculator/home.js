let sub1;
console.log(sub1); 

//Backend

const grade1 = document.getElementById("subject1").value;
const grade2 = document.getElementById("subject2").value;
const grade3 = document.getElementById("subject3").value;
const grade4 = document.getElementById("subject4").value;
const grade5 = document.getElementById("subject5").value;

const value1 = document.getElementById("credit1").value;
const value2 = document.getElementById("credit2").value;
const value3 = document.getElementById("credit3").value;
const value4 = document.getElementById("credit4").value;
const value5 = document.getElementById("credit5").value;

const average = ((grade1*value1)+(grade2*value2)+(grade3*value3)+(grade4*value4)+(grade5*value5))/(value1+value2+value3+value4+value5)

