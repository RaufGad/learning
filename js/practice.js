' use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

if ( numberOfFilms < 10) {
    alert ("Просмотрено довольно мало фильмов");
}else if ( numberOfFilms < 31 ) {
    alert ("Вы классический зритель");
}else if ( numberOfFilms > 30 ) {
    alert ("Вы киноман");
}else {
    alert("Произошла ошибка");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    let num = 0;
    while (num < 2) {
        const a = prompt ('Один из последних просмотренных фильмов?'),
              b = prompt ('На сколько оцените его?');
        personalMovieDB.movies[a] = b;
        if (a.length < 50 && b.length < 50) {
            if  (a != "" && b !="") {
                if (a !== null && b !== null){
                    num++;
                }
            }
        }
}

console.log (personalMovieDB);