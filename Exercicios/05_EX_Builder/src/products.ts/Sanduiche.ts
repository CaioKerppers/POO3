import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    addSauces(sauce: Sauce) {
        throw new Error("Method not implemented.");
    }
    private _sanduichetype : SanduicheType;
    private _sauce : Sauce;
    private _bread : Bread;
    private _protein : Protein;

    /**
     * Getter sanduichetype
     * @return {SanduicheType}
     */
	get sanduichetype(): SanduicheType {
		return this._sanduichetype;
	}

    /**
     * Getter sauce
     * @return {Sauce}
     */
	get sauce(): Sauce {
		return this._sauce;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {Protein}
     */
	get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	get salad(): Salad {
		return this._salad;
	}

    /**
     * Setter sanduichetype
     * @param {SanduicheType} value
     */
	set sanduichetype(value: SanduicheType) {
		this._sanduichetype = value;
	}

    /**
     * Setter sauce
     * @param {Sauce} value
     */
	set sauce(value: Sauce) {
		this._sauce = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	set salad(value: Salad) {
		this._salad = value;
	}
    private _salad : Salad;
}