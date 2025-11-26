$(document).ready(function () {
    // a) Animáció indítása
    $('#startanim').on('click', function () {
        $('#box')
            .css({
                'position': 'relative',
                'left': '300px',
                'width': '300px',
                'fontSize': '12pt',
                'opacity': '1'
            })
            .animate({
                left: '600px',
                width: '500px',
                fontSize: '30pt'
            }, 1000)
            .animate({
                top: '200px',
                width: '200px',
                height: '+=10%'
            }, 1000)
            .animate({
                left: '300px',
                top: '0px',
                opacity: '0.4'
            }, 1000)
            .animate({
                width: '300px',
                fontSize: '12pt',
                height: '',
                opacity: '1'
            }, 1000, function () {
                alert('VÉGE');
            });
    });

    // b) Bekezdések elrejtése
    $('#elrejt').on('click', function () {
        $('p:not(#box)').hide();
        $('#box').css({
            'position': 'relative',
            'top': '0',
            'left': '0',
            'margin-top': '20px'
        });
        alert('Bekezdések elrejtése');
    });

    // c) Összecsuk/Kinyit
    let isCollapsed = false;
    $('#kibekapcs').on('click', function () {
        if (!isCollapsed) {
            // Összecsukás
            $('#box')
                .animate({
                    height: '0',
                    padding: '0'
                }, 500)
                .animate({
                    left: '600px'
                }, 500);
        } else {
            // Kinyitás
            $('#box')
                .animate({
                    left: '0'
                }, 500)
                .animate({
                    height: '',
                    padding: '20px'
                }, 500);
        }
        isCollapsed = !isCollapsed;
    });
});