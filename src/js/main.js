let tokenSpots = document.getElementsByClassName("space");
let token = ["X", "O"];
let turn = [1, 2];


document.onreadystatechange = function () {
   if (document.readyState == "interactive") {
       // "interactive" means that the DOM is ready for us manipulate
       start();
   }
}

function start() {
   // Create event listeners on every space div
   let spaces = document.getElementsByClassName("space");
   for (let i = 0; i < spaces.length; i++) {
       spaces[i].addEventListener("click", spaceLogic);
   }
}

function spaceLogic(event){

  let space = event.target;

  if (turn[0]){
    playerOne(space);
    turn[+ 1];
  } else if (turn[1]){
    playerTwo(space);
    turn[- 1];
  }
    //for (let i = 0; i < turn.length; i++){
    //  if (turn[i] = 1){
    //    playerOne(space);
    //    turn[i + 1];
    //  } else if (turn[i] = 2){
    //    playerTwo(space);
    //    turn[i - 1];
    //  }
    //}
  }


    function playerOne(space){
      for(let i = 0; i < tokenSpots.length; i++){
      if (tokenSpots[i] == secondToken()){

      } else {
        space.innerHTML = firstToken();
      }
    }
  }

function playerTwo(space){
  for(let i = 0; i < tokenSpots.length; i++){
  if (tokenSpots[i] == firstToken()){

  } else {
    space.innerHTML = secondToken();
  }
  }
}

function firstToken(space){
  return token[0];
}

function secondToken(space){
  return token[1];
}
