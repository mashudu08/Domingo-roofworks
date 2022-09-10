$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 100);
  }
  );

//Animation script

$(function() {
  var $window = $(window), win_height_padded = $window.height() * 1.1, isTouch = Modennizer.touch;
  if(isTouch){
    $('.revealOnScroll').addClass('animated');
  }
  $window.on('scroll', revealOnScroll);
  function revealOnScroll(){
    var scrolled = $window.scrollTop(), win_height_padded = $window.height() * 1.1;
    $('.revealOnScroll:not(.animated)').each(function(){
      var $this = $(this), offsetTop = $this.offset().top;
      if(scrolled + win_height_padded > offsetTop){
        if($this.data('timeout')){
          window.setTimeout(function() {
            $this.addClass('animated ' + $this.data('animation'));
          },parseInt($this.data("timeout"),10));
        }else{
          $this.addClass('animated '+$this.data('animation'));
        }
      }
    });
    $('revealOnScroll.aninamted').each(function (index){
      var $this = $(this), offsetTop = $this.offset().top;
      if(scrolled + win_height_padded < offsetTop){
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }
  revealOnScroll();
});