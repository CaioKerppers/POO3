import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interface/ILandvehicles";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNineFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via 99");
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte Via 99");
        return new Helicopter();
    }
}