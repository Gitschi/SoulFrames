import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { CharService } from '../../services/char.service';

import { FrameSheetPage } from '../frame-sheet/frame-sheet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  chars = this.charService.getChars();
  pressedButton: number;

  constructor(
    public navCtrl: NavController,
    private charService: CharService,
    private loadingController: LoadingController
  ) {
    this.pressedButton = null;
  }
  
  ionViewWillEnter(){
    this.pressedButton = null;
  }

  toFrameSheet(selection, index) {
    this.pressedButton = index;
    this.showLoader();
    this.navCtrl.push(FrameSheetPage);

    // Try to split this process and put on other page
    this.charService.charSelect(selection);
  }

  showLoader(){
    let loader = this.loadingController.create({
      spinner: "bubbles",
      content: "Building Frame Sheet...",
      dismissOnPageChange: true
    })

    loader.present();
  }
}
