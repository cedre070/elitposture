$(document).ready(function(){



  $('#logo').hover(function(){
    $(this).addClass('animated pulse');
  },
  function(){
  $( this ).removeClass('animated pulse');
  });




   var scroll_start = 0;
   var startchange = $('body');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navigation').css('background-color', 'rgba(0, 0, 0, 0.3)');
          $('#navigation').css('margin-top', '30px');
          $('#logo').css('width', '75%');
          $('#logo').css('padding-bottom', '15px');
          $('.navig').css('padding-top', '23px');

       } else {
          $('#navigation').css('background-color', 'transparent');
          $('#logo').css('width', '160px');
          $('#navigation').css('margin-top', '0px');
       }
   });









});
