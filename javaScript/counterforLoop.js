const   second = 1000,
        minute = second * 60,
        content = document.getElementById("content");

function startTimer() {
 var  userTimeInput = (document.getElementById("time").value); //minute
  stoppyBool = false;

countdown(userTimeInput);

//has to be defined as async to allow for sleep beeing used
async function countdown(x) {
      for (var j = userTimeInput; j > 0; j--) {
        if (stoppyBool){
          break;
        }
        document.getElementById("minutes").innerText = j - 1;
        for (var i = 61; i > 0; i--) {
            if (i > 1) {
                document.getElementById("seconds").innerText = i -2;
                await sleep(1000); //timeout 1000
                if (stoppyBool){
                  break;
                }
            }
         }
      }
   }
  }
//function to enable sleep in Loop
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
}

function changeTitle() {
  headline.innerText = document.getElementById("Titel").value;
}

function stopCounter() {
    stoppyBool = true;
}
