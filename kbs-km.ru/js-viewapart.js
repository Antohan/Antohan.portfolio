/*Отображение конкретной квартиры*/ 

/*Отображение конкретной планировки*/
$('.select__apartament').on('click', 'a', function() {
    var clas = $(this).attr('kv');
    $('.' + clas).addClass('vision').siblings().removeClass('vision');
});

/*Фуекция, которая по заданному ключу (номер квартиры)
передает нужные значения в DOM*/
function getValue(array,keyText) {
    for(i = 0; i < array.length; i++){
        if(array[i].number == keyText) {
            $('#area').text(array[i].area);
            $('#rooms').text(array[i].rooms);
            $('#bathroom').text(array[i].bathroom);
            $('#decor').text(array[i].decor);
            $('#floornum').text(array[i].floor);
            $('#price').text(array[i].price);
        }
    }
}
/*При нажатии на планировку получаем нужный ключ (номер квартиры)
и передаем его в функцию*/
$('.select__apartament').on('click', 'a', function() {
    var key = $(this).attr('key');
    getValue(arr, key);
});