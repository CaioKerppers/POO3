import IBuilder from "../builder/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    //Constroi Sanduiche Natural
    constructorNatural(){
        this.builder.setSanduicheType(SanduicheType.NATURAL);
        this.builder.setBread(new Bread("Pão Integral"));
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauces(new Sauce("Sem molho"));
        this.builder.setProtein(new Protein(500));
    }

    //Constroi o HotDog
    constructorHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG)
        this.builder.setBread(new Bread("Pão de HotDog"));
        this.builder.setProtein(new Protein(250));
        this.builder.addSauces(new Sauce("Molho vermelho"));
        this.builder.setSalad(Salad.TOMATO);
    }
    
    //Constroi XSalda
    constructorXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(new Bread("Pão de Hamburguer"));
        this.builder.setProtein(new Protein(550));
        this.builder.addSauces(new Sauce("Molho do MCDonalds"));
        this.builder.setSalad(Salad.CUCUMBER);
        this.builder.setSalad(Salad.TOMATO);
        this.builder.setSalad(Salad.LETTUCE);
    }
}