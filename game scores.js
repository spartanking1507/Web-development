/**
 * Created by MHM4L on 06/07/2017.
 */

function main() {

    $("#score-link").on('click', function(){
        $('.score-table').hide();
        $('.score-table').fadeIn(2000);
    });

}

$(document).ready(main);