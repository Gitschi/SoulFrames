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

  // Attribute values to pass on
  attributeSelection = {
    intoStance: false,
    intoCrouch: false,
    breakAttack: false,
    guardImpact: false,
    unblockableArt: false,
    reversalEdge: false,
    soulCharge: false,
    lethalHit: false,
    throw: false,
    soulGauge: false,

    impactMin: false,
    impactMax: false,

    guardMin: false,
    guardMax: false,

    hitMin: false,
    hitMax: false,

    counterHitMin: false,
    counterHitMax: false
  }

  // Boolean values regarding numbers to pass on
  numBoolSelection = {
    guardPositive: true,
    guardNegative: true,
    guardNeutral: true,

    hitSpecial: true,
    hitPositive: true,
    hitNegative: true,
    hitNeutral: true,

    counterHitSpecial: true,
    counterHitPositive: true,
    counterHitNegative: true,
    counterHitNeutral: true
  }

  // Numeric values to pass on
  numValSelection = {
    impactMin: 0,
    impactMax: 0,

    guardMin: 0,
    guardMax: 0,

    hitMin: 0,
    hitMax: 0,

    counterHitMin: 0,
    counterHitMax: 0
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
    // Reset filters to default value
    Object.keys(this.dropDownShow).forEach(v => this.dropDownShow[v] = false);
    Object.keys(this.attributeSelection).forEach(v => this.attributeSelection[v] = false);
    Object.keys(this.numBoolSelection).forEach(v => this.numBoolSelection[v] = true);
    Object.keys(this.numValSelection).forEach(v => this.numValSelection[v] = 0);

    this.frameSheetPage.reset();
  }

  // Applies filters
  apply(){
    this.frameSheetPage.setCategoryView(this.viewMode);
    this.frameSheetPage.applyAttributeFilter(this.attributeSelection, this.numBoolSelection, this.numValSelection);
  }

  incrementNumVal(category: string){
    switch(category){
      case "impactMin":
        this.numValSelection.impactMin ++;
        break;

      case "impactMax":
        this.numValSelection.impactMax ++;
        break;

      case "guardMin":
        this.numValSelection.guardMin ++;
        break;
      
      case "guardMax":
        this.numValSelection.guardMax ++;
        break;

      case "hitMin":
        this.numValSelection.hitMin ++;
        break;

      case "hitMax":
        this.numValSelection.hitMax ++;
        break;

      case "counterHitMin":
        this.numValSelection.counterHitMin ++;
        break;

      case "counterHitMax":
        this.numValSelection.counterHitMax ++;
        break;    
    }
  }

  decrementNumVal(category: string){
    switch(category){
      case "impactMin":
        if(this.numValSelection.impactMin !== 0){
          this.numValSelection.impactMin --;
        }
        break;

        case "impactMax":
        if(this.numValSelection.impactMax !== 0){
          this.numValSelection.impactMax --;
        }
        break;

      case "guardMin":
        this.numValSelection.guardMin --;
        break;
      
      case "guardMax":
        this.numValSelection.guardMax --;
        break;

      case "hitMin":
        this.numValSelection.hitMin --;
        break;

      case "hitMax":
        this.numValSelection.hitMax --;
        break;

      case "counterHitMin":
        this.numValSelection.counterHitMin --;
        break;

      case "counterHitMax":
        this.numValSelection.counterHitMax --;
        break;    
    }
  }
 }