export class StringManipulationService{
  charStances = null;

  changeCommandImages() {
    let comArr = document.getElementsByClassName("command"); // Fetches a nodelist with all command cells
    for(let i = 0; i < comArr.length; i++){
      let elString = document.getElementsByClassName("command")[i].innerHTML; // Fetches string for this iteration of the loop
      document.getElementsByClassName("command")[i].innerHTML = ""; // Clears raw text from column
      for(let j = 0; j < elString.length; j++){
        let newImg = document.createElement("img"); // creates new <img>
        newImg.setAttribute("class", "inputImg"); //  sets class for <img>
        let alphaNum = elString[j];

        switch(alphaNum){

          //Directions
          case "1": //Lower Left
            newImg.setAttribute("src", "assets/imgs/input/1.png");
            break;

          case "2": //Bottom
            newImg.setAttribute("src", "assets/imgs/input/2.png");
            break;

          case "3": //Lower Right
            newImg.setAttribute("src", "assets/imgs/input/3.png");
            break;

          case "4": //Left
            newImg.setAttribute("src", "assets/imgs/input/4.png");
            break;
          
          case "6": //Right
            newImg.setAttribute("src", "assets/imgs/input/6.png");
            break;

          case "7": //Upper Left
            newImg.setAttribute("src", "assets/imgs/input/7.png");
            break;

          case "8": //Top
            newImg.setAttribute("src", "assets/imgs/input/8.png");
            break;
          
          case "9": //Upper Right
            newImg.setAttribute("src", "assets/imgs/input/9.png");
            break;

          //8-Way Run
          case "!": //Hold Lower Left
            newImg.setAttribute("src", "assets/imgs/input/I1.png");
            break;

          case "@": //Hold Bottom
            newImg.setAttribute("src", "assets/imgs/input/I2.png");
            break;

          case "#": //Hold Lower Right
            newImg.setAttribute("src", "assets/imgs/input/I3.png");
            break;

          case "$": //Hold Left
            newImg.setAttribute("src", "assets/imgs/input/I4.png");
            break;
          
          case "^": //Hold Right
            newImg.setAttribute("src", "assets/imgs/input/I6.png");
            break;

          case "u": //Hold Upper Left
            newImg.setAttribute("src", "assets/imgs/input/I7.png");
            break;

          case "*": //Hold Top
            newImg.setAttribute("src", "assets/imgs/input/I8.png");
            break;
          
          case "(": //Hold Upper Right
            newImg.setAttribute("src", "assets/imgs/input/I9.png");
            break;

          //Standard Buttons
          case "A": //Horizontal
            newImg.setAttribute("src", "assets/imgs/input/A.png");
            break;
          
          case "B": //Vertical
            newImg.setAttribute("src", "assets/imgs/input/B.png");
            break;

          case "K": //Kick
            newImg.setAttribute("src", "assets/imgs/input/K.png");
            break;

          case "G": //Guard
            newImg.setAttribute("src", "assets/imgs/input/G.png");
            break;

          //Inverted Standard Buttons
          case "a": //Hold Horizontal
            newImg.setAttribute("src", "assets/imgs/input/Ia.png");
            break;
          
          case "b": //Hold Vertical
            newImg.setAttribute("src", "assets/imgs/input/Ib.png");
            break;

          case "k": //Hold Kick
            newImg.setAttribute("src", "assets/imgs/input/Ik.png");
            break;

          case "g": //Hold Guard
            newImg.setAttribute("src", "assets/imgs/input/Ig.png");
            break;

          //Multi Button
          case "M": // A~B Horizontal ~ Vertical
            newImg.setAttribute("src", "assets/imgs/input/M.png");
            break;

          case "N": // B~A Vertical ~ Horizontal
            newImg.setAttribute("src", "assets/imgs/input/N.png");
            break;

          case "O": // K~A Kick ~ Horizontal
            newImg.setAttribute("src", "assets/imgs/input/O.png");
            break;

          case "P": // K~B Kick ~ Vertical
            newImg.setAttribute("src", "assets/imgs/input/P.png");
            break;
          
          // States
          case "C": // Full Crouch
            newImg.setAttribute("src", "assets/imgs/input/C.png");
            break;
          
          case "T": // Back Turn
            newImg.setAttribute("src", "assets/imgs/input/T.png");
            break;

          case "R": // Run
            newImg.setAttribute("src", "assets/imgs/input/R.png");
            break;
          
          case "W": // While Rising
            newImg.setAttribute("src", "assets/imgs/input/W.png");
            break;
          
          case "H": // Counter Hit
            newImg.setAttribute("src", "assets/imgs/input/H.png");
            break;

          // Symbols
          case "+": // Plus
            newImg.setAttribute("src", "assets/imgs/input/+.png");
            break;

          case "|": // Or
            newImg.setAttribute("src", "assets/imgs/input/_.png");
            break;

         // Special Stances
          case "[": // Silent Step
            newImg.setAttribute("src", this.charStances[0].imagePath);
            break;

          case "]": // Mist
            newImg.setAttribute("src", this.charStances[1].imagePath);
            break;
        }
        document.getElementsByClassName("command")[i].appendChild(newImg) // appends <img> child to corresponding cell
      }
    }
  }

  changeNumberColoration(){
    let numArr = document.getElementsByClassName("targetNum"); // Fetches a nodelist with all numeral cells
    for(let i = 0; i < numArr.length; i+1){
      let elString = numArr[i].innerHTML;
      if(elString[0] == "-"){
        numArr[i].setAttribute("class", "negVal");
      } else if(elString == "KND" || elString == "STN" || elString == "SLNC" || elString == "AT" || elString == "LNC") {
        numArr[i].setAttribute("class", "specVal");
      } else if(elString == "0" || elString == "X"){
        numArr[i].setAttribute("class", "neutVal");
      } else {
        numArr[i].setAttribute("class", "posVal");
      }
    }
  }

  changeSheetStyle(){
    this.changeCommandImages();
    this.changeNumberColoration();
  }
}