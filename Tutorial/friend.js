var movies = require('./movies');

/*movies.favMovie = "A Walk to Remember";
console.log("Friend's favorite movie is: " + movies.favMovie)*/

var friendsMovies = movies();
friendsMovies.favMovie = "A Walk to Remember";
console.log("Friend's favorite movie is: " + friendsMovies.favMovie);