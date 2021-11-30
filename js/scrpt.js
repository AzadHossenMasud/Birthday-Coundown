const birthday = "11 July 2022";

function countdown(){
    const birthdaydate= new Date(birthday);
    const currentdate = new Date();

    const totalSeconds = (birthdaydate - currentdate)/1000;
    
    const days = Math.floor(totalSeconds /(86400));
    const hours = Math.floor((totalSeconds % 86400)/ 3600);
    const minutes = Math.floor((totalSeconds % 3600)/60);
    const seconds = Math.floor(totalSeconds % 60);


    document.getElementById('days').innerHTML=formatTime(days);
    document.getElementById('hours').innerHTML= formatTime(hours);
    document.getElementById('minutes').innerHTML= formatTime(minutes);
    document.getElementById('seconds').innerHTML= formatTime(seconds);

    // Day
    if(days==1){
        document.getElementById('day').innerText= "Day";
    }
    else{
        document.getElementById('day').innerText= "Days";
    }
    // Hour
    if(hours==1){
        document.getElementById('hour').innerText= "Hour";
    }
    else{
        document.getElementById('hour').innerText= "Hours";
    }
    // Minute
    if(minutes==1){
        document.getElementById('minute').innerText= "Minute";
    }
    else{
        document.getElementById('minute').innerText= "Minutes";
    }
    // Second
    if(seconds==1){
        document.getElementById('second').innerText= "Second";
    }
    else{
        document.getElementById('second').innerText= "Seconds";
    }




}


function formatTime(time){
   if(time<10){
       return "0"+time;
   }
   else{
       return time
   }
}

setInterval(countdown, 1000);
countdown();