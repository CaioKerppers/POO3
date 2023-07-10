import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        console.log("Xbox: Configurando Jogo...");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Instalando dependencias!");
    }

    authToken(): void {
        console.log("Xbox: Autorizando o jogo!");
    }
}