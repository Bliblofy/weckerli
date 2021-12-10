const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      countdown = document.getElementById("countdown"),
      content = document.getElementById("content");


let   stoppyBool = 1,
      time = "15:00";
      i = 0;

function startTimer () {
  let endtime = "Mar 11, 2099 " + time + ":00",
      countDown = new Date(endtime).getTime();
      window.x = setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;
            i = i + 1;
            console.log(i);
          //document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        //do something later when date is reached
        if (distance < 0) {
          headline.innerText = "Break is over, let's start again";
          countdown.style.display = "none";
          content.style.display = "block";
          clearInterval(window.x);
        }
        //milliseconds
      }, 1000)
}

function changeTitle() {
  headline.innerText = document.getElementById("Titel").value;
  }

function changeTime() {
let time = document.getElementById("time").value;
console.log(time)
startTimer();
    }
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function stopCounter() {
  clearInterval(window.x);
}
