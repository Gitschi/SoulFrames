import { Injectable } from "@angular/core";
import { Char } from "../models/char.model";
import { MoveService } from "./move.service";
import { StanceService } from "./stance.service";
import { StringManipulationService } from "./string-manipulation.service";

@Injectable()

export class CharService{
  // Will hold an array of initialized chars
  private initializedChars: string[] = []; 

  // Array of objects for all characters
  private chars: Char[] = [
    new Char("Astaroth", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Astaroth),
    new Char("Azwel", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Azwel, this.stanceService.Azwel),
    new Char("Cervantes", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Cervantes, this.stanceService.Cervantes),
    new Char("Geralt", "assets/imgs/Silhouettes/GeraltSilhouette.png", this.moveService.Geralt),
    new Char("Groh", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Groh, this.stanceService.Groh),
    new Char("Inferno", "assets/imgs/Silhouettes/SophitiaSilhouette.png", this.moveService.Inferno, this.stanceService.Inferno),
    new Char("Ivy", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Ivy, this.stanceService.Ivy),
    new Char("Kilik", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Kilik, this.stanceService.Kilik),
    new Char("Maxi", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Maxi, this.stanceService.Maxi),
    new Char("Mitsurugi", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Mitsurugi, this.stanceService.Mitsurugi),
    new Char("Nightmare", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Nightmare, this.stanceService.Nightmare),
    new Char("Raphael", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Raphael, this.stanceService.Raphael),
    new Char("Seong Mi-Na", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.SeongMina, this.stanceService.SeongMina),
    new Char("Siegfried", "assets/imgs/Silhouettes/SiegfriedSilhouette.png", this.moveService.Siegfried, this.stanceService.Siegfried),
    new Char("Sophitia", "assets/imgs/Silhouettes/SophitiaSilhouette.png", this.moveService.Sophitia, this.stanceService.Sophitia),
    new Char("Taki", "assets/imgs/Silhouettes/TakiSilhouette.png", this.moveService.Taki, this.stanceService.Taki),
    new Char("Talim", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Talim, this.stanceService.Talim),
    new Char("Tira", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Tira, this.stanceService.Tira),
    new Char("Voldo", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Voldo, this.stanceService.Voldo),
    new Char("Xianghua", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Xianghua, this.stanceService.Xianghua),
    new Char("Yoshimitsu", "assets/imgs/Silhouettes/YoshimitsuSilhouette.png", this.moveService.Yoshimitsu, this.stanceService.Yoshimitsu),
    new Char("Zasalamel", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Zasalamel)
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