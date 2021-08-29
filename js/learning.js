' use strict';
//----------------------ПРАКТИКА
/*let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
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

console.log(personalMovieDB.movies);*/





//--------------------УСЛОВИЯ IF ELSE/ SWITCH


//----------------------IF/ELSE

/*
const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log ('2much');
} else if (num < 100) {
    console.log('exacly');
}
(num == 50) ? console.log('ok') : console.log('ne ok');

//-----------------SWITCH (только строгое сравнение)

const num = 50;

switch(num) {
    case 49:
        console.log('dich');
        break;
    case 100:
        console.log('tozhe dich');
        break;
    case 50:
        console.log('ura');
        break;
    default:
        console.log('da i poher');
}*/


//--------------ЦИКЛЫ--------------

/*let num = 50;

/*while (num <= 55){
    console.log(num);
    num++;

}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++){
    
    if (i === 6){
        //break;
        continue;
    }
console.log(i);
}
*/

//------------------ФУНКЦИИ------------

let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num =  30;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

function calc (a,b){
    return (a + b);
}
console.log(calc(10,11));
console.log(calc(120,121));
console.log(calc(10222,1334441));

function ret(){
    let num = 50;
    //
    return (num);
}
const anotherNum = ret();
console.log (anotherNum);

const logger = function(){
    console.log('Hello');
};
logger();

const calcu = (a,b) => { 
    return a + b;
};

//------------------МЕТОДЫ И СВОЙСТВА СТРОК-----------------

const str ='test';
const arr = [1,2,3];
console.log(arr.length);

