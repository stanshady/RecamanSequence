import{recamanInts, nextRecaman, switchDir, initRecaman} from "./recamanInts.js"

let finalPath = document.getElementById("semicircles");

function makePath(){
  let path = "M 10 200";
  let clockwise = 1;
  let rScale = 2;
  let radius;
  let dx;
  let n = recamanInts.length;
  initRecaman()
  
  for(let i = 0; i < n; i++){
    let added = nextRecaman();
    clockwise = switchDir ? clockwise = (clockwise + 1) % 2 : clockwise;
    radius = rScale * (recamanInts.length-1);
    dx = added ? radius*2 : radius*-2;
    path += "a" + radius + " " + radius + " " + 180 + " 1 " + clockwise + " " + dx + " 0";
  }

  finalPath.setAttribute("d", path);
  finalPath.style.strokeDashoffset = finalPath.getTotalLength();
  finalPath.style.strokeDasharray = finalPath.getTotalLength(); 
}

export{makePath}