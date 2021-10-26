let user=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let regisBtn=document.querySelector("#sginup");

// AddEvent on click and I use if statment to check the input and save the data
regisBtn.addEventListener('click', function(){


    if(user.value === ""||email.value === ""||password.value === ""){
        alert("please enter your Data");
    }else{
        window.localStorage.setItem('user',user.value);
        window.localStorage.setItem('email',email.value);
        window.localStorage.setItem('password',password.value);
      
        
    }


setTimeout(()=>{

window.location='login.html';
},1500)


});












 
