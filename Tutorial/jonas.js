var movies = require('./movies');

var jonasMovies = movies();

/*
console.log("Jonas' favorite movie is: " + movies.favMovie);
*/

jonasMovies.favMovie = "The Finest Hours";
console.log("Jonas' favorite movie is: " + jonasMovies.favMovie);