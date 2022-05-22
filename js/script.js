'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Лига справедливости",
            "Логан",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          films = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type="checkbox"]');
          

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newFilm = addInput.value;
        if (newFilm){
            if (newFilm.length > 21) { 
                movieDB.movies.push(newFilm.toUpperCase().substring(0, 21) + '...');
            } else movieDB.movies.push(newFilm.toUpperCase());

            if (checkBox.checked){
                console.log('Добавляем любимый фильм');
            }
        }
        movieSort(movieDB.movies);

        innerDatabase(movieDB.movies, films);
     
        event.target.reset();
    })

    const trashing = (a) => {
        a.forEach(item => {
            item.remove();
        })
    }

    const deleteAdv = (deleteObj) => {
        deleteObj.forEach(item => {
            item.remove();
        })
    }
   
    const changeCont = (gen, postr) => {
        gen.textContent = 'Драма';
        postr.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const movieSort = (arr) => {
        arr.sort();
    }

    function innerDatabase(objectArray, parent){
        parent.innerHTML = '';
        
        movieSort(objectArray);
   
        objectArray.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                innerDatabase(movieDB.movies, films);
            })
        });
    }
    
    innerDatabase(movieDB.movies, films);
    deleteAdv(adv);
    changeCont(genre, poster);
})
