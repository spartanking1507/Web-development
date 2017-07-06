/**
 * Created by MHM4L on 06/07/2017.
 */

function main() {

    $("#gamecovers-link").on('click', function(){
        $('.game-covers').hide();
        $('.game-covers').fadeIn(2000);
    });


}

$(document).ready(main);