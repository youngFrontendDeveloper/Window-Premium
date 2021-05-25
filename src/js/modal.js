
// Открытие модального окна

let application = document.querySelector('.button-block');
let popup = document.querySelector('.modal-block');
// let close = document.querySelector('.mobile-btn--close');

// let form = popup.querySelector('form');
// let storage = localStorage.getItem('login');



// Открываем модальное окно
application.addEventListener('click', function(event) {
    "use strict";
    event.preventDefault();  //Отменяем переход по ссылке, которое установлено по умолчанию
    // event [ɪˈvent]   событие
    popup.classList.add('modal-block--show');
    // if(storage) {
    //     login.value = storage;
    //     password.focus();
    // } else {
    //     login.focus();   // Делаем фокус на поле ввода
    // }
    
});


// Закрываем модальное окно
close.addEventListener('click', function(event) {
    "use strict";
    event.preventDefault();  // Отменяем действия по умолчанию
    popup.classList.remove('modal-block--show');
    // popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function(event) {
    "use strict";
    if(event.keyCode === 27) {
        if(popup.classList.contains('modal-block--show')) {
            popup.classList.remove('modal-block--show');
            // popup.classList.remove('modal-error');
        }
    }
});

// Отправление формы
// form.addEventListener('submit', function(event) {
//     "use strict";
//     // console.log("Отправили форму");
//     // console.log(login.value);
//     // console.log(password.value);
//     if(!login.value || !password.value) { 
//         //Проверяем, заполнены ли поля
//         event.preventDefault();
//         popup.classList.add("modal-error");   // Трясем форму при ошибке в заполнении
//         console.log("Error");
//     } else {
//         localStorage.setItem("login", login.value);
//     }
// });