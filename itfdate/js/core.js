$(document).ready(function() {

    $('#datepicker-example1').ITFS();

    $('#datepicker-example2').ITFS({
        direction: 1    // boolean true would've made the date picker future only
                        // but starting from today, rather than tomorrow
    });

    $('#datepicker-example3').ITFS({
        direction: true,
        disabled_dates: ['* * * 0,6']   // all days, all monts, all years as long
                                        // as the weekday is 0 or 6 (Sunday or Saturday)
    });

    $('#datepicker-example4').ITFS({
        direction: [1, 10]
    });

    $('#datepicker-example5').ITFS({
        // remember that the way you write down dates
        // depends on the value of the "format" property!
        direction: ['2012-08-01', '2012-08-12']
    });

    $('#datepicker-example6').ITFS({
        // remember that the way you write down dates
        // depends on the value of the "format" property!
        direction: ['2012-08-01', false]
    });

    $('#datepicker-example7-start').ITFS({
        direction: true,
        pair: $('#datepicker-example7-end')
    });

    $('#datepicker-example7-end').ITFS({
        direction: 1
    });

    $('#datepicker-example8').ITFS({
        format: 'M d, Y'
    });

    $('#datepicker-example9').ITFS({
        show_week_number: 'Wk'
    });

    $('#datepicker-example10').ITFS({
        view: 'years'
    });

    $('#datepicker-example11').ITFS({
        format: 'm Y'
    });

    $('#datepicker-example12').ITFS({
        onChange: function(view, elements) {
            if (view == 'days') {
                elements.each(function() {
                    if ($(this).data('date').match(/\-24$/))
                        $(this).css({
                            background: '#C40000',
                            color:      '#FFF'
                        });
                });
            }
        }
    });

    $('#datepicker-example13').ITFS({
        always_visible: $('#container')
    });

    $('#datepicker-example14').ITFS();

});
