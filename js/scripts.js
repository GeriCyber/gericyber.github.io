
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        //Spanish automatic
        $('[lang="es"]').hide();
        var lang = 'en';

        /// If English is selected
        $("#btn-en").click(function() 
        {
            $('[lang="es"]').hide();
            $('[lang="en"]').show(); 
            lang = 'en';    
        });
        /// If Spanish is selected
        $("#btn-es").click(function() 
        {
            lang = 'es';
            $('[lang="en"]').hide();
            $('[lang="es"]').show();
        });

       /* Preloader */
		
        // $(window).load(function() {
        //   $('body').addClass('loaded');
        // });

        setTimeout(function(){ 
          $('body').addClass('loaded'); 
        }, 1000);


        /* Skills animation */

        $('.skill-per').each(function(){
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width",per+'%');
            $({animatedValue: 0}).animate({animatedValue: per},{
              duration: 3000,
              step: function(){
                $this.attr('per', Math.floor(this.animatedValue) + '%');
              },
              complete: function(){
                $this.attr('per', Math.floor(this.animatedValue) + '%');
              }
            });
          });

       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });

        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });

        /* Typed.js */
		
        $(window).load(function(){
        $(".typing-es").typed({
            strings: ["Diseño <mark>Web</mark>", "Desarrollo <mark>Web/Mobile</mark>", "Consultoría de <mark>Software</mark>"],   
            typeSpeed: 120,
            loop: true,
            loopCount: Infinity
          });
          $(".typing-en").typed({
            strings: ["Web <mark>Design</mark>", "Web/Mobile <mark>Development</mark>", "Software <mark>Consulting</mark>"],   
            typeSpeed: 120,
            loop: true,
            loopCount: Infinity
          });
         });
        
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();

        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
          gallery: { enabled: true },
			     zoom: { enabled: true,
			     duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }

          });

        /* Education Carousel/Slider */

        $(".education-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
            });

   })(jQuery);
