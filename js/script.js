/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const spam = document.querySelectorAll ('.promo__adv img');
spam.forEach(item =>{
    item.remove();
});


const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'драма';

const bg = document.querySelector('.promo__bg');
bg.style.background = 'url("../img/bg.jpg") center center/cover no-repeat';

const filmsList = document.querySelector('.promo__interactive-list');

filmsList.innerHTML = '';

movieDB.movies.sort();


movieDB.movies.forEach((film,i) => {
    filmsList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
