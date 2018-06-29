$(document).ready(function(){
var isDesktop = false,
isTablet = false,
isMobile = false;	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        if( myWidth > 1179 ){
            isDesktop = true;
            isTablet = false;
            isMobile = false;
        }else if( myWidth > 767 ){
            isDesktop = false;
            isTablet = true;
            isMobile = false;
        }else{
            isDesktop = false;
            isTablet = false;
            isMobile = true;
        }
        if (isMobile && !$( "#advantages" ).hasClass( "slick-initialized" )) {
        bRightSlick();
    }
    }
    $(window).resize(resize);
    resize();
    // $(window).resize(function() {
    //     if (!isMobile) {
    //         $('.b-right').slick('unslick');
    //     }
    //     else{
    //         bRightSlick();
    //     }
    // });
    partnersSlick();
    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 300,
      'tolerance': 70,
      'side': 'right',
      'touch': false
    }); 
$('#menu').css('opacity','1');
    function close(eve) {
    eve.preventDefault();
    slideout.close();
    }
    slideout
        .on('beforeopen', function() {
          $(" #panel ").addClass("panel-open");
        })
        .on('open', function() {
           this.panel.addEventListener('click', close);
        })
        .on('beforeclose', function() {
          $(" #panel ").removeClass("panel-open");
          this.panel.removeEventListener('click', close);
        });
    slideout.once('open', slideout._initTouchEvents);
    slideout.on('open', slideout.enableTouch);
    slideout.on('close', slideout.disableTouch);
    document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
    });
    function bRightSlick() {
        $( " .b-right " ).slick({
                infinite: true,
                speed: 500,
                slidesToScroll: 1,
                touchThreshold: 100,
                arrows: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 10000,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 768,
                        settings:{
                            infinite: true,
                            speed: 500,
                            slidesToScroll: 1,
                            touchThreshold: 100,
                            arrows: true,
                            dots: true 
                        }
                    }
                ]

        });  
    }
    function partnersSlick() {
        $( " .b-partners " ).slick({
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 4,
            touchThreshold: 100,
            arrows: true,
            dots: true,
            responsive: [
        {
          breakpoint: 1024,
          settings: {
             dots: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
             dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
             dots: false,
            slidesToShow: 1
          }
        }
      ]
        });

    }
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

});