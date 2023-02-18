//Recaman Int Code

let recamanInts = [];
let displayInts = document.getElementById("displayInts");
let prevAdded;
let switchDir;

//returns true if added, false if subtracted
function nextRecaman() {
  let size = recamanInts.length;
  if(size == 0){
    recamanInts.push(0);
    prevAdded = true;
    switchDir = false;
    return true;
  }

  let lastRecaman = recamanInts[size - 1];
  let temp = lastRecaman - size;
  
  //add
  if (temp < 0 || recamanInts.includes(temp)) {
      recamanInts.push(lastRecaman + size);
      switchDir = prevAdded ? true : false;
      prevAdded = true;

      return true;

  //subtract    
  } else {
      recamanInts.push(temp);
      switchDir = prevAdded ? false : true;
      prevAdded = false;
      
      return false;
  }
}

function nextRecamanAndPrint(){
  nextRecaman();
  changeDisplayInts();
}

function generateRecaman() {
  recamanInts = [];
  let n = document.getElementById("nth").value;
  
  if(n <= 0){
    return;
  }

  for (let i = 1; i <= n; i++) {
      nextRecaman();
  }
  changeDisplayInts();
}

function changeDisplayInts(){
  displayInts.textContent = recamanInts;
}


//Semicircle code:

let elem = document.getElementById("semicircles");

function makePath(){
  let path = "M 10 200";

  let clockwise = 1;
  let rScale = 2;
  let radius;
  let dx;

  let n = recamanInts.length;
  recamanInts = [];
  
  for(let i = 0; i < n; i++){
    let added = nextRecaman();
    clockwise = switchDir ? clockwise = (clockwise + 1) % 2 : clockwise;
    radius = rScale * (recamanInts.length-1);
  
    if(added){
      dx = radius*2;  
    }
    else{
      
      dx = radius*-2;
    }
  
    path += makePathStr(radius, clockwise, dx);
  }

  elem.setAttribute("d", path);
  elem.style.strokeDashoffset = elem.getTotalLength();
  elem.style.strokeDasharray = elem.getTotalLength(); 
}

function makePathStr(radius, clockwise, dx){
   return "a" + radius + " " + radius + " " + 180 + " 1 " + clockwise + " " + dx + " 0";
}

function drawPath(){
  makePath();

  let len = elem.getTotalLength();
  let id = setInterval(frame, 10);
  function frame(){
    if (len <= 0){
      clearInterval(id);
      finalPath.style.strokeDashoffset = 0;
    }
    else {
      len -= 20;
      elem.style.strokeDashoffset = len;
    }  
  }
}

