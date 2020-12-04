const secNeedle = document.querySelector('.sec-needle'); 
const minNeedle = document.querySelector('.min-needle'); 
const hourNeedle = document.querySelector('.hour-needle'); 

function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ( ( sec / 60 ) * 360) + 90;
    secNeedle.style.transform = "rotate("+secDeg+"deg)";
    console.log(secNeedle);

    const mins = now.getMinutes();
    const minDeg = ( ( ( mins / 60 ) ) * 360) + 90;
    minNeedle.style.transform = `rotate(${minDeg}deg)`;

    const hours = now.getHours();
    const hourDeg = ( ( ( hours / 12 ) ) * 360) + 90;
    hourNeedle.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);