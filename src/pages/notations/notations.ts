import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notations',
  templateUrl: 'notations.html',
})
export class NotationsPage {

  inputNotations: object[] = [
    {imageLink: "assets/imgs/input/6.png", text: "White arrows indicate which direction to <strong>press</strong>."},
    {imageLink: "assets/imgs/input/I6.png", text: "Black arrows indicate which direction to <strong>press twice</strong>."},
    {imageLink: "assets/imgs/input/A.png", text: "<strong>Horizontal</strong> Attack."},
    {imageLink: "assets/imgs/input/B.png", text: "<strong>Vertical</strong> Attack."},
    {imageLink: "assets/imgs/input/K.png", text: "<strong>Kick</strong> Attack Move."},
    {imageLink: "assets/imgs/input/G.png", text: "<strong>Guard</strong> Move."},
    {imageLink: "assets/imgs/input/Ia.png", text: "Black letters will indicate which attack button to <strong>hold down</strong>."},
    {imageLink: "assets/imgs/input/Sa.png", text: "When a button is shown <strong>small</strong> it should be <strong>pressed briefly</strong> before moving on to the next input."},
    {imageLink: "assets/imgs/input/_notation.png", text: "The asterisk stands for <strong>OR</strong>."},
    {imageLink: "assets/imgs/input/+notation.png", text: "The plus will indicate when you have to press multiple inputs <strong>together</strong>."},
    {imageLink: "assets/imgs/input/H.png", text: "The move behaves differently on <strong>counter hit</strong>."},
    {imageLink: "assets/imgs/input/C.png", text: "The move is performed during <strong>full crouch</strong>."},
    {imageLink: "assets/imgs/input/T.png", text: "The move is performed while being <strong>back turned</strong>."},
    {imageLink: "assets/imgs/input/W.png", text: "The move is performed <strong>while rising</strong> from a crouch."},
    {imageLink: "assets/imgs/input/R.png", text: "The move is performed while <strong>running</strong>."},
    {imageLink: "assets/imgs/input/J.png", text: "The move is performed while <strong>jumping</strong>."},
    {imageLink: "assets/imgs/input/v.png", text: "Press next input <strong>during hit</strong> or activates <strong>on hit</strong>."},
    {imageLink: "assets/imgs/input/hitOrGuard.png", text: "Press next input <strong>during guard or hit</strong> or activates <strong>on guard or hit</strong>."},
    {imageLink: "assets/imgs/input/soulCharged.png", text: "Move can only be executed while in <strong>Soul Charge</strong> mode."},
    {imageLink: "assets/imgs/input/GI.png", text: "Activates on successful <strong>Guard Impact</strong>."},
    {imageLink: "assets/imgs/input/RE.png", text: "Perform input after <strong>Reversal Edge Clash</strong>."},
    {imageLink: "assets/imgs/input/fast.png", text: "Input needs to be executed <strong>fast</strong>."},
    {imageLink: "assets/imgs/input/just.png", text: "Input needs to be a <strong>just input (input with exact timing)</strong>."},
    {imageLink: "assets/imgs/input/revenge.png", text: "Activated when <strong>being hit while performing the move (revenge)</strong>."},
    {imageLink: "assets/imgs/input/vsDowned.png", text: "Versus a <strong>downed</strong> opponent."},
    {imageLink: "assets/imgs/input/vsCrouching.png", text: "Versus a <strong>crouching</strong> opponent."},
    {imageLink: "assets/imgs/input/vsMidair.png", text: "Versus an <strong>airborne</strong> opponent."},
    {imageLink: "assets/imgs/input/eightWayRun.png", text: "During <strong>Eight-Way-Run</strong> movement."},
    {imageLink: "assets/imgs/input/WhileDown.png", text: "Performed while being <strong>downed</strong>."},
    {imageLink: "assets/imgs/input/closeHit.png", text: "Activated when the move connects <strong>close</strong>."},
    {imageLink: "assets/imgs/input/duringMotion.png", text: "Input the next button <strong>during motion</strong>(Geralt only)."}
  ];

  propertyNotations: object[] = [
    {imageLink: "assets/imgs/attributes/BA.png", text: "Break Attack"},
    {imageLink: "assets/imgs/attributes/GI.png", text: "Guard Impact"},
    {imageLink: "assets/imgs/attributes/LH.png", text: "Lethal Hit"},
    {imageLink: "assets/imgs/attributes/RE.png", text: "Reversal Edge"},
    {imageLink: "assets/imgs/attributes/SC.png", text: "Soul Charge"},
    {imageLink: "assets/imgs/attributes/SS.png", text: "Special Stance"},
    {imageLink: "assets/imgs/attributes/TH.png", text: "Throw"},
    {imageLink: "assets/imgs/attributes/UA.png", text: "Unblockable Art"},
    {imageLink: "assets/imgs/attributes/FC.png", text: "Full Crouch"},
    {imageLink: "assets/imgs/attributes/GC.png", text: "Guard Cancellable"},
    {imageLink: "assets/imgs/attributes/SG.png", text: "Soul Gauge"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotationsPage');
  }

}
