const logdiv = document.getElementById('log'); //here we select all the id 
const statediv = document.getElementById('state');
const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');

startbtn.addEventListener('click',()=>{
    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)
    startbtn.disabled = true ;
    stopbtn.disabled = false ; //this is to used only one button at a time disables function is used
})

stopbtn.addEventListener('click',()=>{
    document.removeEventListener("keydown",handledown)
    document.removeEventListener("keyup",handleup)
    logdiv.textContent="";
    statediv.textContent="";
    stopbtn.disabled = true;
    startbtn.disabled = false;
})

function handledown(e) {
    logdiv.textContent = `key ${e.key} pressed down`; // this tell us which key is pressed itis like a event object
    statediv.textContent = `key ${e.key} is down`;
}

function handleup(e) {
    logdiv.textContent = `key pressed up`;
    statediv.textContent = `key is up`;
}