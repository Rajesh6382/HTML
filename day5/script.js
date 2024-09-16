const result=[];
let arr=[12,13,14,15]
for(var i=0;i<arr.length;i=i+1){
    result.push(arr[i]*2)
}
console.log(result);


// with map using normal function

const array=[12,13,14,15,16]
function double(ele){
    return ele*2
}
const results =array.map(double)
console.log(results);

// anonomys function

const array1=[12,13,14,15,16]
let a = function(ele){
    return ele*2
}
const results1 =array.map(a)
console.log(results1);

// arrow function 

const array2=[12,13,14,15,16,17]
const result1 =array2.map((ele)=>ele*3)
console.log(result1);

const fruits=["apple","mango","orange"]
const res1=fruits.map((ele)=>ele+"s")
console.log(res1);

//filter method  with normal function 

const arr2=[12,13,14,15,16,17,18]
function even(ele){
    return ele%2===0
}
const res3=arr2.filter(even)
console.log(res3)

//filter method with anonomys function 

const arr3=[12,13,14,15,16,17,18]
let a1=function (ele){
    return ele%2===0
}
const res4=arr3.filter(even)
console.log(res4)

const arr4=[12,13,14,15,16,17,18,19,20]
const res5=arr4.filter((ele)=>ele%2===0)
console.log(res5)


const great=[1,2,3,4,5,6,7,8]
const resu=great.filter((ele)=>ele>3)
console.log(resu);

