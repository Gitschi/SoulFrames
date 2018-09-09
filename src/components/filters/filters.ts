import { Component } from '@angular/core';
import { FrameSheetPage } from '../../pages/frame-sheet/frame-sheet';

@Component({
  selector: 'filters',
  templateUrl: 'filters.html'
})

export class FiltersComponent {
  viewMode: string = "categoryView";
  dropDownShow = {
    attributes: false
  }
  // Also adjust all dropDownshows upon closing menu

  filterSelection = {
    intoStance: false,
    intoCrouch: false,
    breakAttack: false,
    guardImpact: false,
    unblockableArt: false,
    reversalEdge: false,
    soulCharge: false,
    lethalHit: false,
    throw: false
  }

  constructor(
    private frameSheetPage: FrameSheetPage
  ){}

  menuSwitch(header: string){
    switch(header){
      case "attributes":
      this.dropDownShow.attributes = !this.dropDownShow.attributes; 
    }
  }

  reset(){
    this.frameSheetPage.reset();
    Object.keys(this.filterSelection).forEach(v => this.filterSelection[v] = false)
  }

  apply(){
    console.log(this.viewMode);
    this.frameSheetPage.applyAttributeFilter(this.filterSelection);
  }
 }