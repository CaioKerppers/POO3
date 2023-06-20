import ILandVehicle from "./interface/ILandvehicles";

export default class Motorcycle implements ILandVehicle{
    CheckClimate(): void {
        console.log("Clima: O dia está ensolarado!");
    }
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a entrega...")
    }
    getCargo(): void {
        console.log("Moto: encomenda retirada!");
    }
}