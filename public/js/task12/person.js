/*
Napraviti klasu Person (es5) sa
 - first name, 
 - last name i
 - gender varijablama
i instancirati objekat.

Implementirati nasledjivanje klase Person (es5).

Postaviti statičke varijable i metode u klasu Person (es5).
*/

function Person(first, last, g) {
    this.first_name = first;
    this.last_name = last;
    this.gender = g;
}

Person.isHuman = true;
Person.introduce = function() {
    "I am a human being and I don't want to hurt you, alien friend.";
}

Person.prototype.introduce = function() {
    return 'Hi! I am ' + this.first_name + ' ' + this.last_name +
        ' and I am a proud ' + this.gender + '!';
}


// I N H E R I T A N C E //

function Student(studentId, firstName, lastName, gender) {
    this.studentId = studentId;
    // `new` keyword creates an empty object and assigns it to
    // `this`. The new object is passed to the
    // Person constructor function through the use of `call`,
    // so the gender, first and last name properties can be set.
    Person.call(this, firstName, lastName, gender);
  }

// copying prototype of the parent class
Student.prototype = Object.create(Person.prototype);
// return the constructor prop back to the class itself
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    return Person.prototype.introduce.call(this) + ' And a student!';
}

var p = new Person('Mika', 'Antic', 'male');
var s = new Student('SW51/2014', 'Aleksandar', 'Savic', 'male');

console.log(p.introduce());
console.log(s.introduce());