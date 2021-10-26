let user_info=document.querySelector('#user_info');
let userDom=document.querySelector('user');
let links=document.querySelector('#links');
if(localStorage.getItem('username')){
  links.remove();
user_info.style.display= "block";
  userDom.innerHTML=localStorage.getItem("username");
}