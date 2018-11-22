export class Move{
  constructor(
    public term: string,
    public command: string,
    public level: string,
    public impact: number,
    public guard: number,
    public hit: any,
    public counterHit: any,
    public damage: number,
    public notes?: string,
    public intoStance?: boolean,
    public lethalHit?: boolean,
    public intoCrouch?: boolean,
    public guardImpact?: boolean,
    public reversalEdge?: boolean,
    public soulCharge?: boolean,
    public grab?: boolean,
    public breakAttack?: boolean,
    public unblockableArt?: boolean,
    public guardCancelable?: boolean,
    public soulGauge?: boolean
  ){};
}