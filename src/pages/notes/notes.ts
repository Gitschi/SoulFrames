import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { NotationsPage } from "../notations/notations";

import { CharService } from "../../services/char.service";

@IonicPage()
@Component({
  selector: "notes-page",
  templateUrl: "notes.html",
  providers: []
})
export class NotesPage {
  // Sets how many arrays the object has before stances
  nonStanceCategories: number = 8;

  // Category view mode
  categoryView: boolean = true;

  // Tells if movelist is completely empty
  moveListIsEmpty: boolean = false;

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
    FC: "assets/imgs/attributes/FC.png",
    GC: "assets/imgs/attributes/GC.png",
    SG: "assets/imgs/attributes/SG.png"
  };

  // Imports moveList and makes a copy of it
  // Need to use parse because the objects would just be references otherwise
  moveList = JSON.parse(JSON.stringify(this.charService.getMoveList()));

  // Sets categories for headers
  categoryList: string[] = [
    "Reversal Edge Attacks",
    "Gauge Attacks",
    "Horizontal Attacks",
    "Vertical Attacks",
    "Kicks",
    "Dual Button Attacks",
    "8-Way Run Moves",
    "Throws"
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private charService: CharService
  ) {}

  // Resets moveList to original
  reset() {
    this.moveList = JSON.parse(JSON.stringify(this.charService.getMoveList()));
  }

  // Goes to navigation page when pressing question mark icon
  goToOtherPageNotations() {
    this.navCtrl.push(NotationsPage);
  }

  // Opens filter menu when button is pressed
  openFilterMenu() {
    this.menuCtrl.open("filtersMenu");
  }

  // Disables menu swipe on this page
  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false, "mainMenu");
    this.menuCtrl.swipeEnable(false, "filtersMenu");
  }

  // Re-enables menu swipe when leaving page
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true, "mainMenu");
    this.menuCtrl.swipeEnable(true, "filtersMenu");
  }

  // Sets text color for Guard, Hit and CounterHit
  setTextColor(value: any) {
    if (typeof value === "number") {
      if (value === 0) {
        return "white";
      }
      if (value < 0) {
        return "#ff5b5b";
      }
      if (value > 0) {
        return "#53fc8b";
      }
    } else if (typeof value === "string") {
      return "#f2ef63";
    }
  }

  // Sets category view
  setCategoryView(viewMode: string) {
    if (viewMode === "categoryView") {
      this.categoryView = true;
    } else {
      this.categoryView = false;
    }
  }

  // Loops movelist to check if it's empty
  checkMoveAmount() {
    let isEmpty: boolean = true;

    for (let i = 0; i < this.moveList.length; i++) {
      if (this.moveList[i].length !== 0) {
        isEmpty = false;
      }
    }
    this.moveListIsEmpty = isEmpty;
  }

  // Apply attribute filter from filters.ts
  applyAttributeFilter(
    attributeSelection: any,
    numBoolSelection: any,
    numValSelection: any
  ) {
    // Resets array before applying filter
    this.reset();
    let index = 0; // Index for iteration
    for (let value in attributeSelection) {
      // Manipulates Array when attribute true
      if (attributeSelection[value] === true) {
        switch (index) {
          // intoStance
          case 0:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.intoStance
              );
            }
            break;

          // intoCrouch
          case 1:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.intoCrouch
              );
            }
            break;

          // breakAttack
          case 2:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.breakAttack
              );
            }
            break;

          // guardImpact
          case 3:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.guardImpact
              );
            }
            break;

          // unblockableArt
          case 4:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.unblockableArt
              );
            }
            break;

          // reversalEdge
          case 5:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.reversalEdge
              );
            }
            break;

          // soulCharge
          case 6:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.soulCharge
              );
            }
            break;

          // lethalHit
          case 7:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.lethalHit
              );
            }
            break;

          // grab
          case 8:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(move => move.grab);
            }
            break;

          // soulGauge
          case 9:
            for (let i = 0; i < this.moveList.length; i++) {
              this.moveList[i] = this.moveList[i].filter(
                move => move.soulGauge
              );
            }
            break;
        }
      }
      // Increments index for object iteration
      index++;
    }

    // Handling of number boolean filters
    for (let i = this.moveList.length - 1; i >= 0; i--) {
      for (let j = this.moveList[i].length - 1; j >= 0; j--) {
        // Ignore positive and negative if Min or Max overpowers
        if (attributeSelection.guardMin && numValSelection.guardMin < 0) {
          numBoolSelection.guardNegative = true;
        }
        if (attributeSelection.guardMax && numValSelection.guardMax > 0) {
          numBoolSelection.guardPositive = true;
        }
        if (attributeSelection.hitMin && numValSelection.hitMin < 0) {
          numBoolSelection.hitNegative = true;
        }
        if (attributeSelection.hitMax && numValSelection.hitMax > 0) {
          numBoolSelection.hitPositive = true;
        }
        if (
          attributeSelection.counterHitMin &&
          numValSelection.counterHitMin < 0
        ) {
          numBoolSelection.counterHitNegative = true;
        }
        if (
          attributeSelection.counterHitMax &&
          numValSelection.counterHitMax > 0
        ) {
          numBoolSelection.counterHitPositive = true;
        }

        // ----------------- Impact -----------------
        // Impact Null
        // Only needed as long as there are gaps in the sheet
        if (this.moveList[i][j].impact === null) {
          if (attributeSelection.impactMin || attributeSelection.impactMax) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Impact Min and Max
        if (attributeSelection.impactMin && attributeSelection.impactMax) {
          if (
            this.moveList[i][j].impact < numValSelection.impactMin ||
            this.moveList[i][j].impact > numValSelection.impactMax
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.impactMin) {
          if (this.moveList[i][j].impact < numValSelection.impactMin) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.impactMax) {
          if (this.moveList[i][j].impact > numValSelection.impactMax) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // ----------------- Guard -----------------
        // Guard Null
        // Only needed as long as there are gaps in the sheet
        if (this.moveList[i][j].guard === null) {
          if (
            !numBoolSelection.guardPositive ||
            !numBoolSelection.guardNegative ||
            !numBoolSelection.guardNeutral
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Guard Positive
        if (!numBoolSelection.guardPositive) {
          if (this.moveList[i][j].guard > 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Guard Negative
        if (!numBoolSelection.guardNegative) {
          if (this.moveList[i][j].guard < 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Guard Neutral
        if (!numBoolSelection.guardNeutral) {
          if (this.moveList[i][j].guard === 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Guard Min and Max
        if (attributeSelection.guardMin && attributeSelection.guardMax) {
          if (
            this.moveList[i][j].guard < numValSelection.guardMin ||
            this.moveList[i][j].guard > numValSelection.guardMax
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.guardMin) {
          if (this.moveList[i][j].guard < numValSelection.guardMin) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.guardMax) {
          if (this.moveList[i][j].guard > numValSelection.guardMax) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // ----------------- Hit -----------------
        // Hit Null
        // Only needed as long as there are gaps in the sheet
        if (this.moveList[i][j].hit === null) {
          if (
            !numBoolSelection.hitPositive ||
            !numBoolSelection.hitNegative ||
            !numBoolSelection.hitNeutral ||
            !numBoolSelection.hitSpecial
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Hit Special
        if (!numBoolSelection.hitSpecial) {
          if (typeof this.moveList[i][j].hit === "string") {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Hit Positive
        if (!numBoolSelection.hitPositive) {
          if (this.moveList[i][j].hit > 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Hit Negative
        if (!numBoolSelection.hitNegative) {
          if (this.moveList[i][j].hit < 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Hit Neutral
        if (!numBoolSelection.hitNeutral) {
          if (this.moveList[i][j].hit === 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // Hit Min and Max
        if (attributeSelection.hitMin && attributeSelection.hitMax) {
          if (
            this.moveList[i][j].hit < numValSelection.hitMin ||
            this.moveList[i][j].hit > numValSelection.hitMax
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.hitMin) {
          if (this.moveList[i][j].hit < numValSelection.hitMin) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.hitMax) {
          if (this.moveList[i][j].hit > numValSelection.hitMax) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // ----------------- Counter Hit -----------------
        // CounterHit Null
        // Only needed as long as there are gaps in the sheet
        if (this.moveList[i][j].counterHit === null) {
          if (
            !numBoolSelection.counterHitPositive ||
            !numBoolSelection.counterHitNegative ||
            !numBoolSelection.counterHitNeutral ||
            !numBoolSelection.counterHitSpecial
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // CounterHit Special
        if (!numBoolSelection.counterHitSpecial) {
          if (typeof this.moveList[i][j].counterHit === "string") {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // CounterHit Positive
        if (!numBoolSelection.counterHitPositive) {
          if (this.moveList[i][j].counterHit > 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // CounterHit Negative
        if (!numBoolSelection.counterHitNegative) {
          if (this.moveList[i][j].counterHit < 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // CounterHit Neutral
        if (!numBoolSelection.counterHitNeutral) {
          if (this.moveList[i][j].counterHit === 0) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }

        // CounterHit Min and Max
        if (
          attributeSelection.counterHitMin &&
          attributeSelection.counterHitMax
        ) {
          if (
            this.moveList[i][j].counterHit < numValSelection.counterHitMin ||
            this.moveList[i][j].counterHit > numValSelection.counterHitMax
          ) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.counterHitMin) {
          if (this.moveList[i][j].counterHit < numValSelection.counterHitMin) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        } else if (attributeSelection.counterHitMax) {
          if (this.moveList[i][j].counterHit > numValSelection.counterHitMax) {
            this.moveList[i].splice(j, 1);
            continue;
          }
        }
      }
    }
    this.checkMoveAmount();
  }
}
