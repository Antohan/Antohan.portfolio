/*Изменение значений в селектах*/
        function main_change(item) {
            var val = $('#entrance option:selected').val(),
                selector = '#floor option[main-value=' + val + ']';
            $('#floor option').removeAttr('selected').hide();
            $(selector).show();
            if (typeof(item) !== 'string') {
                $(selector + ':first').attr('selected', 'selected');
            } else {
                var itemInt = parseInt(item, 10);
                $(selector + ':nth-child(' + itemInt + ')').attr('selected', 'selected');
            }
        }
        $(function() {
            $('#entrance').change(main_change);
            main_change(null);
        });
        $('a').click(function() {
            var getList = $(this).attr('get-entrance');
            $('#entrance option[value=' + getList + ']').prop('selected', 'true');
            var getItem = $(this).attr('get-floor');
            main_change(getItem);
        });