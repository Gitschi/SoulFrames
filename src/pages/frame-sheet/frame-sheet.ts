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
  // Imports moveList and makes a copy of it
  origMoveList = this.charService.selectedChar.moveList;
  moveList = Object.assign([], this.origMoveList);

  // Sets categories for headers
  categoryList: string[] = [
    "Horizontal Moves", "Vertical Moves", "Kick Moves", "Simultaneous Press Moves", "8-Way Run Moves", "Throws"
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
