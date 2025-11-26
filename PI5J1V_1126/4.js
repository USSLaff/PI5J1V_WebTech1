$(document).ready(function () {
    // 1. Úrlap feletti gombok - bekezdések kezelése
    $('#elrejt').on('click', function () {
        $('p:lt(3)').hide(); // Az első 3 bekezdés (0,1,2 indexű)
    });

    $('#megjelenit').on('click', function () {
        $('p:lt(3)').show();
    });

    $('#kibekapcs').on('click', function () {
        $('p:lt(3)').toggle();
    });

    // 2. Úrlap alatti gombok - űrlap kezelése
    $('#attetszo1').on('click', function () {
        $('form').css('opacity', '0.1');
    });

    $('#attetszo2').on('click', function () {
        $('form').css('opacity', '0.5');
    });

    $('#attetszo3').on('click', function () {
        $('form').css('opacity', '0.8');
    });

    $('#elrejt2').on('click', function () {
        $('form').hide();
    });

    $('#megjelenit2').on('click', function () {
        $('form').show();
    });

    $('#kibekapcs2').on('click', function () {
        $('form').toggle();
    });
});