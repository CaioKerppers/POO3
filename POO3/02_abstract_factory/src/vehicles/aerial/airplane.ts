import IAircraft from "./interface/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.CheckWind();
        this.getCargo();
        console.log("Avião: Iniciando a decolagem...")
    }
    getCargo(): void {
        console.log("Avião: Passageiros Embarcados");
    }
    CheckWind(): void {
        console.log("Avião: ventos a 25 hm/h, ventos ok!")
    }
}