import ITransportFactory from "../factories/interface/ITransportFactory";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../vehicles/land/interface/ILandvehicles";

export default class{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory : ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    
    }
    startRoute(){
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

}