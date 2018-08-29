export class StringManipulationService{
  charStances = null;
  nonStanceCategories: number = 6;

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

  // Loops through move-list and exchanges alphanumeric notation for image-paths
  preloadCommandImages(moveList: any[]) {

    // Loop through all categories except for stances
    for(let i = 0; i < this.nonStanceCategories; i++){

      // Loop through single move
      for(let j = 0; j < moveList[i].length; j++){
        let fieldCommandImages: string[] = [];

        // Loop through single alphanumeric
        for(let k = 0; k < moveList[i][j].command.length; k++){
          let singleCommandImage: string = this.alphanumericToImagepath(moveList[i][j].command[k]);
          fieldCommandImages.push(singleCommandImage);
        }

        moveList[i][j].command = fieldCommandImages;
      }
    }

    // Loop through all stance lists
    for(let i = this.nonStanceCategories; i < moveList.length; i++){

      // Loop through single stance list
      for(let j = 0; j < moveList[i].length; j++){

        // Loop through single move
        for(let k = 0; k < moveList[i][j].length; k++){
          let fieldCommandImages: string[] = [];

          // Loop through single alphanumeric
          for(let l = 0; l < moveList[i][j][k].command.length; l++){
            let singleCommandImage: string = this.alphanumericToImagepath(moveList[i][j][k].command[l]);
            fieldCommandImages.push(singleCommandImage);
          }

          moveList[i][j][k].command = fieldCommandImages;
        }
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

  changeSheetStyle(moveList: any[]){
    // this.changeCommandImages();
    // this.preloadCommandImages(moveList);
    this.changeNumberColoration();
  }

  alphanumericToImagepath(alphaNum: string){
    switch(alphaNum){

      //Directions
      case "1": //Lower Left
        return "assets/imgs/input/1.png"

      case "2": //Bottom
        return "assets/imgs/input/2.png";

      case "3": //Lower Right
        return "assets/imgs/input/3.png";

      case "4": //Left
        return "assets/imgs/input/4.png";
      
      case "6": //Right
        return "assets/imgs/input/6.png";

      case "7": //Upper Left
        return "assets/imgs/input/7.png";

      case "8": //Top
        return "assets/imgs/input/8.png";
      
      case "9": //Upper Right
        return "assets/imgs/input/9.png";

      //8-Way Run
      case "!": //Hold Lower Left
        return "assets/imgs/input/I1.png";

      case "@": //Hold Bottom
        return "assets/imgs/input/I2.png";

      case "#": //Hold Lower Right
        return "assets/imgs/input/I3.png";

      case "$": //Hold Left
        return "assets/imgs/input/I4.png";
      
      case "^": //Hold Right
        return "assets/imgs/input/I6.png";

      case "u": //Hold Upper Left
        return "assets/imgs/input/I7.png";

      case "*": //Hold Top
        return "assets/imgs/input/I8.png";
      
      case "(": //Hold Upper Right
        return "assets/imgs/input/I9.png";

      //Standard Buttons
      case "A": //Horizontal
        return "assets/imgs/input/A.png";
      
      case "B": //Vertical
        return "assets/imgs/input/B.png";

      case "K": //Kick
        return  "assets/imgs/input/K.png";

      case "G": //Guard
        return "assets/imgs/input/G.png";

      //Inverted Standard Buttons
      case "a": //Hold Horizontal
        return "assets/imgs/input/Ia.png";
      
      case "b": //Hold Vertical
        return "assets/imgs/input/Ib.png";

      case "k": //Hold Kick
        return "assets/imgs/input/Ik.png";

      case "g": //Hold Guard
        return "assets/imgs/input/Ig.png";

      //Multi Button
      case "M": // A~B Horizontal ~ Vertical
        return "assets/imgs/input/M.png";

      case "N": // B~A Vertical ~ Horizontal
        return "assets/imgs/input/N.png";

      case "O": // K~A Kick ~ Horizontal
        return "assets/imgs/input/O.png";

      case "P": // K~B Kick ~ Vertical
        return "assets/imgs/input/P.png";
      
      // States
      case "C": // Full Crouch
        return "assets/imgs/input/C.png";
      
      case "T": // Back Turn
        return "assets/imgs/input/T.png";

      case "R": // Run
        return "assets/imgs/input/R.png";
      
      case "W": // While Rising
        return "assets/imgs/input/W.png";
      
      case "H": // Counter Hit
        return "assets/imgs/input/H.png";

      // Symbols
      case "+": // Plus
        return "assets/imgs/input/+.png";

      case "|": // Or
        return "assets/imgs/input/_.png";

     // Special Stances
      case "[": // Stance 1
        return this.charStances[0].imagePath;

      case "]": // Stance 2
        return this.charStances[1].imagePath;
    }
  }
}