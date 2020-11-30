const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl =document.getElementById('second');


const newYears = "1 Jan 2021";
function coundown(){

    const newYearDate= new Date(newYears);
    const currentDate=new Date();

    const totalSeconds=(newYearDate-currentDate)/1000;
    const days= Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600) % 24;
    const minits= Math.floor(totalSeconds/60) % 60;
    const second= Math.floor(totalSeconds) % 60;

    daysEl.innerHTML= fortmateTime(days);
    hoursEl.innerHTML=fortmateTime(hours);
    minsEl.innerHTML=fortmateTime(minits);
    secondsEl.innerHTML=fortmateTime(second);
    

    console.log(days, hours,minits,second);
}

function fortmateTime(time){
    return time <10 ? `0${time}` : time ;
}

coundown();
setInterval(coundown, 1000); 