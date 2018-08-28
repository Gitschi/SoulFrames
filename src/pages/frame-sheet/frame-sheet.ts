import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotationsPage } from '../notations/notations';

import { CharService } from '../../services/char.service';
import { StringManipulationService } from '../../services/string-manipulation.service';

@IonicPage()
@Component({
  selector: 'page-frame-sheet',
  templateUrl: 'frame-sheet.html',
  providers: [StringManipulationService]
})

export class FrameSheetPage {
  origMoveList = this.charService.selectedChar.moveList;
  moveList = Object.assign([], this.origMoveList);

  categoryList: string[] = [
    "Horizontal Moves", "Vertical Moves", "Kick Moves", "Simultaneous Press Moves", "8-Way Run Moves", "Throws"
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private charService: CharService,
    private stringManipulationService: StringManipulationService
  ){
    // Sends movelist to string manipulation service when constructing
    if(this.charService.selectedChar.stanceList){
      this.stringManipulationService.charStances = this.charService.selectedChar.stanceList;
    }
  }

  reset(){
    this.moveList = Object.assign([], this.origMoveList);
  }

  filter(){
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
    this.stringManipulationService.changeSheetStyle();
  }

  goToOtherPageNotations() {
    this.navCtrl.push(NotationsPage);
  }
}
