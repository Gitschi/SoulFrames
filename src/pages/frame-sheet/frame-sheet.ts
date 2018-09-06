import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotationsPage } from '../notations/notations';

import { CharService } from '../../services/char.service';
import { StringManipulationService } from '../../services/string-manipulation.service';

@IonicPage()
@Component({
  selector: 'page-frame-sheet',
  templateUrl: 'frame-sheet.html',
  providers: []
})

export class FrameSheetPage {
  // Sets how many arrays the object has before stances
  nonStanceCategories: number = 6;

  // Array of status image paths
  attributes: object = {
    BA: "assets/imgs/attributes/BA.png",
    GI: "assets/imgs/attributes/GI.png",
    LH: "assets/imgs/attributes/LH.png",
    RE: "assets/imgs/attributes/RE.png",
    SC: "assets/imgs/attributes/SC.png",
    SS: "assets/imgs/attributes/SS.png",
    TH: "assets/imgs/attributes/TH.png",
    UA: "assets/imgs/attributes/UA.png",
    C: "assets/imgs/attributes/C.png"
  }

  // Imports moveList and makes a copy of it
  origMoveList = this.charService.selectedChar.moveList;
  moveList = Object.assign([], this.origMoveList);

  // Sets categories for headers
  categoryList: string[] = [
    "Horizontal Attacks", "Vertical Attacks", "Kicks", "Dual Button Attacks", "8-Way Run Moves", "Throws"
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private charService: CharService,
    private stringManipulationService: StringManipulationService
  ){}

  // Resets moveList to original
  reset(){
    this.moveList = Object.assign([], this.origMoveList);
    
    // Movelist isn't correctly resetting for stancemoves
    console.log(this.moveList);
  }

  // Filters moveList to only show StanceMoves
  filter(){
    //Only execute if moveList[6] exist, which means the character has stances
    if(this.moveList[6]){
      for(let i = 0; i < this.moveList.length -1; i++){
        this.moveList[i] = this.moveList[i].filter(
          move => move.intoStance);  
      }
  
      for(let i = 0; i < this.moveList[6].length; i++){
          this.moveList[6][i] = this.moveList[6][i].filter(
            move => move.intoStance);    
      }  
    }
  }

  ionViewDidLoad() {
    this.stringManipulationService.changeNumberColoration();
  }

  goToOtherPageNotations() {
    this.navCtrl.push(NotationsPage);
  }
}
