let hrspan=document.querySelector('.hour');
let minspan=document.querySelector('.min');
let secspan=document.querySelector('.sec');
let midyspan=document.querySelector('.midy');
let dayspan=document.querySelector('.container .clock h2');



let clock=setInterval(
    function calcTime(){
        let date_now=new Date();
        let day=date_now.getDay()
        let hour=date_now.getHours()
        let mins=date_now.getMinutes();
        let sec = date_now.getSeconds();
        var middayValue = "AM"
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        dayspan.textContent=days[day]
        hour>12 ?middayValue='PM' :middayValue='AM'
        midyspan.textContent=middayValue;
        if(hour>12){
            hour=hour-12
        }
        else if(hour==0){
            hour=12
        }
        hrspan.textContent=padTime(hour);
        minspan.textContent=padTime(mins);
        secspan.textContent=padTime(sec);

    }
,1000)
let padTime= (time)=>{
   return time.toString().padStart(2, "0");
}