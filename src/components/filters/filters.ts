import { Component } from '@angular/core';
import { FrameSheetPage } from '../../pages/frame-sheet/frame-sheet';

@Component({
  selector: 'filters',
  templateUrl: 'filters.html'
})

export class FiltersComponent {
  viewMode: string = "categoryView";

  // Adjusts to show menu or not
  dropDownShow = {
    attributes: false,
    impact: false,
    guard : false,
    hit: false,
    counterHit: false
  }

  // Prepares values to pass on to frame-sheet page
  filterSelection = {
    intoStance: false,
    intoCrouch: false,
    breakAttack: false,
    guardImpact: false,
    unblockableArt: false,
    reversalEdge: false,
    soulCharge: false,
    lethalHit: false,
    throw: false,

    //impact

    guardPositive: true,
    guardNegative: true,
    guardNeutral: true,

    hitPositive: true,
    hitNegative: true,
    hitNeutral: true,

    counterHitPositive: true,
    counterHitNegative: true,
    counterHitNeutral: true
  }

  constructor(
    private frameSheetPage: FrameSheetPage
  ){}

  // Switches dropdown on or off
  menuSwitch(header: string){
    switch(header){
      case "attributes":
        this.dropDownShow.attributes = !this.dropDownShow.attributes; 
        break;

      case "impact":
        this.dropDownShow.impact = !this.dropDownShow.impact; 
        break;

      case "guard":
        this.dropDownShow.guard = !this.dropDownShow.guard; 
        break;

      case "hit":
        this.dropDownShow.hit = !this.dropDownShow.hit; 
        break;

      case "counterHit":
        this.dropDownShow.counterHit = !this.dropDownShow.counterHit; 
        break;
    }
  }

  // Resets filters
  reset(){
    this.frameSheetPage.reset();
    
    // Make it so that certain filters reset to true!
    Object.keys(this.filterSelection).forEach(v => this.filterSelection[v] = false)
  }

  // Applies filters
  apply(){
    this.frameSheetPage.setCategoryView(this.viewMode);
    this.frameSheetPage.applyAttributeFilter(this.filterSelection);
  }
 }