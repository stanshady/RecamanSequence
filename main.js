import{recamanInts, nextRecaman, generateRecaman} from "./recamanInts.js"
import{makePath} from "./semiCircles.js"

let displayInts = document.getElementById("displayInts");
let nextBtn = document.getElementById("nextBtn")
nextBtn.addEventListener('click', nextRecamanAndPrint)
let generateBtn = document.getElementById("generateBtn")
generateBtn.addEventListener('click', generateRecamanAndPrint)
let animateBtn = document.getElementById("animateBtn")
animateBtn.addEventListener('click', drawPath)

function nextRecamanAndPrint(){
  nextRecaman();
  displayInts.textContent = recamanInts;
}

function generateRecamanAndPrint(){
  generateRecaman();
  displayInts.textContent = recamanInts;
}

function drawPath(){
  makePath();
  let finalPath = document.getElementById("semicircles");
  let len = finalPath.getTotalLength();
  let id = setInterval(frame, 10);
  function frame(){
    if (len < 0){
      clearInterval(id);
      finalPath.style.strokeDashoffset = 0;
    }
    else {
      len -= 20;
      finalPath.style.strokeDashoffset = len;
    }  
  }
}