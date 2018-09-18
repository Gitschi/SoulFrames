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

  constructor(
    public navCtrl: NavController,
    private charService: CharService,
    private loadingController: LoadingController
  ) {}
  
  toFrameSheet(selection) {
    this.showLoader();
    this.navCtrl.push(FrameSheetPage);
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
