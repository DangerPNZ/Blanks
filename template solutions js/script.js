// Подключить jquery!!!

// Применить после готовности документа
$(document).ready(function() {

})

// Добавляем класс при скролле (Тут 2 примера!)
$(window).scroll(function() {
    if ($(window).scrollTop() > $('.page-header').height()) {
        $(".main-nav").addClass("main-nav--fixed")
    } else {
        $(".main-nav").removeClass("main-nav--fixed")
    }
})

$(window).scroll(function() {
    if ($('.full_width_one .sub-menu').length > 0) {
        if ($(window).scrollTop() > 102) {
            $(".full_width_one .sub-menu").addClass("fixed")
        } else {
            $(".full_width_one .sub-menu").removeClass("fixed")
        }
    }
})

// Ловим клик вне нужного элемента и скрываем его, удаляя доп классы, в т.ч. у сопутствующих
$(document).mouseup(function(e) {
    var menu = $(".top_menu>li.show-menu>ul");
    if (menu.has(e.target).length === 0) {
        $(".top_menu>li.show-menu").removeClass('show-menu');
        $(".top_menu>li>a.selected-link").removeClass('selected-link');
    }
});

// плавный скрол к якорю по id
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */
        $('html, body').animate({
            scrollTop: dn
        }, 800);
        /*
         * Числовое значение -  скорость перехода в миллисекундах
         */
    });
});

// Двухстрочный placeholder(div), скрываемый при вводе
$(document).on('input', '#about-me', function() {
    if ($('#about-me').val()) {
        $('#placeholder').hide();
    } else {
        $('#placeholder').show();
    }
});

// Автоматическое добавление строк textarea
$(document).ready(function() {
    var oldScrollHeight = $(this).prop('scrollHeight')

    $('#about-me').on('input', function() {
        if (oldScrollHeight != $(this).prop('scrollHeight')) {
            $(this).height($(this).prop('scrollHeight'));
        }
        oldScrollHeight = $(this).prop('scrollHeight')
    })

});


Мосплитка
$(document).ready(function() {
    $(window).scroll(function() {
        if (($(window).scrollTop() + $(window).height()) >= $('body').height() - 639) {
            console.log("fjkf")
            $(".catalog__total-result").removeClass("catalog__total-result--fixed")
        } else {
            $(".catalog__total-result").addClass("catalog__total-result--fixed")
        }
    })
})

Из PrimPark
$(document).ready(function() {
    // маски для номеров телефонов
    $("#client-tel").mask("+7(999) 999-9999");
    $("#modal-tel").mask("+7(999) 999-99-99");

    // вызов модального окна в десктопе по клику на номер телефона
    if (document.body.clientWidth > 800) {
        $('body').on('click', '.main-nav__call-us,.contacts__info-item--tel,.call-us,.modal-call,.prices__service-item', function(event) {
            event.preventDefault();
            $(".modal-feedback").addClass("modal-feedback--open")
            $(".modal-feedback").removeClass('modal-feedback--send-ok');
        });
    };

    $('body').on('click', '.page-content__promo-preview', function(event) {
        $(".modal-promo").addClass('modal-promo--open');
    });

    $('body').on('click', '.submit-add__btn', function(event) {
        event.preventDefault();
        $(".modal-feedback").addClass("modal-feedback--open")
        $(".modal-feedback").removeClass('modal-feedback--send-ok');
    });

    $('body').on('click', '.modal-overlay,.modal-feedback__modal-window>.close-btn,.modal-promo__modal-window>.close-btn', function(event) {
        $(".modal-feedback").removeClass('modal-feedback--open');
        $(".modal-feedback").removeClass('modal-feedback--send-ok');
        $(".modal-promo").removeClass('modal-promo--open');
    });

    $('body').on('click', '.modal-feedback__submit-btn', function(event) {
        $(".modal-feedback").addClass('modal-feedback--send-ok');
    });

    // при отправке формы из header страниц услуг появляется форма с текстом успешной отправки заявки
    $('body').on('click', '.page-form__send-btn', function(event) {
        $(".modal-feedback").addClass('modal-feedback--open');
        $(".modal-feedback").addClass('modal-feedback--send-ok');
    });

    // основное меню страниц услуг
    $('body').on('click', '.page-content__item-menu > a', function(event) {
        event.preventDefault();
        $(".page-content__submenu").removeClass('page-content__submenu--open');
        $(this).next().addClass('page-content__submenu--open');
    });

    // переключение меню подуслуг и открытие соответствующей вкладки с ценами услуги
    // $('body').on('click','.prices__slide-nav a', function(event) {
    //     event.preventDefault();
    //     var tab = $(this).attr('href');
    //     $(".item-active").removeClass('item-active');
    //     $(this).addClass('item-active');
    //     $('.prices__single-partition,.prices__service-sections').removeClass('prices__service-show');
    //     $('.prices__single-partition,.prices__service-sections.'+tab).addClass('prices__service-show');
    // });

    $('body').on('click', '.prices__slide-nav a', function(event) {
        event.preventDefault();
        $(".item-active").removeClass('item-active');
        $('.prices__service-tab').removeClass('prices__service-show');
        $(this).addClass('item-active');
        var index = $('.prices__slide-nav a').index($('.item-active'));
        $('.prices__service-tab:eq(' + index + ')').addClass('prices__service-show');
    });

    // развернуть-свернуть содержание цены в подуслуге
    $('body').on('click', '.prices__service-section', function(event) {
        event.preventDefault();
        $(this).toggleClass('prices__service-section--active');
    });

    // owl carousel

    $('.promo-slider__slides').owlCarousel({
        items: 1,
        nav: true,
        navText: ['', '']
    });

    $('.reviews__slide-container').owlCarousel({
        items: 2,
        nav: false,
        navText: ['', '']
    });
    var teamElements = document.querySelectorAll('.team__worker');

    if (teamElements.length > 4) {
        $(".team__inner-container").addClass('owl-carousel');
        $('.team__inner-container').owlCarousel({
            items: 4,
            nav: true,
            margin: 31,
            navText: ['', '']
        });
    };

    // яндекс карта
    ymaps.ready(init);

    function init() {

        var myMap;

        myMap = new ymaps.Map("map", {
            center: [59.976833, 30.340160],
            zoom: 17,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([59.976833, 30.340160], {
            hintContent: 'Литовская улица, 1к2'
        });

        myMap.geoObjects.add(myPlacemark);

        $('body').on('click', '.contacts__info-item--address', function(event) {
            event.preventDefault();
            myMap.setCenter([59.976833, 30.340160], 17);
        });

    }

});

//mgsz

document.addEventListener("DOMContentLoaded", ready);

function ready() {

    var modalOpenLink = document.querySelectorAll(".modal-call");
    var modal = document.querySelector(".application-modal");
    var modalCloseBtn = document.querySelector("#close-btn");
    var modalOverlay = document.querySelector(".application-modal__overlay");
    var submenuLink = document.querySelectorAll(".parent-item > a");

    if (modalOpenLink) {
        for (var i = 0; i < modalOpenLink.length; i++) {
            modalOpenLink[i].addEventListener("click", function(event) {
                event.preventDefault();
                modal.classList.toggle("application-modal-show");
            });
        }
    };

    modalCloseBtn.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("application-modal-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (modal.classList.contains("application-modal-show")) {
                modal.classList.remove("application-modal-show");
            }
        }
    });

    modalOverlay.addEventListener("click", function() {
        modal.classList.remove("application-modal-show");
    });

    if (document.body.clientWidth < 800) {
        var closeBtn = document.querySelector(".expand-menu");
        var menuItem = document.querySelectorAll(".art-vmenu > li");

        var closeOtherSubmenu = function() {
            for (var a = 0; a < submenuLink.length; a++) {
                submenuLink[a].parentNode.classList.remove("select", "select-custom");
            };
        };


        for (var i = 0; i < submenuLink.length; i++) {
            submenuLink[i].addEventListener("click", function(event) {
                if (!this.parentNode.classList.contains("select-custom")) {
                    event.preventDefault();
                    closeOtherSubmenu();
                    this.parentNode.classList.add("select", "select-custom");
                }

            });
        }
        jQuery(document).ready(function() {
            jQuery(document).mouseup(function(e) {
                var submenuLink = jQuery(".parent-item > a");
                if (submenuLink.has(e.target).length === 0) {
                    jQuery(submenuLink).parent().removeClass('select');
                }
            })
        })

        for (l = 1; l < menuItem.length; l++) {
            menuItem[l].classList.toggle("item-hidden");
        }
        closeBtn.addEventListener("click", function() {
            closeBtn.classList.toggle("expand-menu--close");
            for (l = 1; l < menuItem.length; l++) {
                menuItem[l].classList.toggle("item-hidden");
            };
        });

        if (document.body.clientHeight > 1900) {
            jQuery(window).scroll(function() {
                if (jQuery(window).scrollTop() > 1300) {
                    jQuery(".fast-interaction").addClass("fixed")
                } else {
                    jQuery(".fast-interaction").removeClass("fixed")
                }
            })
        };
    };

    if (document.body.clientWidth > 800) {
        if (document.body.clientHeight > 1900) {
            jQuery(window).scroll(function() {
                if (jQuery(window).scrollTop() > 400) {
                    jQuery(".fast-interaction").addClass("fixed")
                } else {
                    jQuery(".fast-interaction").removeClass("fixed")
                }
            })
        };
    };
};

var compareRandom = function () {
  return Math.random() > 0.5;
};

сортировка в случайном порядке
*переменная*.sort(compareRandom);
