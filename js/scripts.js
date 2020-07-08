$(document).ready(function(){
    /* Валидаця формы */
    $('#brif-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                phoneRU:true
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Еще {0} символов!")
            },
            phone: "Укажите телефонный номер"
        },
    });
    
    /* скрипт слайдера */
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),

        responsive: [
{
  breakpoint: 1200,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
},
]

    });
    
});
$('#offer-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            $('.success').html(data +',Ваша форма отправлена');
        },
        error: function(jqXHR, textStatus){
            console.log(jqXHR + ':' + textStatus);
        }
    });
});
