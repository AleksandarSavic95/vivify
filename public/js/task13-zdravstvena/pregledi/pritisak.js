import Pregled from "./pregled";

class Pritisak extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.donja = 84;
        this.gornja = 120;
        this.puls = 100;
    }

    toString() {
        return 'Pritisak: ' + this.donja + ' sa ' + this.gornja +
            '\nPuls: ' + this.puls;
    }
}

export default Pritisak;