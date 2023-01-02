// Callback
//A callback function is a function passed into another function as an argument,which is then invoked inside the outer function to complete some kind of routine or action.
// functions are object and we can pass object as argument of function.
// sometimes we would like to have better control over when to execute a function
// suppose first you want to do calculation,and then display the result.
//Traditional way
// function suman(){
//     //arguental function
//     console.log("this is Ayush Tiwari")
// }

// function guvi(){
//     // calls the suman() function as an arguement
//     suman();
// }

// //guvi() is an callback function
// guvi();

// // why do we need a callback
// //js code  run in sequence(synchronously),but callback gives you the power to write async way of programming
//it keeps our entire code free from error
// sequencial way of programming is called synchronous programming and non-sequencial way of programming is called asynchronous programming


// function guvi(){
//     // calls the suman() function as an arguement
//     suman();
// }
// guvi();

// function suman(){
//     //arguental function
//     console.log("this is Ayush Tiwari from Hoshangabad")
// }



// //guvi() is an callback function


// //Modern Way to write a Callback

// function suman(num1,num2) {
//     let result=num1+num2;
//     return result;

// }

// function guvi(data){
// console.log(data)
// }

// let val=suman(20,30)

// guvi(val)

// //write in different way

// function suman(){
//     alert("Ayush Tiwari!")
// }

// function timer(){
//     setTimeout(function(){//this is example of nested callback function
//         suman(),3000
//     }
//     );
// }

// timer();

//async way means many function runs at same time,like here suman ,timer,setinterval all function are running at same time


//another example

// const url="https://api.thedogapi.com/v1/breeds"
// //display of the fetched data from guvi() function
// function suman(data){
//     let suman=document.getElementById("suman");
//     suman.innerHTML=data;
// }

// //fetching the data from the API
// function guvi(url,my_callback_function){
// let request=new XMLHttpRequest();
// request.open("GET",url);
// request.onload=function(){
//     if(request.status=200){
//         my_callback_function(this.responseText)
//     }
//     else{
//         my_callback_function(request.status)
//     }
// };
// request.send();
// }

// //calling the callback function guvi() which call suman function as an argument
// guvi(url,suman)

// //when we take any function as argument it become variable for another function like suman is become variable for guvi function


//What is meaning of concurrent-->you are running multiple function at the same time,ex-when any function is called it will call other function also 

//what is meaning of parallelism-->you run two different function run together at same time independent of each other,it run on multi core processor not in single core processor
//node.JS is asyn way of computing ,no parallel way of computing,it is not meant for that thing
//in parallelism you can can run multiple code unlike concurrent which cn run single code only


//creating a progress bar using HTML,CSS,JS and callback function 

function move(){
    let bar=document.getElementById("progressBar");
    let width=1;
    let id=setInterval(frame,10);//callback and async way of coding


function frame(){
    if(width>=100){
        clearInterval(id);
    }
    else{
        width=width+1;
        bar.style.width=width+"%"
    }
}
}

//or

document.getElementById("btn").addEventListener("click",function move(){
    let bar=document.getElementById("progressBar");
    let width=1;
    let id=setInterval(frame,10);//callback and async way of coding


function frame(){
    if(width>=100){
        clearInterval(id);
    }
    else{
        width=width+1;
        bar.style.width=width+"%"
    }
}
})