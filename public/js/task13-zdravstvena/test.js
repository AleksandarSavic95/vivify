import Doktor from './doktor';
import Pacijent from './pacijent';
import Pritisak from './pregledi/pritisak';
import Secer from './pregledi/secer';
/*
 - kreirati doktora “Milan”
 - kreirati pacijenta “Dragan”
 - pacijent “Dragan” bira doktora “Milan” za svog izabranog lekara
 - doktor “Milan” zakazuje pregled za merenje nivoa šećera u krvi za pacijenta “Dragan”
 - doktor “Milan” zakazuje pregled za merenje krvnog pritiska za pacijenta “Dragan”
 - pacijent “Dragan” obavlja laboratorijski pregled za merenje nivoa šećera u krvi. Simulirati i prikazati rezultate.
 - pacijent “Dragan” obavlja laboratorijski pregled za merenje krvnog pritiska. Simulirati i prikazati rezultate.
*/
let doktor = new Doktor("Milan", "Milanovic", "Opsta praksa");
let pacijent = new Pacijent("Dragan", "Draganic", "1212123121212", "K-35");
pacijent.odaberiDoktora(doktor);

let secer = new Secer('25-5-2018', '10:00');
let pritisak = new Pritisak('25-5-2018', '11:00');

doktor.zakaziPregled(secer, pacijent);
doktor.zakaziPregled(pritisak, pacijent);

pacijent.obaviPregled(secer);
pacijent.obaviPregled(pritisak);

console.log('END');