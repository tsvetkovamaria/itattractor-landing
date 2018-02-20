$(document).ready(function(){
  // Main screen slider
  $('.presentation').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    mobileFirst: true,
    speed: 500,
    fade: true   
  });

  $('.technology-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-dark',
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      { 
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      { 
        breakpoint: 900,
        settings:  {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false
        }
      },
    ]
  });


  $('.portfolio-slider').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    variableWidth: true,
    dotsClass: 'dots-dark',
    mobileFirst: true,
    responsive: [
      { 
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      { 
        breakpoint: 900,
        settings:  {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
    ]
  })

  // mobile menu
  // make sure mobile menu is hidden on first appearance on mobile screens
  var itaLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 1000
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

  $(document).click(function(e) {
    var targetIsMenuOrButton = $(e.target).closest('.menu').length || !$(e.target).closest('.menu-toggle').length;
    if(targetIsMenuOrButton && window.outerWidth < itaLanding.mobileMenuBreakpoint) {
      itaLanding.hideMenu();
      itaLanding.toggleButton.removeClass('open');
    }
  })
  itaLanding.stickyHeader = $('.sticky-header');

  itaLanding.toggleStickyMenu = function(e) {
    var isScrollEnough = window.pageYOffset > (window.outerHeight-10);
    if(isScrollEnough) {
      itaLanding.stickyHeader.hide().addClass('sticked').show();
    } else {
      itaLanding.stickyHeader.removeClass('sticked');
    }
  }
  $(window).scroll(function(e){
    itaLanding.toggleStickyMenu();
  })
  itaLanding.toggleStickyMenu();

});
















