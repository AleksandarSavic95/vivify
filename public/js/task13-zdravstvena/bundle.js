class Util {
    /*
    * Datum i vrijeme u formatu dd.mm.yyyy. hh:mm:ss
    */
    static getDateTimeString() {
        let d = new Date(); // current date and time
        let time = d.toTimeString().split(' ')[0]; // hh:mm:ss
        let day = d.getDate(); // day
        let month = d.getMonth() + 1; // month - january = 0
        let year = d.getFullYear();
        return '[' + day + '.' + month + '.' + year + '. ' + time + '] ';
    }
}

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
        console.log(Util.getDateTimeString() + `doktor ${ime} kreiran`);
    }

    /*
    * Vezivanje pregleda za konkretnog pacijenta.
    * Nisam se mogao sjetiti bolje semantike ovog koraka .. :)
    */
    zakaziPregled(pregled, pacijent) {
        pregled.postaviPacijenta(pacijent);
    }
}

class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brKartona, doktor = null) {
        super(ime, prezime);
        this.brKartona = brKartona;
        this.jmbg = jmbg;
        this.doktor = doktor;
        console.log(Util.getDateTimeString() +
            `Pacijent ${ime} kreiran`);
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

class Pregled {
    constructor(datum, vrijeme) {
        this.datum = datum;
        this.vrijeme = vrijeme;
        this.pacijent = {};
    }

    /*
    * Odredjuje pacijenta za kog je vezana konkretna instanca.
    */
    postaviPacijenta(pacijent) {
        this.pacijent = pacijent.brKartona;
    }

    // 'abstract' method
    popuniIzvjestaj() {
        throw new Error('\'popuniIzvjestaj\' not implemented!');
    }

    tip() {
        throw new Error('\'tip\' not implemented!');
    }

}

class Holesterol extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.vrijednost = 2.6;
        this.vrijemeObroka = '14:30';
    }

    tip() {
        return 'Holesterol';
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

    tip() {
        return 'Pritisak';
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
        this.vrijemeObroka = '11:30';
    }

    tip() {
        return 'Secer';
    }

    toString() {
        return 'Nivo secera: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}

///// TEST /////
let doktor = new Doktor('Milan', 'Milanovic', 'Opsta praksa');
let pacijent = new Pacijent('Dragan', 'Draganic', '1212123121212', 'K-35');
pacijent.odaberiDoktora(doktor);

let secer = new Secer('25-5-2018', '10:00');
let pritisak = new Pritisak('25-5-2018', '11:00');

doktor.zakaziPregled(secer, pacijent);
doktor.zakaziPregled(pritisak, pacijent);

pacijent.obaviPregled(secer);
pacijent.obaviPregled(pritisak);

console.log('END');