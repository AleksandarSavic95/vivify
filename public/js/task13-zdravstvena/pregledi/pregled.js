class Pregled {
    constructor(datum, vrijeme) {
        this.datum = datum;
        this.vrijeme = vrijeme;this.pacijent = {};
    }

    /*
    * Odredjuje pacijenta za kog je vezana konkretna instanca.
    */
    postaviPacijenta(pacijent) {
        this.pacijent = pacijent.brKartona;
    }

    // "abstract" method
    popuniIzvjestaj() {
        throw new Error("'popuniIzvjestaj' not implemented!");
    }

    tip() {
        throw new Error("'tip' not implemented!");
    }
}

export default Pregled;