/*Отображение доступных квартир в зависимости от подъезда и этажа*/
        $('.piking').on('click', 'button', function() {
            var ent = $('#entrance option:selected').val();
            var flo = $('#floor option:selected').val();
            if ((ent == 'first') && (flo == '1')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').removeClass('vision');
                $('.kv262').addClass('vision').attr('key','4');
                $('.kv401').addClass('vision').attr('key','2');
            }
            if ((ent == 'first') && (flo == '2')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '7');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').removeClass('vision');
            }
            if ((ent == 'first') && (flo == '3')){
                $('.kv610').removeClass('vision');
                $('.kv538').addClass('vision').attr('key', '17');
                $('.kv429').addClass('vision').attr('key', '13');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').removeClass('vision');
            }
            if ((ent == 'first') && (flo == '4')){
                $('.kv610').addClass('vision').attr('key', '18');
                $('.kv538').addClass('vision').attr('key', '23');
                $('.kv429').addClass('vision').attr('key', '19');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '22');
            }
            if ((ent == 'first') && (flo == '5')){
                $('.kv610').addClass('vision').attr('key', '24');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '25');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '28');
            }
            if ((ent == 'first') && (flo == '6')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '31');
                $('.kv264').addClass('vision').attr('key', '32');
                $('.kv262').addClass('vision').attr('key', '33');
                $('.kv401').addClass('vision').attr('key', '34');
            }
            if ((ent == 'first') && (flo == '7')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '37');
                $('.kv264').addClass('vision').attr('key', '38');
                $('.kv262').addClass('vision').attr('key', '39');
                $('.kv401').addClass('vision').attr('key', '40');
            }
            if ((ent == 'first') && (flo == '8')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '43');
                $('.kv264').addClass('vision').attr('key', '44');
                $('.kv262').addClass('vision').attr('key', '45');
                $('.kv401').addClass('vision').attr('key', '46');
            }
            if ((ent == 'first') && (flo == '9')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '49');
                $('.kv264').addClass('vision').attr('key', '50');
                $('.kv262').addClass('vision').attr('key', '51');
                $('.kv401').addClass('vision').attr('key', '52');
            }
            if ((ent == 'first') && (flo == '10')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '55');
                $('.kv264').addClass('vision').attr('key', '56');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '58');
            }
            if ((ent == 'first') && (flo == '11')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '61');
                $('.kv264').addClass('vision').attr('key', '62');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '64');
            }
            if ((ent == 'first') && (flo == '12')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '67');
                $('.kv264').addClass('vision').attr('key', '68');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '70');
            }
            if ((ent == 'first') && (flo == '13')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '74');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '76');
            }
            if ((ent == 'first') && (flo == '14')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '79');
                $('.kv264').addClass('vision').attr('key', '80');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '82');
            }
            if ((ent == 'first') && (flo == '15')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '85');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '88');
            }
            if ((ent == 'first') && (flo == '16')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '94');
            }
            if ((ent == 'second') && (flo == '9')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '144');
                $('.kv262').addClass('vision').attr('key', '145');
                $('.kv401').addClass('vision').attr('key', '146');
            }
            if ((ent == 'second') && (flo == '10')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '150');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '152');
            }
            if ((ent == 'second') && (flo == '11')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '156');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '158');
            }
            if ((ent == 'second') && (flo == '12')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '162');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '164');
            }
            if ((ent == 'second') && (flo == '13')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '167');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '170');
            }
            if ((ent == 'second') && (flo == '14')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '176');
            }
            if ((ent == 'second') && (flo == '15')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '179');
                $('.kv264').removeClass('vision');
                $('.kv262').removeClass('vision');
                $('.kv401').removeClass('vision');
            }
            if ((ent == 'third') && (flo == '5')){
                $('.kv610').removeClass('vision');
                $('.kv538').addClass('vision').attr('key', '218');
                $('.kv429').addClass('vision').attr('key', '214');
                $('.kv264').addClass('vision').attr('key', '215');
                $('.kv262').removeClass('vision');
                $('.kv401').addClass('vision').attr('key', '217');
            }
            if ((ent == 'third') && (flo == '6')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').addClass('vision').attr('key', '220');
                $('.kv264').addClass('vision').attr('key', '221');
                $('.kv262').addClass('vision').attr('key', '222');
                $('.kv401').addClass('vision').attr('key', '223');
            }
            if ((ent == 'third') && (flo == '7')){
                $('.kv610').removeClass('vision');
                $('.kv538').removeClass('vision');
                $('.kv429').removeClass('vision');
                $('.kv264').addClass('vision').attr('key', '227');
                $('.kv262').addClass('vision').attr('key', '228');
                $('.kv401').addClass('vision').attr('key', '229');
            }
        });