$(document).ready(() => {
    $('#btn').bind('click', () => {
        let value = $('#input').val();
        $('ol.result').append(`<li>${value}</li>`);
        $('#input').val('');
    });
})