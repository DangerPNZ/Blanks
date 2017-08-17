// Подключить jquery!!!

// Применить после готовности документа
$(document).ready(function() {

})

// Добавляем класс при скролле (Тут 2 примера!)
$(window).scroll(function() {

    if ($(window).scrollTop() > header_height) {
        $("header .header-block").addClass("fixed")
    } else {
        $("header .header-block").removeClass("fixed")
    }

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
