var timer = document.getElementById("timer");
var hours = document.getElementById("hours");

var minutes = document.getElementById("minutes");

var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");
var startstop = document.getElementById("startstop");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("alarm.mp3");
sound.loop = true;

var showTime = () => {
  var now = new Date(); //parse the date function
  currentTime = now.toLocaleTimeString(); //numerical value for time

  if(currentTime == alarmElement){   //comparing the current time with alarmElement and if matches the music will play
      sound.play();
  }
  timer.textContent = currentTime; //show text content in the frontend using the timer id
  setTimeout(showTime, 1000); //to show time each after one second
};

showTime();

function addMinSec(idSelection) {
  //create function to take idSelection as parameter
  var timimg = idSelection; //create timimg variable and assign idSelection to it
  var min = 59; //maximum time for minutes or seconds

  for (i = 0; i <= min; i++) {
    timimg.options[timimg.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}



function addHours(idSelection) {
  //create function to take idSelection as parameter
  var timimg = idSelection; //create timimg variable and assign idSelection to it
  var min = 12; //maximum time for minutes or seconds

  for (i = 0; i <= min; i++) {
    timimg.options[timimg.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

addHours(hours);
addMinSec(seconds); //calling the function with seconds as parameters
addMinSec(minutes); //calling the function with minutes as parameters


startstop.onclick = function(){
    if(activeAlarm === false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;

        alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value + ":" + ampm.value 
        console.log(alarmElement);  //display the set alarm in console log
        this.textContent = "Clear Alarm";
        activeAlarm = true;
        }
        else{
            hours.disabled = false;
            minutes.disabled = false;
            seconds.disabled = false;
            ampm.disabled = false;

            sound.pause();
            this.textContent = "Set Alarm";
            activeAlarm = false;
    }
}

