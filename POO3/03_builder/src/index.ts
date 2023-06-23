import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder;
const director : Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: "+sedan.vehicletype);
console.log("Motor: "+sedan.engine.power);
console.log("Transmissao: "+sedan.transmission);
console.log("Assentos: "+sedan.seats)
console.log("Tamanho Roda: "+sedan.wheels.length);


director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: "+truck.vehicletype);
console.log("Motor: "+truck.engine.power);
console.log("Transmissao: "+truck.transmission);
console.log("Assentos: "+truck.seats)
console.log("Tamanho Roda: "+truck.wheels.length);


director.constructTruck();
const motorcycle : Vehicle = builder.getVehicle();
console.log("Criando um veículo...");
console.log("Tipo: "+motorcycle.vehicletype);
console.log("Motor: "+motorcycle.engine.power);
console.log("Transmissao: "+motorcycle.transmission);
console.log("Assentos: "+motorcycle.seats)
console.log("Tamanho Roda: "+motorcycle.wheels.length);

