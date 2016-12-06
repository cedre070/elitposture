$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('header');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navigation').css('background-color', 'rgba(0, 0, 0, 0.3)');
          $('#logo').css('width', '30%');
          $('.navig').css('padding-top', '35px');
          $('#logo').css('padding-bottom', '20px');
       } else {
          $('#navigation').css('background-color', 'transparent');
          $('#logo').css('width', '160px');
       }
   });
});
