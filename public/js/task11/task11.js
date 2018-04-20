/*
napraviti poseban app.js fajl
napraviti anonimnu funkciju u tom fajlu
kreirati varijablu na različitim delovima sistema i istražiti njenu dostupnost:
 - unutar anonimne funkcije,
 - van nje i
 - unutar posebnog script tag-a. 
Postaviti varijablu:
    u poseban script tag
    u poseban js fajl koji se učitava pre i posle fajla sa anonimnom funkcijom 
    unutar anonimne funkcije
    van anonimne funkcije
*/

var a = function() {
    var anon = 'anon';
    console.log('~~~ anon ~~~');
    console.log(b4);
    console.log(anon);
    // console.log(after); // ReferenceError
    console.log(out); // undefined (!= ReferenceError)
    console.log(script);
    console.log('~~~ /anon ~~~');
}
a();

var out = 'out';
console.log('~~~ outside ~~~');
console.log(b4);
// console.log(anon); // ReferenceError
// console.log(after); // ReferenceError
console.log(out);
console.log(script);
console.log('~~~ /outside ~~~');
