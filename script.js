const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const obj = document.querySelector("#forget");
const button = document.querySelector("button");
const body = document.querySelector("body");

let i= 0;

button.addEventListener("click", () =>{
    if(email.value && pass.value){
        console.log("Login Successfull");
        setTimeout(()=>{
            obj.classList.add("forgot");
            obj.classList.remove("err");
            i=0;
        },500)
    }else{
        if(i==0){
            obj.classList.add("err");
            obj.classList.remove("forgot");
            i=1;
        }else if(i==1){    
            obj.classList.add("forgot");
            obj.classList.remove("err");
            i=0;
        }
    }
    
});