var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

for(let i in student){
	console.log(i)
}
delete student.rollno
console.log(student)