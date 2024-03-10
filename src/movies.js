// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple 
// movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => movies.director);
}

// const moviesArray = data.js/moviesArray;
// const movies = getAllDirectors(moviesArray);
// console.log(movies); hmmm dosent work.

//  Function "getAllDirectors"
//  ✔︎ should be declared
//  ✔︎ should return an array
//  ✔︎ should return a new array, not update the original one
//  ✔︎ should return a new array with the same length as the original one


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const moviesArray = data.js / moviesArray;
function howManyMovies(moviesArray) {

    if (!moviesArray || !Array.isArray(moviesArray)) {
        return 0;
    }

    const spMovieCount = moviesArray.filter(function spMovie(movies) {
        return movies.director === `Steven Spielberg` && movies.genre === `Drama`;
    }).length;

    return spMovieCount;
}

// // to be clear
// const spMovieCount = moviesArray.filter(function spMovie(movies) {
//     return movies.director === `Steven Spielberg` && movies.genre === `Drama`;
// }).length;

// // w/z allow function
// const spMovieCount = moviesArray.filter((movie) => movies.director === `Steven Spielberg` && movies.genre === `Drama`).length;

// // w/z includeds? got to check.


// Iteration 2: Steven Spielberg. The best?
// ✔︎ Create a howManyMovies() function 
// ✔︎ that receives an array as a parameter and
// ✔︎ filter the array so we can have only the drama movies where Steven Spielberg is the director.

// Function "howManyMovies"
// ✔︎ should be declared
// ✔︎ should return a number
// ✔︎ should return 0 if the array is empty
// ✔︎ should return 0 if none of the movies in the array were directed by Steven Spielberg
// should only count drama movies
// should return 2 if there are only 2 Steven Spielberg movies
// should return 4 when called with the array of movies exported from "data.js"

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
