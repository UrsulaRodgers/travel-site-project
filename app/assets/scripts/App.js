import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");


















//Example stuff

// var $ = require('jquery');
// //var Person = require("./modules/Person");
// //ES6 below:
// import Person from './modules/Person';

// class Adult extends Person {
// 	payTaxes() {
// 		console.log(this.name + ' paid taxes');
// 	}
// }

// var john = new Person("John Doe", "blue");

// john.greet();

// var jane = new Adult("Jane Smith", "yellow");
// //Adult is inherited from Person

// jane.greet();
// jane.payTaxes();


