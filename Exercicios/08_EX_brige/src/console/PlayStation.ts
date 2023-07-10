import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        console.log("PlayStation: Configurando jogo...");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Instalando as dependencias");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando o jogo!");
    }
}