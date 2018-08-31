import { Component } from '@angular/core';
import { FrameSheetPage } from '../../pages/frame-sheet/frame-sheet';

@Component({
  selector: 'filters',
  templateUrl: 'filters.html'
})

export class FiltersComponent {

  /*filterHeaders: string[] = [
    "into Stance only",
    "Reset"
  ] */

  constructor(
    private frameSheetPage: FrameSheetPage
  ){}

  filter(){
    this.frameSheetPage.filter();
  }

  reset(){
    this.frameSheetPage.reset();
  }
}