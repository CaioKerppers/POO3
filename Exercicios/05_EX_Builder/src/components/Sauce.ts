export default class Sauce{
    constructor(private _sauce : string){}
    //recebe o molho
    get sauce() : string{
        return this._sauce;
    }
    //define o molho
    set sauce(sauce : string){
        this._sauce = sauce;
    }
}