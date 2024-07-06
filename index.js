function updateClock(){
const now=new Date();
const hour=now.getHours();
const minute=now.getMinutes();
const seconds=now.getSeconds();
let meridium=(hour<12)?"AM":"PM";
const time=`${hour}:${minute}:${seconds} `+meridium;
document.getElementById("clock").textContent=time;
}
updateClock();
setInterval(updateClock,1000);