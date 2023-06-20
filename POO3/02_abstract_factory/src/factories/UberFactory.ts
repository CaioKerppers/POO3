import Airplane from "../vehicles/aerial/airplane";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interface/ILandvehicles";
import ITransportFactory from "./interface/ITransportFactory";

export default class UberFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via UBER");
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte Via UBER");
        return new Airplane;
    }
}