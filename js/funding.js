$(document).ready(function(){
    $(".fancybox").fancybox();
   
        
    jQuery(function($){
     $(".user-phone").mask("+7 (999) 999-99-99");
   });

      $('.search-img').click(function(e) {
      $('.search').toggleClass('search-active');
     });
      
      $(function(){
        $('ul li a[href^="#"]').on('click', function(event) {
          event.preventDefault();
          var sc = $(this).attr("href"),
              dn = $(sc).offset().top;
          $('html, body').animate({scrollTop: dn}, 1000);
        });
      });

      
      $('.open-mform').click(function(e) {
         $('#modal-form-phone').fadeIn();
      });

      $('.application-btn').click(function(e) {
         $('#modal-form-application').fadeIn();
      });


       $('.popup-close').click(function(e){
      e.preventDefault();
      $(this).parents('.popup').fadeOut();
    });


       
       $('#form-callback').validate({
        rules:{
          name:{
            required: true,
            minlength:4
          },
          phone:{
            required: true,
            minlength:10
          },
          checkOne:{
            required: true,
            minlength:4,
            
          },
          checkTwo:{
            required: true,
            minlength:4,
            
          }
        },
        messages:{
          name:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов'
          },
          phone:{
            required: 'Заполните поле',
            minlength:'Введите номер'
          },
          checkOne:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов',
            
          },
          checkTwo:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов',
            
          }
        }
      });

      $('#forms-btn').click(function(e){
        if (!$(this).closest('#form-callback').valid() ){
          e.preventDefault();
        }
      });
      $('#form-callback').submit(function(event) {

        event.preventDefault();

        var msg = $('#form-callback').serialize();
        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: msg,
          success: function(data) {
            $('#modal-thank').fadeIn();
            $('#form-callback')[0].reset();
          },
          error: function(xhr, str){
            $('#modal-thank').fadeIn();
          }
        });
      });

      
      $('#form-application').validate({
        rules:{
          name:{
            required: true,
            minlength:4
          },
          phone:{
            required: true,
            minlength:10
          },
          checkOne:{
            required: true,
            minlength:4,
            
          },
          checkTwo:{
            required: true,
            minlength:4,
            
          }
        },
        messages:{
          name:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов'
          },
          phone:{
            required: 'Заполните поле',
            minlength:'Введите номер'
          },
          checkOne:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов',
            
          },
          checkTwo:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов',
            
          }
        }
      });

      $('#application-modal-btn').click(function(e){
        if (!$(this).closest('#form-application').valid() ){
          e.preventDefault();
        }
      });
      $('#form-application').submit(function(event) {

        event.preventDefault();

        var msg = $('#form-application').serialize();
        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: msg,
          success: function(data) {
            $('#modal-form-application').fadeOut();
            $('#modal-thank').fadeIn();
            $('#form-application')[0].reset();
          },
          error: function(xhr, str){
            $('#modal-form-application').fadeOut();
            $('#modal-thank').fadeIn();
          }
        });
      });

     
      $('#form-phone').validate({
        rules:{
          name:{
            required: true,
            minlength:4
          },
          phone:{
            required: true,
            minlength:10
          }
        },
        messages:{
          name:{
            required: 'Заполните поле',
            minlength:'Не менее 4 символов'
          },
          phone:{
            required: 'Заполните поле',
            minlength:'Введите номер'
          }
        }
      });

      $('#form-phone-btn').click(function(e){
        if (!$(this).closest('#form-phone').valid() ){
          e.preventDefault();
        }
      });
      $('#form-phone').submit(function(event) {

        event.preventDefault();

        var msg = $('#form-phone').serialize();
        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: msg,
          success: function(data) {
            $('#modal-form-phone').fadeOut();
            $('#modal-thank').fadeIn();
            $('#form-phone')[0].reset();
          },
          error: function(xhr, str){
            $('#modal-form-phone').fadeOut();
            $('#modal-thank').fadeIn();
          }
        });
      });

     
       $('.internal-btn-list').click(function(e) {
         $('.internal__wrap-list ul').toggle();
       });

       
         $('#internal-form-feedback').validate({
          rules:{
            name:{
              required: true,
              minlength:4
            },
            
            nameTwo:{
              required: true,
              minlength:4,
              
            },
            text:{
              required: true,
              minlength:1,
              
            }
          },
          messages:{
            name:{
              required: 'Заполните поле',
              minlength:'Не менее 4 символов'
            },
            
            nameTwo:{
              required: 'Заполните поле',
              minlength:'Не менее 4 символов',
              
            },
            text:{
              required: 'Заполните поле',
              minlength:'Не менее 1 символ',
              
            }
          }
        });

        $('#internal-btn').click(function(e){
          if (!$(this).closest('#internal-form-feedback').valid() ){
            e.preventDefault();
          }
        });
        $('#internal-form-feedback').submit(function(event) {

          event.preventDefault();

          var msg = $('#internal-form-feedback').serialize();
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: msg,
            success: function(data) {
              $('#modal-feedback').fadeIn();
              $('#internal-form-feedback')[0].reset();
            },
            error: function(xhr, str){
              $('#modal-feedback').fadeIn();
            }
          });
         
        });
    
 
})