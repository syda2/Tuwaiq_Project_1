let user=document.querySelector("#username");
let email=document.querySelector("email");
let password=document.querySelector("#password");
let regisBtn=document.querySelector("#sginup");

// AddEvent on click and I use if statment to check the input and save the data
regisBtn.addEventListener('click', function(){


    if(user.value === ""||email.value === ""||password.value === ""){
        alert("please enter your Data");
    }else{
        localStorage.setItem('user',user.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
      
        
    }
});














 
