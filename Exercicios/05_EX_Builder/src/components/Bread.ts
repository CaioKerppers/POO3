export default class Bread{
    constructor(private _bread : string){}
        //recebe o pao
        get bread() : string{
            return this._bread;
            }
        //define o pao
        set bread(bread : string){
            this._bread = bread;
        }
}