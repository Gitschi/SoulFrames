export class Move{
  constructor(
    public term: string,
    public command: string,
    public level: string,
    public startup: any,
    public guard: any,
    public hit: any,
    public counterHit: any,
    public damage: any,
    public notes?: string,
    public intoStance?: boolean
  ){};
}