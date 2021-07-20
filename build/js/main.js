"use strict";
//Слайдер работ
const slider1 = document.querySelector('.products__slider');

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,   // Количество показываемых слайдов
  spaceBetween:-16,  // Расстояние между слайдами
  loop: true,  // Зацикленность слайдера (loop - цикл)
  // slidesPerGroup: 3, // Группировать слайды по 3
  slideToClickedSlide: true, //Перелистывать слайды при клике на каком-то из них
  autoplay: {
		delay: 5000,
	},
  navigation: {
    nextEl: '.products__slider-button-next',   // стрелочки навигации
    prevEl: '.products__slider-button-prev',
  },
  breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: -16,
		},
		1200: {     
      loop: true,		
      slidesPerView: 'auto',
      spaceBetween: 24,  
    	}
		
	}
});

// Слайдер отзывов

const slider2 = document.querySelector('.reviews__slider');

let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 1,   // Количество показываемых слайдов
  spaceBetween:-16,  // Расстояние между слайдами
  loop: true,  // Зацикленность слайдера (loop - цикл)
  // slidesPerGroup: 3, // Группировать слайды по 3
  slideToClickedSlide: true, //Перелистывать слайды при клике на каком-то из них
  autoplay: {
		delay: 5000,
	},  
  breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: -16,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 16,
		}		
	}
});
  

// Плавный переход для меню
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
  });
}


//Добавляем класс active к пункту меню
const links = document.querySelectorAll(".menu__link");

for (let i = 0; i < links.length; i++) {
  const item = links[i];
  item.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e)
{
  for (let i = 0; i < links.length; i++) {
    const item = links[i];
    item.classList.remove('menu__link--active');
  }
  e.target.classList.add('menu__link--active');
}


// Открытие - закрытие мобильного меню

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.nav__mobile');
let menuItem = document.querySelectorAll('.menu__item');

function DeleteClassHidden() {
  if(document.documentElement.clientWidth < 1200) {
    menuButton.classList.remove("mobile-btn--close");
    menu.classList.add("visualy-hidden");
  }
}
DeleteClassHidden();

function closeMobileMenu() {
    menu.classList.toggle("visualy-hidden");
    menuButton.classList.toggle("mobile-btn--close");
}

menuButton.addEventListener('click', function() {
    menu.classList.toggle("visualy-hidden");
    menuButton.classList.toggle("mobile-btn--close");
} );
menuItem.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.classList.add("visualy-hidden");
        menuButton.classList.remove("mobile-btn--close");gitqqq
    });
});



// Открытие модального окна

let application = document.querySelectorAll('.modal-btn');
let popup = document.querySelector('.modal-block');
let close = document.querySelector('.modal__btn--close');

// Открываем модальное окно
for(let i=0; i < application.length; i++) {    
  application[i].addEventListener('click', function(event) {    
    // "use strict";
    event.preventDefault();  //Отменяем переход по ссылке, которое установлено по умолчанию
  
      popup.classList.add('modal-block--show');   
  });
}


// Закрываем модальное окно
close.addEventListener('click', function(event) {
    // "use strict";
    event.preventDefault();  // Отменяем действия по умолчанию
    popup.classList.remove('modal-block--show');
    // popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function(event) {
    // "use strict";
    if(event.keyCode === 27) {
        if(popup.classList.contains('modal-block--show')) {
            popup.classList.remove('modal-block--show');
            // popup.classList.remove('modal-error');
        }
    }
});


// Переключение табов

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);        

  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none';
      });

      tab.forEach(item => {
          item.classList.remove(activeClass);
      });
  }

  function showTabContent(i = 0) {
      content[i].style.display = 'flex';
      tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
      const target = e.target;
      if (target &&
          (target.classList.contains(tabSelector.replace(/\./, "")) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
          tab.forEach((item, i) => {
              if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
              }
          });
      }
  });
};

tabs(".tabs", ".tabs__title", ".tabs__content-item", "tabs__title--active");

//Отправление формы

const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
      item.addEventListener('input', () => {
          item.value = item.value.replace(/\D/, '');
      });
  });
  
  const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;
      let res = await fetch(url, {
          method: "POST",
          body: data
      });

      return await res.text();
  };

  const clearInputs = () => {
      inputs.forEach(item => {
          item.value = '';
      });
  };

  form.forEach(item => {
      item.addEventListener('submit', (e) => {
          e.preventDefault();

          let statusMessage = document.createElement('div');
          statusMessage.classList.add('status');
          item.appendChild(statusMessage);

          const formData = new FormData(item);

          postData('assets/server.php', formData)
              .then(res => {
                  console.log(res);
                  statusMessage.textContent = message.success;
              })
              .catch(() => statusMessage.textContent = message.failure)
              .finally(() => {
                  clearInputs();
                  setTimeout(() => {
                      statusMessage.remove();
                  }, 5000);
              });
      });
  });
};

forms();