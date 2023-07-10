import IConsole from "./IConsole";

export default class Zeebo implements IConsole{
    constructor(){
        console.log("Zeebo: Configurando jogo...");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("Zeebo: Instalando as dependencias");
    }
    authToken(): void {
        console.log("Zeebo: Autorizando o jogo!");
    }
}