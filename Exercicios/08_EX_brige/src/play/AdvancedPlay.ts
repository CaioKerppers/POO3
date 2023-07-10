import IConsole from "../console/IConsole";
import Game from "./Game";


export default class AdvancedPlay extends Game{
    constructor(console: IConsole){
        super(console);
    }

    challenge() : void{
        console.log("Desafio Iniciado!!")
    }
}