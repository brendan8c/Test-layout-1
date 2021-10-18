// ——————————————————————————
//todo: Прелоадер для сайта
document.body.onload = preloader;

function preloader() {
    setTimeout(function() {
        let preload = document.getElementById('page-preloader');
        if (!preload.classList.contains('preloader__off')) {
            preload.classList.add('preloader__off')
        }
    }, 1000);
}

//todo: Выпадающее меню в поиске.
// ——————————————————————————
const selectSingle = document.querySelector('.search-box__select');
const selectSingle_title = selectSingle.querySelector('.search-box__select--title');
const selectSingle_labels = selectSingle.querySelectorAll('.search-box__select--label');

// Переключить меню
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Закрыть при нажатии на опцию
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}
// Выпадающее меню в поиске.
// ——————————————————————————
const selectSingleTwo = document.querySelector('.header-search__select');
const selectSingle_titleTwo = selectSingleTwo.querySelector('.header-search__select--title');
const selectSingle_labelsTwo = selectSingleTwo.querySelectorAll('.header-search__select--label');

// Переключить меню
selectSingle_titleTwo.addEventListener('click', () => {
    if ('active' === selectSingleTwo.getAttribute('data-state1')) {
        selectSingleTwo.setAttribute('data-state1', '');
    } else {
        selectSingleTwo.setAttribute('data-state1', 'active');
    }
});

// Закрыть при нажатии на опцию
for (let i = 0; i < selectSingle_labelsTwo.length; i++) {
    selectSingle_labelsTwo[i].addEventListener('click', (evt) => {
        selectSingle_titleTwo.textContent = evt.target.textContent;
        selectSingleTwo.setAttribute('data-state1', '');
    });
}
// ——————————————————————————
//todo: Звёзды рейтинга

$(function() {
    $('.main-product__rateyo--ratey').rateYo({
        // колличество звёздочек 
        rating: 4,
        // размер звёздочек "ширина"
        starWidth: '15px',
        // заблокирует использование звёздочек
        readOnly: true,
        // цвет звезды
        ratedFill: '#000000'
    });
});
// ——————————————————————————
//todo: Слайдер

$('.owl-1').owlCarousel({
    loop: true, // Зациклить
    items: 4, // Колличество элементов
    margin: 16, // Расстояние между элементами
    nav: true // Включает кнопки переключения слайда
})
$('.owl-2').owlCarousel({
    loop: true, // Зациклить
    items: 4, // Колличество элементов
    margin: 16, // Расстояние между элементами
    nav: true // Включает кнопки переключения слайда
})

// ——————————————————————————
//todo: Запуск видео при наведении

// Для видео №1
$(".video-box-1").hover(function() {
    $(".photo-1").addClass("main-product__photo-off");
    $(".video-1").addClass("main-product__video-on");
}, function() {
    $(".photo-1").removeClass("main-product__photo-off");
    $(".video-1").removeClass("main-product__video-on");
});

// Для видео №2
$(".video-box-2").hover(function() {
    $(".photo-2").addClass("main-product__photo-off");
    $(".video-2").addClass("main-product__video-on");
}, function() {
    $(".photo-2").removeClass("main-product__photo-off");
    $(".video-2").removeClass("main-product__video-on");
});

// Для видео №3
$(".video-box-3").hover(function() {
    $(".photo-3").addClass("main-product__photo-off");
    $(".video-3").addClass("main-product__video-on");
}, function() {
    $(".photo-3").removeClass("main-product__photo-off");
    $(".video-3").removeClass("main-product__video-on");
});

// Для видео №4
$(".video-box-4").hover(function() {
    $(".photo-4").addClass("main-product__photo-off");
    $(".video-4").addClass("main-product__video-on");
}, function() {
    $(".photo-4").removeClass("main-product__photo-off");
    $(".video-4").removeClass("main-product__video-on");
});