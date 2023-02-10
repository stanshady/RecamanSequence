let recamanInts = [];
let prevAdded;
let switchDir;

function initRecaman(){
  recamanInts = []
}

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

function generateRecaman() {
  recamanInts = [];
  let n = document.getElementById("nth").value;
  
  if(n <= 0){
    return;
  }

  for (let i = 1; i <= n; i++) {
      nextRecaman();
  }
}

export {recamanInts, nextRecaman, generateRecaman, switchDir, initRecaman}