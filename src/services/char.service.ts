import { Injectable } from "@angular/core";
import { Char } from "../models/char.model";
import { MoveService } from "./move.service";
import { StanceService } from "./stance.service";
import { StringManipulationService } from "./string-manipulation.service";

@Injectable()

export class CharService{
  // Will hold an array of initialized characters
  private initializedChars: string[] = []; 

  // Array of objects for all characters
  private chars: Char[] = [
    new Char("2B", "assets/imgs/characters/TwoB.png", this.moveService.TwoB, this.stanceService.TwoB),
    new Char("Amy", "assets/imgs/characters/Amy.png", this.moveService.Amy, this.stanceService.Amy),
    new Char("Astaroth", "assets/imgs/characters/Astaroth.png", this.moveService.Astaroth),
    new Char("Azwel", "assets/imgs/characters/Azwel.png", this.moveService.Azwel, this.stanceService.Azwel),
    new Char("Cervantes", "assets/imgs/characters/Cervantes.png", this.moveService.Cervantes, this.stanceService.Cervantes),
    new Char("Geralt", "assets/imgs/characters/Geralt.png", this.moveService.Geralt),
    new Char("Groh", "assets/imgs/characters/Groh.png", this.moveService.Groh, this.stanceService.Groh),
    //new Char("Inferno", "assets/imgs/characters/Inferno.png", this.moveService.Inferno, this.stanceService.Inferno), // Inferno is not finished nor relevant
    new Char("Ivy", "assets/imgs/characters/Ivy.png", this.moveService.Ivy, this.stanceService.Ivy),
    new Char("Kilik", "assets/imgs/characters/Kilik.png", this.moveService.Kilik, this.stanceService.Kilik),
    new Char("Maxi", "assets/imgs/characters/Maxi.png", this.moveService.Maxi, this.stanceService.Maxi),
    new Char("Mitsurugi", "assets/imgs/characters/Mitsurugi.png", this.moveService.Mitsurugi, this.stanceService.Mitsurugi),
    new Char("Nightmare", "assets/imgs/characters/Nightmare.png", this.moveService.Nightmare, this.stanceService.Nightmare),
    new Char("Raphael", "assets/imgs/characters/Raphael.png", this.moveService.Raphael, this.stanceService.Raphael),
    new Char("Seong Mi-Na", "assets/imgs/characters/SeongMina.png", this.moveService.SeongMina, this.stanceService.SeongMina),
    new Char("Siegfried", "assets/imgs/characters/Siegfried.png", this.moveService.Siegfried, this.stanceService.Siegfried),
    new Char("Sophitia", "assets/imgs/characters/Sophitia.png", this.moveService.Sophitia, this.stanceService.Sophitia),
    new Char("Taki", "assets/imgs/characters/Taki.png", this.moveService.Taki, this.stanceService.Taki),
    new Char("Talim", "assets/imgs/characters/Talim.png", this.moveService.Talim, this.stanceService.Talim),
    new Char("Tira", "assets/imgs/characters/Tira.png", this.moveService.Tira, this.stanceService.Tira),
    new Char("Voldo", "assets/imgs/characters/Voldo.png", this.moveService.Voldo, this.stanceService.Voldo),
    new Char("Xianghua", "assets/imgs/characters/Xianghua.png", this.moveService.Xianghua, this.stanceService.Xianghua),
    new Char("Yoshimitsu", "assets/imgs/characters/Yoshimitsu.png", this.moveService.Yoshimitsu, this.stanceService.Yoshimitsu),
    new Char("Zasalamel", "assets/imgs/characters/Zasalamel.png", this.moveService.Zasalamel)
  ];

  private selectedChar;

  constructor(
    private moveService: MoveService,
    private stanceService: StanceService,
    private stringManipulationService: StringManipulationService
  ){}

  // Returns characters
  public getChars(){
    return this.chars.slice();
  }

  // Returns movelist
  public getMoveList(){
    let moveList = this.selectedChar.moveList.slice();
    return moveList.slice();
  }

  // Uses info of clicked character to change variables and preload images
  charSelect(selected){
    for(let i = 0; i < this.chars.length; i++){
      if(this.chars[i].name === selected){
        this.selectedChar = this.chars[i];
        this.stringManipulationService.charStances = this.selectedChar.stanceList;

        // Only executes if not already initialized once
        if(!this.initCheck(selected)){
          this.initializedChars.push(selected);
          this.stringManipulationService.preloadCommandImages(this.selectedChar.moveList)  
        }
      }
    }
  }

  // Checks if the picked characters images have already been initialized
  initCheck(charName){
    let isInit: boolean = false;
    for(let i = 0; i < this.initializedChars.length; i++){
      if(charName === this.initializedChars[i]){
        isInit = true;
      }
    }
    return isInit;
  }
}