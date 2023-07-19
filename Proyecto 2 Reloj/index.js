const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

//console.log(hourE1)
//console.log(minuteE1)
//console.log(secondE1)

function updateClock(){
    const currentDate = new Date();
    //setTimeout(updateClock, 1000);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    //console.log(hour, minute, second);
    const hourDeg = (hour/12)*360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute/60)*360;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (second/60)*360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
}

//updateClock();
setInterval(updateClock, 1000);