/*
Razlika između nizova i json objekata - napraviti json objekat i niz json objekata
*/
var o = {'a':22};
var arr = [
    {'a':32, 'b': 42},
    {'c':52, 'd':62}
];
arr.atribute = "%";

console.log(o);
console.log(arr);

// U JSu, sve je objekat, pa tako i niz (Array).
// Zato možemo dodjeljivati custom atribute nizu, kao bilo kom objektu.
// Razlikuje se od Object-a po prototipu, koji sadrži metode za rad sa nizom:
// - push i pop, slice i sPlice
// - filter, find, findIndex
// - length (property)