import SanduicheBuiler from "./builder/SanduicheBuilder";
import Director from "./director/Director";
import Sanduiche from "./products.ts/Sanduiche";

const builder : SanduicheBuiler = new SanduicheBuiler;
const director : Director = new Director(builder);

//Natural
director.constructorNatural();
const natural : Sanduiche = builder.getSanduiche();
console.log("Criando um Sanduiche Natural...");
console.log("Tipo: "+natural.sanduichetype);
console.log("Pão: "+natural.bread);
console.log("Proteina: "+natural.protein.protein);
console.log("Molho: "+natural.sauce);
console.log("Salada: "+natural.salad);

//HotDog
director.constructorHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando um Sanduiche HotDog...");
console.log("Tipo: "+hotdog.sanduichetype);
console.log("Pão: "+hotdog.bread);
console.log("Proteina: "+hotdog.protein.protein);
console.log("Molho: "+hotdog.sauce);
console.log("Salada: "+hotdog.salad);


//XSalada
director.constructorXSalada();
const xasalada : Sanduiche = builder.getSanduiche();
console.log("Criando um Sanduiche Xsalada...");
console.log("Tipo: "+xasalada.sanduichetype);
console.log("Pão: "+xasalada.bread);
console.log("Proteina: "+xasalada.protein.protein);
console.log("Molho: "+xasalada.sauce);
console.log("Salada: "+xasalada.salad);
