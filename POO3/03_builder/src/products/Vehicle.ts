import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _vehicletype : VehicleType;
    private _seats : number;
    private _engine : Engine;
    private _transmission : Transmission;
    private _wheels : Wheel[] = [];

    /**
     * Getter vehicletype
     * @return {VehicleType}
     */
	public get vehicletype(): VehicleType {
		return this._vehicletype;
	}

    /**
     * Getter seats
     * @return {number}
     */
	public get seats(): number {
		return this._seats;
	}

    /**
     * Getter engine
     * @return {Engine}
     */
	public get engine(): Engine {
		return this._engine;
	}

    /**
     * Getter transmission
     * @return {Transmission}
     */
	public get transmission(): Transmission {
		return this._transmission;
	}

    /**
     * Getter wheels
     * @return {Wheel[] }
     */
	public get wheels(): Wheel[]  {
		return this._wheels;
	}

    /**
     * Setter vehicletype
     * @param {VehicleType} value
     */
	public set vehicletype(value: VehicleType) {
		this._vehicletype = value;
	}

    /**
     * Setter seats
     * @param {number} value
     */
	public set seats(value: number) {
		this._seats = value;
	}

    /**
     * Setter engine
     * @param {Engine} value
     */
	public set engine(value: Engine) {
		this._engine = value;
	}
    public addWheel(wheel : Wheel){
        this._wheels.push(wheel);
    }
    /**
     * Setter transmission
     * @param {Transmission} value
     */
	public set transmission(value: Transmission) {
		this._transmission = value;
	}

    /**
     * Setter wheels
     * @param {Wheel[] } value
     */
	public set wheels(value: Wheel[] ) {
		this._wheels = value;
	}
    

}