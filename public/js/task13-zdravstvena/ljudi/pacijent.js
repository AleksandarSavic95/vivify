import Osoba from "./osoba";
import Util from "../util";

class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brKartona, doktor = null) {
        super(ime, prezime);
        this.brKartona = brKartona;
        this.jmbg = jmbg;
        this.doktor = doktor;
    }

    odaberiDoktora(doktor) {
        this.doktor = doktor;
        console.log(Util.getDateTimeString() +
            `Pacijent ${this.ime} bira doktora ${doktor.ime}`);
    }

    obaviPregled(pregled) {
        console.log(Util.getDateTimeString() +
            `Pacijent ${this.ime} obavlja pregled ${pregled.tip()}`);
        
        if (pregled.pacijent == this.brKartona) {
            pregled.popuniIzvjestaj();
        } else {
            console.log('Pacijent radi tudji pregled!');
        }
    }
}

export default Pacijent;