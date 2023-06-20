import IAircraft from "./interface/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.CheckWind();
        this.getCargo();
        console.log("Helicóptero: Iniciando a decolagem...")
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros embarcados! Ligando hélices!");
    }
    CheckWind(): void {
        console.log("Helicóptero: Ventos a 22 hm/h, Ventos Ok!")
    }
}