const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    let sec = (date.getSeconds() / 60) * 360;
    let min = (date.getMinutes() / 60) * 360;
    let hour = (date.getHours() / 12) * 360;

    secDiv.style.transform = "rotate(" + sec + "deg)";
    minDiv.style.transform = "rotate(" + min + "deg)";
    hourDiv.style.transform = "rotate(" + hour + "deg)";
}
updateClock();

const displayDate = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    const dateToday = day + "/" + month + "/" + year;

    document.querySelector('.date').innerHTML = dateToday;
}

displayDate();


const displayTime = () => {
    let newDate = new Date();
    const currentTime = newDate.toLocaleTimeString();

    document.querySelector('.digitalClock').innerHTML = currentTime;
}
setInterval(displayTime, 1000)

const menuButton = document.querySelector('.fa-arrow-circle-down');
const sideMenu = document.querySelector('.side-menu');
let buttonBool = true;

menuButton.addEventListener("click", function(){
    if(buttonBool === true ){
        sideMenu.style.opacity = "100%";
        sideMenu.style.width = '20%';
        menuButton.classList.replace('fa-arrow-circle-down', 'fa-arrow-circle-left');
        buttonBool = false;

    }   else if(buttonBool === false){
        sideMenu.style.opacity = "0";
        sideMenu.style.width = '0';
        menuButton.classList.replace('fa-arrow-circle-left','fa-arrow-circle-down');
        buttonBool = true;
    }
})