/* Hoisting

Console.log(a)
var a =10; => it through undifined 

Console.log(a)
let a =10; => it through error

It can't through errow it says undefined*/


/*scoping: var is global level 
let and const is block level*/

function test (){
    let a =10;
    if(true){
        let b =20;
        console.log(a);
    }
    // console.log(b)

}test();

// Object 

const person={
    name:"rajesh",
    age:20,
    gender:"Male",
    skills:["JS","HTML","CSS","REACTJS"],

}
// dot method of printing
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.gender);
for(let i=0;i<person.skills.length;i=i+1){
    console.log(person.skills[i]);
}

// box method of printing

console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);
for(let i=0;i<person["skills"].length;i=i+1){
    console.log(person["skills"][i]);
}

//create a resume in object and print the element using dot and box method

const resume={
    name:"Rajesh",
    age:20,
    gender:"male",
    marital:"no",
    phone:9876543210,
    email:"rajesh@123.com",
    education:["10th","12th","BE"],
    skills:["JS","HTML","CSS","REACTJS"],
}
console.log(resume);
console.log(resume.name);
console.log(resume.age);
console.log(resume.gender);
console.log(resume.marital);
console.log(resume.phone);
console.log(resume.email);
console.log(resume.education);
console.log(resume.skills);
for (let i=0;i<resume.education.length;i=i+1){
    console.log(resume.education[i]);
}

for (let i=0;i<resume.skills.length;i=i+1){
    console.log(resume.skills[i]);
}


// box method

console.log(resume);
console.log(resume.name);
console.log(resume["age"]);
console.log(resume["gender"]);
console.log(resume["marital"]);
console.log(resume["phone"]);
console.log(resume["email"]);
console.log(resume["education"]);
console.log(resume["skills"]);
for (let i=0;i<resume["education"].length;i=i+1){
    console.log(resume["education"][i]);
}

for (let i=0;i<resume["skills"].length;i=i+1){
    console.log(resume["skills"][i]);

}

// For in 

let arr =["a","b","c"]
for(let key in arr){
    console.log(key);
}

let str="rajesh"
for(let key in str){
    console.log(key)
}


const per={
    name:"rajesh",
    age:20,
    gender:"Male",
    skills:["JS","HTML","CSS","REACTJS"],

}
for (let key in per){
    console.log(per[key])
}

//For of 

let array=["a","b","c"]
for (let val of array){
    console.log(val);
}

// for each 

let arra=["a","b","c"]
arra.forEach(ele=>{console.log(ele)})

const resume={
    "name":"Rajesh",
    "age":"20",
    "gender":"male",

}
 