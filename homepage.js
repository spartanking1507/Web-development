/**
 * Created by MHM4L on 06/07/2017.
 */


function main() {

   // $('#homepage-title').hide();
    $('#title-leftside').hide();
    $('#title-rightside').hide();
    $('#navigation-links').hide();
    $('p').hide();

    $("#games-link").on('click', function(){
        $('.gameslist').hide();
        $('.gameslist').fadeIn(2000);
    });
    $('#homepage-title').fadeIn(2000);
    $('#title-leftside').fadeIn(2000);
    $('#title-rightside').fadeIn(2000);
    $('#navigation-links').fadeIn(2000);
    $('p').slideDown(2000);


}
//alert('Welcome!');

$(document).ready(main);