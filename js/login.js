let  username=document.querySelector("#username");
let password=document.querySelector("#password");
let loginbt=document.querySelector("#Sgin");
let getuser=localStorage.getItem('user');
let getpass=localStorage.getItem('password');

loginbt.addEventListener('click',function(){
   
    if(username.value === ""||password.value === ""){
        
    }else if( (getuser.trim() ===  username.value.trim()) &&  (getpass.trim() === password.value.trim())){
   
setTimeout(()=>{

    window.location='prducte.html';
    },1500)
    
    
    

      }else{
          alert("user name or password is wrong");
      }
        
    

    });

