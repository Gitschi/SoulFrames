import { Stance } from "../models/stance.model";

export class StanceService{
  Mitsurugi = [
    new Stance("Silent Step", "assets/imgs/input/MitsuSilent.png"),
    new Stance("Mist", "assets/imgs/input/MitsuMist.png")
  ]

  Sophitia = [
    new Stance("Angel Step", "assets/imgs/input/SophitiaAngelStep.png"),
    new Stance("Angel Side Step", "assets/imgs/input/SophitiaAngelSideStep.png")
  ]
}