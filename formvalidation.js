const formvar=document.querySelector('#form');
const namevar=document.querySelector('#name');
const emailvar=document.querySelector('#email');
const phonevar=document.querySelector('#phone');
const passwordvar=document.querySelector('#password');
formvar.addEventListener('submit',(e)=>{
    const name=namevar.value.trim();
    const email=emailvar.value.trim();
    const phone=phonevar.value.trim();
    const password=passwordvar.value.trim();
    if(name==""){
        e.preventDefault();
        alert("please enter valid name");
        namevar.focus();
        return true;
    }
    if(!isNaN(name)){
        e.preventDefault();
        alert("please enter valid name");
        namevar.focus();
        return false; 
    }
    if(email==""){
        e.preventDefault();
        alert("please enter valid email");
        emailvar.focus();
        return false;
    }
    if(isNaN(phone) || (phone.length!=10)){
        e.preventDefault();
        alert("please enter valid phone no");
        phonevar.focus();
        return false;
    }
    if(phone==""){
        e.preventDefault();
        alert("please enter a phone no");
        phonevar.focus();
        return false;
    }
    if(password==""){
        e.preventDefault();
        alert("please enter a password");
        passwordvar.focus();
        return false;
    }
    if(password.length!=8){
        e.preventDefault();
        alert("password must be 8 digit");
        passwordvar.focus();
        return false;
    }


});