/*var person = {
		firstname: "Jonas",
		lastname: "Bunawan",
		age: 25
};

console.log(person);

function addNumbers(a,b){
	return a + b;
}

console.log(addNumbers(8,9));

var printHelloWorld = function(){
	console.log("Hello World!");
};
printHelloWorld();

setTimeout(printHelloWorld, 8000);

function placeAnOrder(orderNumber){
	console.log("Customer order:", orderNumber);
	cookAndDeliverfood(function(){
		console.log("Delivered food order:", orderNumber);
	});
}

//Simulate a 5 second operation
function cookAndDeliverfood(callback){
	setTimeout(callback, 5000);
}

//Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

var Jonas = {
		favFood: "Seafood",
		favMovie: "Chappie"
};

var Person = Jonas;
Person.favFood = "Noodles";
console.log(Jonas.favFood);

console.log(19 == '19'); //true
console.log(19 === '19'); //false


var Jonas = {
		printFirstName: function(){
			console.log("My name is Jonas");
			console.log(this === Jonas); // true
		}
};

Jonas.printFirstName();

//The default calling context is global
function doSomethingWorthless(){
	console.log("\nI am worthless");
	console.log(this === global);
}

doSomethingWorthless();

function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	};
}

var Jonas = new User();
var Friend = new User();
Jonas.name = "Jonas";
Friend.name = "Friend";

Jonas.giveLife(Friend);
console.log("Jonas: " + Jonas.life);
console.log("Friend: " + Friend.life);

//You can add functions to all objects by calling prototype
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Friend.uppercut(Jonas);
console.log("Jonas: " + Jonas.life);
console.log("Friend: " + Friend.life);

//You can add properties to all objects by calling prototype
User.prototype.magic = 60;
console.log(Jonas.magic);
console.log(Friend.magic);


var movies = require('./movies');
//movies.avatar();

movies.printAvatar();
console.log(movies.favMovie);

//lesson-11
require('./friend');
require('./jonas');

//lesson-12
var fs = require('fs');

fs.writeFileSync("corn.text", "Corn is good, Corn is life");
console.log(fs.readFileSync("corn.text").toString());


var path = require('path');
var websiteHome = "Desktop/Jonas//Bunawan/index.html";
var websiteAbout = "Desktop/Jonas/Bunawan/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

//works like setTimeout where the code within the function is executed in certain defined period of time, except setTimeout runs the code once, but setInterval runs the code several times(repetition) within specified interval
setInterval(function(){
	console.log("Hello");
}, 2000);

console.log(__dirname);
console.log(__filename);
*/