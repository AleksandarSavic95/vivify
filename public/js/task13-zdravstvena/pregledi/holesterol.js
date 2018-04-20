import Pregled from "./pregled";

class Holesterol extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.vrijednost = 2.6;
        this.vrijemeObroka = "14:30";
    }

    toString() {
        return 'Nivo holesterola: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}

export default Holesterol;