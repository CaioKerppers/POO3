import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Salad from "../components/Salad";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Sanduiche from "../products.ts/Sanduiche";

export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    addSauces(sauce : Sauce);
    setSanduicheType(value : SanduicheType);
    setSalad(salad : Salad);
    setBread(bread : Bread);
    setProtein(protein : Protein); 
}   