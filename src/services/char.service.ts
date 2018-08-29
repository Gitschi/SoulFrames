import { Injectable } from "@angular/core";
import { Char, CharStance } from "../models/char.model";
import { MoveService } from "./move.service";
import { StanceService } from "./stance.service";
import { StringManipulationService } from "./string-manipulation.service";

@Injectable()

export class CharService{
  private chars: Char[] = [
    new CharStance("Mitsurugi", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Mitsurugi, this.stanceService.Mitsurugi),
    new CharStance("Sophitia", "assets/imgs/Silhouettes/SophitiaSilhouette.png", this.moveService.Sophitia, this.stanceService.Sophitia),
    new Char("Groh", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Kilik", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Xianghua", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Ivy", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Zasalamel", "assets/imgs/Silhouettes/MitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Geralt", "assets/imgs/Silhouettes/GeraltSilhouette.png", this.moveService.Mitsurugi),
    new Char("Taki", "assets/imgs/Silhouettes/TakiSilhouette.png", this.moveService.Sophitia),
    new Char("Yoshimitsu", "assets/imgs/Silhouettes/YoshimitsuSilhouette.png", this.moveService.Sophitia),
    new Char("Nightmare", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
    new Char("Siegfried", "assets/imgs/Silhouettes/SiegfriedSilhouette.png", this.moveService.Sophitia),
    new Char("Maxi", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
    new Char("Talim", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
    new Char("Voldo", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
    new Char("Astaroth", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
    new Char("Seong Mi-Na", "assets/imgs/Silhouettes/NightmareSilhouette.png", this.moveService.Sophitia),
  ];

  public selectedChar;

  constructor(
    private moveService: MoveService,
    private stanceService: StanceService,
    private stringManipulationService: StringManipulationService
  ){}

  getChars(){
    return this.chars.slice();
  }

  charSelect(selected){
    for(let i = 0; i < this.chars.length; i++){
      if(this.chars[i].name === selected){
        this.selectedChar = this.chars[i];
        this.stringManipulationService.charStances = this.selectedChar.stanceList;
        this.stringManipulationService.preloadCommandImages(this.selectedChar.moveList)
      }
    }
  }
}