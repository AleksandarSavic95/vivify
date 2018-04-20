import Osoba from "./osoba";

class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brKartona, doktor = null) {
        super(ime, prezime);
        this.brKartona = brKartona;
        this.jmbg = jmbg;
        this.doktor = doktor;
    }

    odaberiDoktora(doktor) {
        this.doktor = doktor;
    }

    obaviPregled(pregled) {
        console.log('Pacijent ' + this.ime +
            ' obavlja pregled ' + pregled);
        pregled.popuniIzvjestaj();
    }
}

export default Pacijent;