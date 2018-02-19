$(document).ready(function(){
  // Main screen slider
  $('.presentation').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    mobileFirst: true    
  });

  $('.technology-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-dark',
    modileFirst: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  // mobile menu
  // make sure mobile menu is hidden on first appearance on mobile screens
  var itaLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 900
  }
  itaLanding.hideMenu = function(e){
    itaLanding.mobileMenu.hide();
  }
  itaLanding.toggleMenu = function(e){
    itaLanding.mobileMenu.slideToggle(300);
  }
  itaLanding.showMenu = function(e) {
    itaLanding.mobileMenu.show();
  }
  itaLanding.toggleMenuOnWindowResize = function(e){
    if(window.innerWidth > itaLanding.mobileMenuBreakpoint) {
      itaLanding.showMenu();
      itaLanding.toggleButton.addClass('open');
    } else {
      itaLanding.hideMenu();
      itaLanding.toggleButton.removeClass('open');
    }
  }
  
  itaLanding.toggleMenuOnWindowResize();

  itaLanding.toggleButton.click(function(e) {
    e.preventDefault();
    itaLanding.toggleButton.toggleClass('open');
    itaLanding.toggleMenu();
  });

  $(window).resize(function(e){
    itaLanding.toggleMenuOnWindowResize();
  });
});