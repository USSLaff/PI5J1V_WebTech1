$(document).ready(function () {
    // Gombra kattintás eseménykezelő
    $('#hideButton').click(function () {
        $('p').hide(); // Elrejti az összes bekezdést
    });

    // Linkre kattintás eseménykezelő
    $('#meLink').click(function () {
        // A link alapértelmezetten megnyitja a weboldalt
        // További műveletek is hozzáadhatók itt
        console.log('A Miskolci Egyetem weboldala megnyílik');
    });
});