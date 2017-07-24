$( document ).ready(function() {
  var mainbottom = $('header').offset().top + $('header').height();
  $(window).scroll(function() { // check if scroll event happened
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) { // check if user scrolled more than 50 from top of the browser window
      $("nav").show(); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $("nav").hide();
      //css("background-color", "transparent"); // if not, change it back to transparent
    }
  });

  var menu_holder =  $('.navbar-nav');
 var section_elements =  $('section');
 $(window).on('scroll', function() { // check if scroll event happened
   var scrollTop = $(window).scrollTop();
   menu_holder.find('a').removeClass('active');
   $(section_elements.get().reverse()).each(function() {
     if($(this).position().top < scrollTop) {
       var link =  menu_holder.find('[href="#' + $(this).attr('id') + '"]');
       link.addClass('active');
       return false;
     }
   })
 });
});
