import Pregled from "./pregled";

class Secer extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.vrijednost = 4.2;
        this.vrijemeObroka = "11:30";
    }

    tip() {
        return "Secer";
    }

    toString() {
        return 'Nivo secera: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}

export default Secer;