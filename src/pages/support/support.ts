import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  btcCopy() {
    let btcButton = document.getElementById("btcBtn") as HTMLInputElement;
    btcButton.classList.add("supportBtnCopied");
    btcButton.innerHTML = "Copied!";
    setTimeout(this.resetBtc,2000);

    let copyText = document.getElementById("btcAddress") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    alert("Copied BTC Public Key: " + copyText.value);
  }

  etherCopy() {
    let etherButton = document.getElementById("etherBtn") as HTMLInputElement;
    etherButton.classList.add("supportBtnCopied");
    etherButton.innerHTML = "Copied!";
    setTimeout(this.resetEther,2000);

    let copyText = document.getElementById("etherAddress") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    alert("Copied Ethereum Public Key: " + copyText.value);
  }

  resetBtc(){
    let btcButton = document.getElementById("btcBtn") as HTMLInputElement;
    btcButton.classList.remove("supportBtnCopied");
    btcButton.innerHTML = "Copy";
  }

  resetEther(){
    let etherButton = document.getElementById("etherBtn") as HTMLInputElement;
   etherButton.classList.remove("supportBtnCopied");
   etherButton.innerHTML = "Copy";
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
