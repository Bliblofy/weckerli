const   second = 1000,
        minute = second * 60,
        countdown = document.getElementById("countdown"),
        content = document.getElementById("content");

let     time = 5;

console.log("log1" + "time");


function startTimer() {
  y = (document.getElementById("time").value); //minutes
  x = (y * 60); //seconds
  countdown(x);
  console.log("startTimerbeforeIf");
    function countdown(x) {
      if(x) {
          console.log(x+ " seconds left...");
          setTimeout(countdown, 1000, --x);
          document.getElementById("minutes").innerText = x;
          document.getElementById("seconds").innerText = x;
      } else {
          // no timer needed to be cleaned up
          console.log("Done...");
      }
  }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  let time = document.getElementById("time").value;
  console.log(time);
}

function changeTitle() {
  headline.innerText = document.getElementById("Titel").value;
}

function stopCounter() {
      stoppyBool = false;
}
