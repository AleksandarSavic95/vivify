class Osoba {
    constructor (ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
}

class Doktor extends Osoba {
    constructor (ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
    }
}

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

class Pregled {
    constructor(datum, vrijeme) {
        this.datum = datum;
        this.vrijeme = vrijeme;
    }
}

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

class Secer extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.vrijednost = 4.2;
        this.vrijemeObroka = "11:30";
    }

    toString() {
        return 'Nivo secera: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}

///// TEST /////
var doktor = new Doktor("Milan", "Milanovic", "Opsta praksa");
var pacijent = new Pacijent("Dragan", "Draganic", "1212123121212", "K-35");
pacijent.odaberiDoktora(doktor);

var secer = new Secer('25-5-2018', '10:00');
var pritisak = new Pritisak('25-5-2018', '11:00');

doktor.zakaziPregled(secer, pacijent);
doktor.zakaziPregled(pritisak, pacijent);

pacijent.obaviPregled(secer);
pacijent.obaviPregled(pritisak);

console.log('END');