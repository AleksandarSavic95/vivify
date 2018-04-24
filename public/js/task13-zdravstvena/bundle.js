class Util {
    /** DATES **/

    /* Datum i vrijeme u formatu dd.mm.yyyy. hh:mm:ss */
    static getDateTimeString() {
        return `[${moment().format("DD.MM.YYYY HH:mm")}] `;
    }

    /* Random datum izmedju dva dana */
    static randomDate(start, end) {
        return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    static log(message) {
        console.log(Util.getDateTimeString() + message);
    }

    /** INTS **/
    
    static getRandomIntIn(min, max) {
        if (min >= max) {
            return 42; // the Answer :)
        }
        return Math.floor(Math.random() * (max - min) + min);
    }

    /** FLOATS **/

    static getRandomFloatIn(min, max) {
        if (min >= max) {
            return 42; // the Answer :)
        }
        return Math.random() * (max - min) + min;
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
        this.pacijenti = [];
        Util.log(`doktor ${ime} kreiran`);
    }

    dodajPacijenta(pacijent) {
        this.pacijenti.push(pacijent);
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
        Util.log(`Pacijent ${ime} kreiran`);
    }

    odaberiDoktora(doktor) {
        this.doktor = doktor;
        this.doktor.dodajPacijenta(this);
        Util.log(`Pacijent ${this.ime} bira doktora ${doktor.ime}`);
    }

    obaviPregled(pregled) {
        Util.log(`Pacijent ${this.ime} obavlja pregled ${pregled.tip()}`);
        
        if (pregled.pacijent == this) {
            pregled.popuniIzvjestaj();
        } else {
            Util.log('Pacijent radi tudji pregled!');
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
        this.pacijent = pacijent;
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

    // note: moje znanje iz medicine i nije tako sjajno :)
    popuniIzvjestaj() {
        this.vrijednost = Util.getRandomFloatIn(2, 10);
        this.vrijemeObroka = Util.randomDate(new Date(2012, 0, 1), new Date());
    }

    tip() {
        return 'Holesterol';
    }

    toString() {
        return `Nivo holesterola: ${this.vrijednost}\n`+
            `Vrijeme posljednjeg obroka: ${this.vrijemeObroka.format()}`;
    }
}

class Pritisak extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    // note: moje znanje iz medicine i nije tako sjajno :)
    popuniIzvjestaj() {
        this.donja = Util.getRandomIntIn(50, 100);
        this.gornja = Util.getRandomIntIn(70, 140);
        this.puls = Util.getRandomIntIn(50, 160);
    }

    tip() {
        return 'Pritisak';
    }

    toString() {
        return `Pritisak: ${this.donja} sa ${this.gornja}\nPuls ${this.puls}`;
    }
}

class Secer extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
    }

    popuniIzvjestaj() {
        this.vrijednost = Util.getRandomFloatIn(1, 9);
        this.vrijemeObroka = Util.randomDate(new Date(2012, 0, 1), new Date());
    }

    tip() {
        return 'Secer';
    }

    toString() {
        return `Nivo secera: ${this.vrijednost}\n`+
            `Vrijeme posljednjeg obroka: ${this.vrijemeObroka.format()}`;
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
