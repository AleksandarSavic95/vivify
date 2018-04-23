import './osoba';

class Doktor extends Osoba {
    constructor (ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
    }

    /*
    * Vezivanje pregleda za konkretnog pacijenta.
    * Nisam se mogao sjetiti bolje semantike ovog koraka .. :)
    */
    zakaziPregled(pregled, pacijent) {
        pregled.postaviPacijenta(pacijent);
    }
}
export default Doktor;