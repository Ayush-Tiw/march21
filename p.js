

let width=0;
let a= document.querySelector(".width")
function move(){
 width=width+1;
a.style.width= width+"%"
}

let b=document.querySelector(".button")
b.addEventListener("click",function abc(){
// width=1;
// let id=setInterval(move,10)
})

let ab=()=>{
console.log("hii this is argument function")
}

let call=()=>{
    ab()
}
call()


let sum=(n1,n2)=>{
let sum=n1+n2;
return sum
}

let result=(x)=>{
    console.log(x)
}
result(sum(10,20))

// sum is call back function

let f1=()=>{
    console.log("f1")
}

let f2=()=>{
    let f3=()=>{
        f1()
    }
    return f3()
}
f2()

function get(func){


    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.thedogapi.com/v1/breeds")
    xhr.send()
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
            let data=JSON.parse(xhr.response)
func(data)
        }
    }
}

function impl(x){
console.log(x[0].weight)
}

get(impl)