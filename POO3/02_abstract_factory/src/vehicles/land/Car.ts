import ILandVehicle from "./interface/ILandvehicles";

export default class Car implements ILandVehicle{
    CheckClimate(): void {
        console.log("Clima: O dia está ensolarado!");
    }
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o trajeto...")
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados");
    }
}