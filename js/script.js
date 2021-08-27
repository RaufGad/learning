' use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
movieName = prompt('Один из последних просмотренных фильмов?'),
movieRate = prompt('На сколько оцените его?'),
movieName1 = prompt('Один из последних просмотренных фильмов?'),
movieRate1 = prompt('На сколько оцените его?');

   
const personalMovieDB = {
    count: numberOfFilms = {}, 
    movies: {},
    actors: {},
    genres:[],
    privat:false
};
personalMovieDB.movies[`"${movieName}"`] = (movieRate);
personalMovieDB.movies[`"${movieName1}"`] = (movieRate1);

console.log(personalMovieDB.movies);





