export class Char{
  constructor(
    public name: string,
    public imagePath: string,
    public moveList: Object
  ){}
}

export class CharStance{
  constructor(
    public name: string,
    public imagePath: string,
    public moveList: Object,
    public stanceList: Object
  ){}
}