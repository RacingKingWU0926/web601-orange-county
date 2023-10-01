$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightboxToggle img').click(function(){

        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.lightbox').fadeIn();

        // If lightbox has an image, clean it first
        if ($('.lightbox').contents('img')) {
            $('.lightbox').contents().remove('img');
        };

        var clickedImage = $(this).clone();
        $('.lightbox').append(clickedImage);
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.lightbox').fadeOut();
    });

});
