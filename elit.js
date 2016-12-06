$(document).ready(function(){




   var scroll_start = 0;
   var startchange = $('header');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('header').css('background-color', '#f0f0f0');
       } else {
          $('#navigation').css('background-color', 'transparent');
       }
   });
 });
