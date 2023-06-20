import IAircraft from "../../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../../vehicles/land/interface/ILandvehicles";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}