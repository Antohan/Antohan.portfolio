/*Плавный скролл страницы*/
        $(".select__floor").on("click","a", function (event) {
        	//отменяем стандартную обработку нажатия по ссылке
        	event.preventDefault();
        	//забираем идентификатор бока с атрибута href
        	var id  = $(this).attr('href'),
        	//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        	//анимируем переход на расстояние - top за 1000 мс
        	$('body,html').animate({scrollTop: top}, 1000);
		});
        $(".select__apartament").on("click","a", function (event) {
        	//отменяем стандартную обработку нажатия по ссылке
        	event.preventDefault();
        	//забираем идентификатор бока с атрибута href
        	var id  = $(this).attr('href'),
        	//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        	//анимируем переход на расстояние - top за 1000 мс
        	$('body,html').animate({scrollTop: top}, 1000);
		});
        $(".btn__wrapper").on("click","button", function (event) {
        	//отменяем стандартную обработку нажатия по ссылке
        	event.preventDefault();
        	//забираем идентификатор бока с атрибута href
        	var id  = $(this).attr('href'),
        	//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        	//анимируем переход на расстояние - top за 1000 мс
        	$('body,html').animate({scrollTop: top}, 1000);
		});