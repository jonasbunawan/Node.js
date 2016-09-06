//module.exports exists by default in every .js file, but starting from blank values (empty property)
/*module.exports = {
	
	printAvatar: function(){
		console.log("Avatar");
	},
	
	printChappie: function(){
		console.log("Chappie");
	},
	
	favMovie: "The Matrix"
};

//another way of exporting module from different file to main app
function printAvatar(){
	console.log("Avatar: PG-13");
}

function printChappie(){
	console.log("Chappie: R");
}

module.exports.avatar = printAvatar;
module.exports.chappie = printChappie;

module.exports = {
		favMovie: ""
};*/
//best way to share module to avoid unexpected value to appear by applying object factory technique , which is by creating a function with return value for a exports property instead of assigning the property inside exports property directly
module.exports = function(){
	return{
			favMovie: ""
	};
};