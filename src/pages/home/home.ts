import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CharService } from '../../services/char.service';

import { FrameSheetPage } from '../frame-sheet/frame-sheet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  chars = this.charService.getChars();

  constructor(public navCtrl: NavController, private charService: CharService) {}
  
  toFrameSheet(selection) {
    this.navCtrl.push(FrameSheetPage);
    this.charService.charSelect(selection);
  }
}
