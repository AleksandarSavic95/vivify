/*
JavaScript promises and callbacks
*/

var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'iPhone',
                color: 'gold'
            };
            // we need to call the `resolve` method when
            resolve(phone); // promise is fulfilled
        } else {
            var reason = new Error('mom is not happy');
            // we need to call the `reject` method when
            reject(reason); // promise is rejected
        }

    }
);

// after the promise is obtained, we will use it by supplying
// success and failure callbacks to it's `then` method

willIGetNewPhone.then(
    function(phone) {
        console.log('I got a new phone! It\'s an '
            + phone.brand + ' of color ' + phone.color);
    },
    function(reason) {
        console.log('Oh no! Mommy won\'t buy me a new phone :(' +
            ' Here is what happened:\n\t' + reason);
    }
);