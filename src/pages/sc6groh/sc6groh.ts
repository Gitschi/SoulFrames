import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotationsPage } from '../notations/notations';

@IonicPage()
@Component({
  selector: 'page-sc6groh',
  templateUrl: 'sc6groh.html',
})
export class Sc6grohPage {

  horMoves = [
    {move : "Twin Splinters", command: "A", level: "H", dmg: "12", grd: "-8", hit: "2", ch: "2", notes: ""},
    {move : "Twin Splinters (C)", command: "AA", level: "H", dmg: "28", grd: "-6", hit: "6", ch: "6", notes: ""},
    {move : "Reaver", command: "6A", level: "H", dmg: "18", grd: "-2", hit: "8", ch: "8", notes: ""},
    {move : "Splitting Gold", command: "3A", level: "M", dmg: "22", grd: "-6", hit: "4", ch: "STN", notes: ""},
    {move : "Knee Slice", command: "2A", level: "SL", dmg: "12", grd: "-6", hit: "8", ch: "8", notes: ""},
    {move : "Shin Slicer", command: "1A", level: "L", dmg: "38", grd: "-16", hit: "KND", ch: "KND", notes: ""},
    {move : "Shin Slicer Feint", command: "1M", level: "M", dmg: "42", grd: "12", hit: "SLNC", ch: "SLNC", notes: ""},
    {move : "Dawn Breath", command: "4A", level: "M", dmg: "28", grd: "-4", hit: "4", ch: "4", notes: ""},
    {move : "Dawn Breath ~Mist", command: "4A6", level: "H, SS", dmg: "28", grd: "-2", hit: "6", ch: "6", notes: ""},
    {move : "Knee Slice", command: "CA", level: "SL", dmg: "12", grd: "-6", hit: "8", ch: "8", notes: ""},
    {move : "Silent Slash", command: "WA", level: "M", dmg: "28", grd: "-7", hit: "5", ch: "5", notes: ""},
    {move : "Field Reave", command: "7A", level: "H", dmg: "22", grd: "-3", hit: "7", ch: "7", notes: ""},
    {move : "Field Reave", command: "8A", level: "H", dmg: "24", grd: "-3", hit: "7", ch: "7", notes: ""},
    {move : "Field Reave", command: "9A", level: "H", dmg: "26", grd: "-3", hit: "7", ch: "7", notes: ""},
    {move : "Reverse Slice", command: "TA", level: "H", dmg: "14", grd: "-6", hit: "6", ch: "7", notes: ""},
    {move : "Hidden Slice", command: "T2A", level: "SL", dmg: "14", grd: "-6", hit: "8", ch: "8", notes: ""}
  ];

  verMoves = [
    {move : "Forced Prayer Divide", command: "B", level: "M", dmg: "16", grd: "-8", hit: "2", ch: "2", notes: ""},
    {move : "Forced Prayer Divide", command: "BB", level: "M,M", dmg: "34", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Forced Prayer Divide ~ Mist", command: "BB6", level: "M,M", dmg: "34", grd: "-10", hit: "-", ch: "", notes: ""},
    {move : "Mask", command: "B6", level: "H", dmg: "26", grd: "-8", hit: "-3", ch: "STN", notes: ""},
    {move : "Feint L", command: "M", level: "M", dmg: "32", grd: "-22", hit: "-10", ch: "AT", notes: ""},
    {move : "Tear Step", command: "HM", level: "M", dmg: "48", grd: "X", hit: "X", ch: "KND", notes: ""},
    {move : "Wind Hole", command: "6B", level: "M", dmg: "24", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Wind Hole Upper", command: "6B8", level: "H", dmg: "32", grd: "-2", hit: "6", ch: "6", notes: ""},
    {move : "Wind Hole Lower", command: "6B2", level: "L", dmg: "36", grd: "-6", hit: "STN", ch: "STN", notes: ""},
    {move : "Wind Hole Lower (Delay)", command: "6B2", level: "L", dmg: "20", grd: "-12", hit: "-2", ch: "-2", notes: ""},
    {move : "Heaven Cannon", command: "3B", level: "M", dmg: "32", grd: "-16", hit: "LNC", ch: "LNC", notes: ""},
    {move : "Rust", command: "2B", level: "M", dmg: "18", grd: "-7", hit: "2", ch: "2", notes: ""},
    {move : "Air Tale", command: "1B", level: "M", dmg: "21", grd: "-4", hit: "4", ch: "4", notes: ""},
    {move : "Wind Hole Vortex", command: "4B", level: "M", dmg: "38", grd: "-12", hit: "KND", ch: "KND", notes: ""},
    {move : "Wind Hole Vortex ~ Mist", command: "4B6", level: "SS", dmg: "X", grd: "X", hit: "X", ch: "X", notes: ""},
    {move : "Upper Arch", command: "CB", level: "M", dmg: "18", grd: "-8", hit: "2", ch: "2", notes: ""},
    {move : "Time Hole", command: "C3B", level: "H", dmg: "30", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Heavenly Stitch", command: "C1B", level: "M,M", dmg: "24", grd: "-12", hit: "LNC", ch: "LNC", notes: ""},
    {move : "Heavenly Stitch", command: "C1BB", level: "M", dmg: "50", grd: "-8", hit: "KND", ch: "KND", notes: ""},
    {move : "Wind Divide", command: "WB", level: "M", dmg: "24", grd: "-8", hit: "2", ch: "2", notes: ""},
    {move : "Shearing Knot", command: "7B", level: "M", dmg: "24", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Shearing Knot", command: "8B", level: "M", dmg: "27", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Shearing Knot", command: "9B", level: "M", dmg: "30", grd: "-6", hit: "4", ch: "4", notes: ""},
    {move : "Reverse Divide", command: "TB", level: "M", dmg: "18", grd: "-5", hit: "4", ch: "4", notes: ""},
    {move : "Hidden Divide", command: "T2B", level: "M", dmg: "20", grd: "-8", hit: "2", ch: "2", notes: ""}
  ];

  kickMoves = [
    {move : "Snap Kick", command: "K", level: "H", dmg: "14", grd: "-8", hit: "2", ch: "2", notes: ""},
    {move : "Obedience", command: "P", level: "M,M", dmg: "64", grd: "-16", hit: "KND", ch: "", notes: ""},
    {move : "Wheel Kick", command: "6K", level: "H", dmg: "23", grd: "-4", hit: "6", ch: "6", notes: ""},
    {move : "Front Kick", command: "3K", level: "M", dmg: "23", grd: "-4", hit: "7", ch: "7", notes: ""},
    {move : "Stalk Shaver", command: "2K", level: "L", dmg: "20", grd: "-26", hit: "-10", ch: "KND", notes: ""},
    {move : "Stalk Shaver", command: "2KB", level: "L,M", dmg: "48", grd: "-26", hit: "-16", ch: "KND", notes: ""},
    {move : "Stalk Shaver ~ Mist", command: "2KB6", level: "L,M,SS", dmg: "48", grd: "-22", hit: "-10", ch: "KND", notes: ""},
    {move : "Hem Stitch", command: "1K", level: "L", dmg: "16", grd: "-14", hit: "-2", ch: "-2", notes: ""},
    {move : "Bullet Cutter", command: "4K", level: "M", dmg: "22", grd: "-12", hit: "KND", ch: "KND", notes: ""},
    {move : "Bullet Cutter", command: "4KB", level: "M,M", dmg: "52", grd: "-8", hit: "KND", ch: "KND", notes: ""},
    {move : "Hem Stitch", command: "CK", level: "L", dmg: "16", grd: "-14", hit: "-2", ch: "-2", notes: ""},
    {move : "Front Kick", command: "WK", level: "M", dmg: "18", grd: "-6", hit: "6", ch: "6", notes: ""},
    {move : "Jump Kick", command: "7K", level: "M", dmg: "22", grd: "-10", hit: "0", ch: "0", notes: ""},
    {move : "Jump Kick", command: "8K", level: "M", dmg: "25", grd: "-10", hit: "0", ch: "0", notes: ""},
    {move : "Jump Kick", command: "9K", level: "M", dmg: "28", grd: "-10", hit: "0", ch: "0", notes: ""},
    {move : "Reverse Kick", command: "TK", level: "H", dmg: "16", grd: "-6", hit: "2", ch: "2", notes: ""},
    {move : "Hidden Kick", command: "T2K", level: "L", dmg: "18", grd: "-14", hit: "-2", ch: "-2", notes: ""}
  ];

  simPressMoves = [
    {move : "Autumn Requiem", command: "A+B", level: "M", dmg: "69", grd: "-8", hit: "KND", ch: "KND", notes: ""},
    {move : "Cold Stitch", command: "2A+B", level: "M", dmg: "28", grd: "-2", hit: "8", ch: "8", notes: ""},
    {move : "Wheel Slash", command: "7|8|9A+B", level: "M", dmg: "58", grd: "2", hit: "STN", ch: "STN", notes: ""},
    {move : "Dividing Thrust", command: "B+K", level: "M", dmg: "30/56", grd: "-17", hit: "-3", ch: "KND", notes: ""},
    {move : "Dividing Thrust", command: "B+K4", level: "M", dmg: "66", grd: "", hit: "", ch: "KND", notes: ""},
    {move : "Samurai Tackle", command: "TB+K", level: "M", dmg: "30", grd: "-12", hit: "KND", ch: "KND", notes: ""}
  ];

  eightWayMoves = [
    {move : "Acute Gale", command: "^|#|(A", level: "H", dmg: "32", grd: "-6", hit: "6", ch: "STN", notes: ""},
    {move : "Dawn Air", command: "@|*A", level: "M", dmg: "26", grd: "-1", hit: "5", ch: "KND", notes: ""},
    {move : "True Vacuum", command: "!|uA", level: "L", dmg: "32", grd: "-16", hit: "KND", ch: "KND", notes: ""},
    {move : "Firey Air", command: "$A", level: "M", dmg: "52", grd: "-14", hit: "-2", ch: "", notes: ""},
    {move : "Heavenly Dance", command: "^B", level: "M", dmg: "26", grd: "-13", hit: "KND", ch: "KND", notes: ""},
    {move : "Heavenly Dance", command: "#|(B", level: "M", dmg: "26", grd: "-13", hit: "LNC", ch: "LNC", notes: ""},
    {move : "Heavenly Dance", command: "^|#|(BB", level: "M,M", dmg: "58", grd: "-23", hit: "LNC", ch: "LNC", notes: ""},
    {move : "Hell Flash", command: "@|*B", level: "M", dmg: "32", grd: "-11", hit: "STN", ch: "STN", notes: ""},
    {move : "Blunt Flames", command: "!|uB", level: "M", dmg: "23", grd: "-10", hit: "2", ch: "2", notes: ""},
    {move : "Blunt Flames", command: "!|uBA", level: "M,H", dmg: "55", grd: "-9", hit: "3", ch: "3", notes: ""},
    {move : "Blunt Flames", command: "!|uBAB", level: "M,H,M", dmg: "93", grd: "-12", hit: "STN", ch: "STN", notes: ""},
    {move : "Blunt Flames ~ Mist", command: "!|uBA6", level: "M,H,SS", dmg: "55", grd: "-8", hit: "4", ch: "4", notes: ""},
    {move : "Hell Divide", command: "$B", level: "M", dmg: "18", grd: "-8", hit: "KND", ch: "STN", notes: ""},
    {move : "Hell Divide ~ Mist", command: "$B6", level: "M,SS", dmg: "18", grd: "-5", hit: "KND", ch: "STN", notes: ""},
    {move : "Rising Knee", command: "^K", level: "M", dmg: "20", grd: "-8", hit: "6", ch: "KND", notes: ""},
    {move : "Rising Knee", command: "#|*K", level: "M", dmg: "22", grd: "-2", hit: "6", ch: "KND", notes: ""},
    {move : "Wheel Kick", command: "@|*K", level: "H", dmg: "25", grd: "-4", hit: "10", ch: "KND", notes: ""},
    {move : "Bullet Cutter", command: "$|!|uK", level: "M", dmg: "24", grd: "-12", hit: "KND", ch: "KND", notes: ""},
    {move : "Bullet Cutter", command: "$|!|uKB", level: "M,M", dmg: "54", grd: "-8", hit: "KND", ch: "KND", notes: ""},
    {move : "Phoenix Tail", command: "^|#|(|@|*A+B", level: "M", dmg: "52", grd: "-2", hit: "KND", ch: "KND", notes: ""},
    {move : "Sliding", command: "RK", level: "L", dmg: "26", grd: "-22", hit: "KND", ch: "KND", notes: ""}
  ];

  // Stances
  
  ssStanceMoves = [
    {move : "Silent Step", command: "236", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""},
    {move : "Silent Step Slash", command: "[A", level: "M", dmg: "33", grd: "-7", hit: "5", ch: "5", notes: ""},
    {move : "Step Stone Divide", command: "[B", level: "M", dmg: "42", grd: "-16", hit: "-2", ch: "-2", notes: ""},
    {move : "Step Stone Divide", command: "[b", level: "M", dmg: "62", grd: "-2", hit: "KND", ch: "KND", notes: ""},
    {move : "Silent Step Kick", command: "[K", level: "M", dmg: "18", grd: "-6", hit: "6", ch: "6", notes: ""}
  ];

  mstStanceMoves = [
    {move : "Mist", command: "4|6B+K", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""},
    {move : "Mist", command: "$|^B+K", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""},
    {move : "Full Divide", command: "]A", level: "H", dmg: "28", grd: "-9", hit: "KND", ch: "KND", notes: ""},
    {move : "Wind Stitch", command: "]B", level: "H", dmg: "10", grd: "-10", hit: "0", ch: "STN", notes: ""},
    {move : "Wind Stitch", command: "]BB", level: "H,H", dmg: "20", grd: "-10", hit: "0", ch: "STN", notes: ""},
    {move : "Wind Stitch", command: "]BBB", level: "H,H,H", dmg: "30", grd: "-10", hit: "0", ch: "STN", notes: ""},
    {move : "Wind Grab", command: "]BB+K", level: "H,M", dmg: "30", grd: "-14", hit: "-1", ch: "AT", notes: ""},
    {move : "Wind Grab", command: "]BB+K", level: "H,M", dmg: "48", grd: "", hit: "", ch: "STN", notes: ""},
    {move : "Wind Torture", command: "]BB+K4", level: "H,M", dmg: "35", grd: "", hit: "", ch: "KND", notes: ""},
    {move : "Water Parting Thrust", command: "]K", level: "L", dmg: "16", grd: "-20", hit: "-12", ch: "-12", notes: ""},
    {move : "Water Parting Thrust", command: "]KB", level: "L,H", dmg: "44", grd: "-15", hit: "-6", ch: "-6", notes: ""},
    {move : "Divide", command: "]A+B", level: "M", dmg: "38", grd: "-3", hit: "STN", ch: "STN", notes: ""},
    {move : "Wind Purify", command: "]B+K", level: "M", dmg: "30", grd: "-14", hit: "-1", ch: "KND", notes: ""},
    {move : "Wind Divide", command: "]B+K4", level: "M", dmg: "56", grd: "", hit: "", ch: "KND", notes: ""},
    {move : "Wind Purify", command: "]b+k", level: "M", dmg: "60", grd: "15", hit: "KND", ch: "KND", notes: ""},
    {move : "Wind Divide", command: "]b+k4", level: "M", dmg: "70", grd: "15", hit: "KND", ch: "KND", notes: ""},
    {move : "Lion's Clutch", command: "]A+G", level: "TH", dmg: "45", grd: "", hit: "KND", ch: "KND", notes: ""},
    {move : "Korefuji", command: "]B+G", level: "TH", dmg: "50", grd: "", hit: "KND", ch: "KND", notes: ""},
    {move : "Mist Step", command: "]66|44", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""},
    {move : "Mist ~ Jump", command: "]7|8|9", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""},
    {move : "Mist ~ Duck", command: "]1|2|3", level: "SS", dmg: "", grd: "", hit: "", ch: "", notes: ""}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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
            newImg.setAttribute("src", "assets/imgs/input/MitsuSilent.png");
            break;

          case "]": // Mist
            newImg.setAttribute("src", "assets/imgs/input/MitsuMist.png");
            break;


        }
        document.getElementsByClassName("command")[i].appendChild(newImg) // appends <img> child to corresponding cell
      }
    }

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
}
