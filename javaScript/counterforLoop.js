const   second = 1000,
        minute = second * 60,
        content = document.getElementById("content");

function startTimer() {
 var  userTimeInput = (document.getElementById("time").value); //minute
  stoppyBool = false;

countdown(userTimeInput);
console.log("before loop" + userTimeInput);

async function countdown(x) {
      for (var j = userTimeInput; j > 0; j--) {
        if (stoppyBool){
          break;
        }
        console.log(j);
        document.getElementById("minutes").innerText = j - 1;
        for (var i = 61; i > 0; i--) {
            if (i > 1) {
                document.getElementById("seconds").innerText = i -2;
                console.log(i);
                await sleep(1000); //timeout 1000
                if (stoppyBool){
                  break;
                }
            }
         }
      }
   }
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Functions for handling the Settings Tile

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
    stoppyBool = true;
}
