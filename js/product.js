let user_info=document.querySelector('#user_info');
let userDom=document.querySelector('#user1');
let links=document.querySelector('#links');
let logoutbtn=document.querySelector('#logout');
if(localStorage.getItem('user')){
     links.remove();
user_info.style.display= "flex";
 userDom.innerHTML=localStorage.getItem("user");
}
logoutbtn.addEventListener('click',function (){
  localStorage.clear();


  setTimeout(()=>{

    window.location='login.html';
    },1500)
    

})