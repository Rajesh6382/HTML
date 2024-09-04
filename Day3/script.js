/* without fuction
var a=10;
var b=20;
var c=a+b;
console.log(c); */

function add(a, b) {
  console.log(a + b);
}
add(20, 20);

function arithematic(c, d) {
  console.log(c + d);
  console.log(c - d);
  console.log(c * d);
  console.log(c / d);
  console.log(c % d);
}
arithematic(10, 20);


/* use return */

function arit(e,f){
    return [e+f,e-f,e*f,e%f];
}
console.log(arit(50,20));


function arithe(g,h){
    return{
        sum :g+h,
        difference: g-h,
        multiple: g*h,
        module: g%h
    };
}
console.log(arithe(30,40));

/* Print even numbers in the array

Normal Function */

var result= [];
function even(arr){
    for( var i=0; i<=arr.length-1;i=i+1){
        if(arr[i]%2===0){
            result.push(arr[i])

        }
    }
    return result
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));


/* Anonomys Fuction : The fuction don't have a function name*/

var result= [];
var a = function(arr){
    for( var i=0; i<=arr.length-1;i=i+1){
        if(arr[i]%2===0){
            result.push(arr[i])

        }
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));


/* IIFY Function : It runs only one to whole the code*/

var result= [];
function even(arr){
    for( var i=0; i<=arr.length-1;i=i+1){
        if(arr[i]%2===0){
            result.push(arr[i])

        }
    }
    console.log(result)
}
even([1,2,3,4,5,6,7,8,9,10]);

/* Arrow Function*/

var result=[];
var even =(arr)=>{
    function even(arr){
        for( var i=0; i<=arr.length-1;i=i+1){
            if(arr[i]%2===0){
                result.push(arr[i])
    
            }
        }
        return result 
    }
    console.log(even([1,2,3,4,5,6,7,8,9,10]));

}


/* Print odd numbers in the array

Normal Function */

var result=[];
function odd(arr){
    for(var i=0;i<=arr.length-1;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));


