const mail = document.querySelector('#mail');
const inputMail = document.querySelector('input')
const error = document.querySelector('.text');
const buttonSubmit = document.querySelector('#submit-btn');
const buttonDismiss = document.querySelector('#dismiss-btn');
const success = document.querySelector('.success');
const containerBox = document.querySelector('.container');
const userMail = document.querySelector('#user');

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function checkMail(){
    if(mail.value == ''){
        return false;
    }
    if(mail.value.match(regExp)){
        return true 
    }else{
        return false;   
    }
}
function validation(e){
    e.preventDefault();
    if(checkMail()){
        success.style.display = 'block';
        containerBox.style.display = 'none';
        userMail.innerText = mail.value;
        inputMail.classList.remove('invalid');
        error.classList.remove('invalid-txt');
    }else{
        inputMail.classList.add('invalid');
        error.classList.add('invalid-txt');
    }  
}
function reloadPage(){
    success.style.display = 'none';
    containerBox.style.display = 'flex';
    userMail.innerText = mail.value = ''; 
}
function check(){
    if(mail.value.match(regExp)){
        inputMail.classList.remove('invalid');
        error.classList.remove('invalid-txt'); 
    }else{
        inputMail.classList.add('invalid');
        error.classList.add('invalid-txt');
    }
}
buttonSubmit.addEventListener('click',validation);
buttonDismiss.addEventListener('click',reloadPage);
inputMail.addEventListener('keyup',check);


