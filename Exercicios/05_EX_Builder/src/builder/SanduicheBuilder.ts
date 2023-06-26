import Protein from "../components/Protein";
import Sauce from "../components/Sauce";
import IBuilder from "./IBuilder";
import Salad from "../components/Salad";
import Bread from "../components/Bread";
import SanduicheType from "../components/SanduicheType";
import Sanduiche from "../products.ts/Sanduiche";

export default class SanduicheBuiler implements IBuilder{
    private sanduiche = new Sanduiche;

    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche() : Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    addSauces(sauce: Sauce) {
        this.sanduiche.addSauces(sauce)
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduichetype = value;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
}