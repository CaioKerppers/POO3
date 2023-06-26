export default class Protein{
    constructor(private _protein : number){}
        //recebe a proteina
        get protein() : number{
            return this._protein;
            }
        //define a proteina
        set protein(protein : number){
            this._protein = protein;
        }
}