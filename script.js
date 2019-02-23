window.addEventListener("keydown", turnTony)

var initialDegree = 0;

function degree(){
  if(initialDegree <= 300){
      return initialDegree++;
  }else{
    console.log("you're done!")
    return 0;
  }
}
function turnTony(){

  document.querySelector("img").style.transform =  `rotateY(${degree()}deg)`
}
