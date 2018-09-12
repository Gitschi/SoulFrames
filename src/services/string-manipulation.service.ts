export class StringManipulationService{
  charStances = null;
  nonStanceCategories: number = 6;

  // Loops through move-list and exchanges alphanumeric notations and levels for image-paths
  preloadCommandImages(moveList: any[]) {

    // Loop through all categories except for stances
    for(let i = 0; i < moveList.length; i++){

      // Loop through single move
      for(let j = 0; j < moveList[i].length; j++){
        let fieldCommandImages: string[] = [];
        let fieldLevelImages: string[] = [];

        // Loop through single alphanumeric of command
        for(let k = 0; k < moveList[i][j].command.length; k++){
          let singleCommandImage: string = this.commandToImagepath(moveList[i][j].command[k]);
          fieldCommandImages.push(singleCommandImage);
        }
        // Exchanges old command data with new data
        moveList[i][j].command = fieldCommandImages;

        // Loop through single letter of level
        if(moveList[i][j].level){
          for(let k = 0; k < moveList[i][j].level.length; k++){
            let singleLevelImage: string = this.levelToImagepath(moveList[i][j].level[k]);
            fieldLevelImages.push(singleLevelImage);
          }
          // Exchanges old level data with new data
          moveList[i][j].level = fieldLevelImages;  
        }
      }
    }
  }

  // Changes from string annotation to imagepath
  commandToImagepath(alphaNum: string){
    switch(alphaNum){
      
      //Attack Buttons
      case "A": //Horizontal
        return "assets/imgs/input/A.png";
      
      case "B": //Vertical
        return "assets/imgs/input/B.png";

      case "K": //Kick
        return  "assets/imgs/input/K.png";

      case "G": //Guard
        return "assets/imgs/input/G.png";

      //Inverted Attack Buttons
      case "a": //Hold Horizontal
        return "assets/imgs/input/Ia.png";
      
      case "b": //Hold Vertical
        return "assets/imgs/input/Ib.png";

      case "k": //Hold Kick
        return "assets/imgs/input/Ik.png";

      case "g": //Hold Guard
        return "assets/imgs/input/Ig.png";
      
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

      //Small Attack Buttons
      case "z": //Slide A
        return "assets/imgs/input/Sa.png";
      
      case "x": //Slide B
        return "assets/imgs/input/Sb.png";

      case "c": //Slide C
        return "assets/imgs/input/Sk.png";
      
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
      
      case "J": // Jump
        return "assets/imgs/input/J.png";

      case "W": // While Rising
        return "assets/imgs/input/W.png";
      
      case "H": // Counter Hit
        return "assets/imgs/input/H.png";
      
      case "v": // During Hit
        return "assets/imgs/input/v.png";

      // Throws
      case "Z": // Left Side throw
        return "assets/imgs/input/left.png";

      case "X": // Right Side Throw
        return "assets/imgs/input/right.png";

      case "V": //Back throw
        return "assets/imgs/input/back.png";

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

      case "{": // Stance 3
        return this.charStances[2].imagePath;

      case "}": // Stance 4
        return this.charStances[3].imagePath;
    }
  }

  levelToImagepath(level: string){
    switch(level){
      //Directions
      case "L": // Low
        return "assets/imgs/levels/Low.png"

      case "M": // Mid
        return "assets/imgs/levels/Mid.png";

      case "H": // High
        return "assets/imgs/levels/High.png";

      case "S": // Special Low
        return "assets/imgs/levels/SpecLow.png";

      default: // Null
        return null;
    }
  }
}