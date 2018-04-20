import './osoba';

class Doktor extends Osoba {
    constructor (ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
    }
}
export default Doktor;