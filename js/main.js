
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
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: 'dots-dark',
    responsive: [
      { 
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      { 
        breakpoint: 700,
        settings:  {
          slidesToShow: 2,
        }
      },

      { 
        breakpoint: 450,
        settings:  {
          slidesToShow: 1
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
    if(targetIsMenuOrButton && window.innerWidth < itaLanding.mobileMenuBreakpoint) {
      itaLanding.hideMenu();
      itaLanding.toggleButton.removeClass('open');
    }
  })
  itaLanding.stickyHeader = $('.sticky-header');
  itaLanding.minHeightForScroll = window.outerHeight-10;

  itaLanding.toggleStickyMenu = function(e) {
    var isScrollEnough = window.pageYOffset > itaLanding.minHeightForScroll;
    if(isScrollEnough) {
      itaLanding.stickyHeader.hide().addClass('sticked').show();
    } else {
      itaLanding.stickyHeader.removeClass('sticked');
    }
  }
  itaLanding.didScroll = false;
  itaLanding.toggleStickyHeader = function() {
    itaLanding.didScroll = true;
    itaLanding.toggleStickyMenu();

  }
  window.onscroll = itaLanding.toggleStickyHeader;
 
  // debounce scroll event
  setInterval(function() {
    if(itaLanding.didScroll) {
      itaLanding.didScroll = false;
    }
  }, 100);


  // Modal
  itaLanding.orderModal = $('.modal');
  itaLanding.modalToggler = $('[data-toggle="modal"]');
  itaLanding.modalToggler.click(function(e){
    e.preventDefault();
    // if(itaLanding.orderModal.is(':visible')){
      itaLanding.orderModal.fadeToggle();
      $('body').toggleClass('is-modal-open');
    // }
  })

  //file upload
  itaLanding.showFormSuccess = function(){
    $('.modal-title h2').html("Thank you!<br/> We'll contact you soon!");
    $('#request_project').hide();
    setTimeout(function(e){
      $('.modal-title h2').html("Оrder one more project");
      document.getElementById("request_project").reset();
      $('#request_project').fadeIn(300);
    }, 3000);
  }
  itaLanding.showFormError = function(){
    $('.modal-title h2').html("Something went wrong, please try again");
    $('#file-name').html("");

  }
  $('#file_input').on('change', function(e){
    $('#file-name').html(this.files[0].name);
  });

  document.getElementById('request_project').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var name = document.getElementById('name').value;
    var phone_or_email = document.getElementById('phone_or_email').value;
    var about_project = document.getElementById('about_project').value;
    var file = document.getElementById('file_input').files[0];

    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone_or_email', phone_or_email);
    formData.append('about_project', about_project);
    formData.append('file', file);

    fetch('http://5vw7lo.on.it-attractor.com/send', {
      method: 'POST',
      body: formData
    }).then(function (value) { 
      itaLanding.showFormSuccess();
    }).catch(function (reason) { 
      itaLanding.showFormError();
    })
  })

});

// 















