"use strict";


const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
        }
    },
    rememberMyFilms: function(){
        for(let i=0; i<2; i++){
            let a = prompt("Один из последних просмотренных фильмов?",'').trim();
            let b = prompt("На сколько оцените его?",'').trim();
    
            if(a!=null && b!=null && a!='' && b!='' &&  a.length < 50){
                personalMovieDB.movies[a]=b;
                console.log('added');
            }else{
                console.log('error');
                i--;
            }
        }
    },
    detectLevel : function(){
        if(personalMovieDB.count<10){
            console.log('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count<30){
            console.log('Вы классический зритель');
        }else if (personalMovieDB.count>=30){
            console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB : function(isPrivat){
        if(!isPrivat){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function(){
        for(let i=0; i<3; i++){
            let tmp = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
            if(tmp!=null && tmp!=''){
                personalMovieDB.genres[i]=tmp;
                console.log('added');
            }else{
                console.log('error');
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item,i,arr){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });

    },
    toggleVisibleMyDB : function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};