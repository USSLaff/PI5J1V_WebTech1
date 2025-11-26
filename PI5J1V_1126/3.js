$(document).ready(function () {
    $('h1').on('mouseleave', function () {
        alert('Az egeret elhúztad a fejléc szövegről!');
    });

    $('p:first .click-hide').on('click', function () {
        $('p:first').hide();
    });

    $('p:eq(1) .dblclick-hide').on('dblclick', function () {
        $('p:eq(1)').hide();
    });

    $('button').on('mouseenter', function () {
        alert('Információ: A gombra kattintva jelentkezhetsz!');
    });

    $('input').on('mouseenter', function () {
        $(this).css('border-color', 'red');
    }).on('mouseleave', function () {
        $(this).css('border-color', '');
    });

    $('input').on('click', function () {
        $(this).css('background-color', 'lightyellow');
    });
});