let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

// ques.1.
//  We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "

const students=studentRecords.map((i)=>{
    return i.name;
     })
    console.log(students);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

for(i=0; i<=3; i++){                               
    if (studentRecords[i].marks > 50){
        console.log(studentRecords[i]); 
    }
}

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

const greater= studentRecords.filter(x=>x.marks>50 && x.id>120);
console.log(greater);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let Sum = 0;
for(let i=0;i<=3;i++){
    Sum += studentRecords[i].marks;
}
console.log(Sum);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

const greater2= studentRecords.reduce((acc,curr)=>acc+=curr.marks,0)
console.log(greater2);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let stud =studentRecords.filter(b=>b.id>120).reduce((acc,cur)=>acc+=cur.marks,0)
console.log(stud);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let stud2=studentRecords.reduce((res,ele)=>{
    if((ele.marks+15)>50){
       res +=ele.marks;
    }
    return res;
  },0)
 console.log(stud2);

//  Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

function Student(name,rollno,cls) {
    this.name=name;
    this.rollno=rollno;
    this.cls=cls;
   
}
let student1= new Student ("ABC",001,12);
let student2= new Student("DEF",002,12);
let student3= new Student ("GHI",003,12);
let student4= new Student ("JKL",004,12);
let student5= new Student ("MNO",005,12);
let student6= new Student ("PQR",006,12);

console.log(student1,student2,student3,student4,student5,student6);