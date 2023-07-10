import IConsole from "../console/IConsole";
import IPlay from "./IPlay";

export default class Game implements IPlay{
    constructor(private console: IConsole){}

    playing(): void {
        console.log("Iniciando jogo!!");   
    }
    result(): void {
        console.log("JOGO EM ANDAMENTO!!!");
    }
}