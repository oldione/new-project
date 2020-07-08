$(document).ready(function(){
    var button = $('#callme');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    })

    $(function(){
        $(window).scroll(function(){
          if($(document).scrollTop()>$(window).height()){
            $('.scrolltotop').show();
        }else{
            $('.scrolltotop').hide();
        }
      });
      $('.scrolltotop').click(function(){
          $('html,body').animate({scrollTop: 0}, 1000);
      });
    });
});