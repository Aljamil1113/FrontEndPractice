// var x = 25;

// if (x) {
//     let x = 75;
// }

// console.log(x);
// var div = document.createElement('div');
// for (var i = 0; i < 45; i++) {

//     div.onclick = function() {
//         alert("You click on the box " + i);
//     }
//     document.getElementsByTagName('section')[0].appendChild(div);
// }

//////******Spread Operator */
// var mobiles = ["Oppo", "Vivo", "Mi"];
// var homeElectronics = ["TV", "Fridge", "Home Theater"];

// var electronics = ["Desktops", ...mobiles, ...homeElectronics, "Laptops", "Tablets"];

// console.log(electronics);

///////////************ */
// var sounds = {
//     alarm(times) {
//         console.log("Beep".repeat(times));
//     },
//     ringTone(times) {
//         console.log("Songs".repeat(times));
//     }
// }

// console.log(sounds.alarm(3));
// console.log(sounds.ringTone(4));

// var person = {
//     first: "John",
//     actions: ["Bike", "Hike", "Ski", "Suri"],
//     printActions() {
//         this.actions.forEach(action => {
//             var str = this.first + 'Like to action' + action;
//             console.log(str);
//         });
//     }
// }

// person.printActions();

class Mobiles {
    constructor(storage, ram) {
        this.storage = storage;
        this.ram = ram;
    }
    phoneDetails() {
        console.log(`This phone has storage of${this.storage} and this a RAM ${this.ram}.`);
    }
}

class oldPhones extends Mobiles {
    constructor() {
        super("4GB", "1GB");
    }
}

var myNewPhone = new Mobiles("64GB", "8:GB");
myNewPhone.phoneDetails();

var oldPhone = new oldPhones();
oldPhone.phoneDetails();