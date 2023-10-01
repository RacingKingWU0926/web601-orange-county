$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightboxToggle img').click(function(){

        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.lightbox').fadeIn();
    });

        //Check if lightbox has an image
    //     if ($('.lightbox').contents('img')) {
    //         $('.lightbox').contents().remove('img');
    //     }

    //     //Get text content in attribute
    //     var altvalue = $(this).attr('alt');
    //     console.log(altvalue);

    //     if (altvalue=="Ocean Front") {
    //         var img = $('#album:nth-child(1) .imageContainer .figure img').clone(); //Duplicate DOM element
    //         $('.lightbox').append(img); //Insert duplicated element in another element
    //     }
    // });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.lightbox').fadeOut();
    });

});
