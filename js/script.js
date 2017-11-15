var BS = {
    config : {

    },  
    init : function() { 

        var $cache = {
            body:           $('body'),
            navigation:     $("#primary-navigation"),
            header:         $("#site-header"),
            content:        $('#s4-workspace'),
            footer:         $('#site-footer')
        };

        $('html').removeClass('no-js').addClass('js');

		$('.js-slideshow-homepage-intro').slick({
            fade: true,
            cssEase: 'ease-in-out'  ,
            autoplay: true,
            autoplaySpeed: 5000          
        });
		
		$('.js-slideshow-testimonials').slick({
            dots : true,
            arrows : false,
            autoplay: true,
            autoplaySpeed: 5000
        }); 

        // Scroll Events
		// -----------------------------------------------------------
        
        // Set inital page scroll location
        scrollPanels();

        // Update on page scroll
        $(window).scroll(function () {
            scrollPanels();
        });

        function scrollPanels() {
            // Fixed Navigation bar
            var scrollposition = $(window).scrollTop();

            if (scrollposition > 300 / 2) {
                $cache.body.addClass('has-reduced-menu');
            } else {
                $cache.body.removeClass('has-reduced-menu');
            }
        }

        // Mobile Flyout menu
        // -----------------------------------------------------------
        var menulevel = 1;
        $('#site-navigation').on('click', '.js-has-children', function () {
            var $el = $(this),
                $parent = $el.parent('li');

            menulevel++;
            $parent.addClass('is-expanded');
            $cache.navigation.attr('data-menu', menulevel);

            return false;
        });

        $('#site-navigation').on('click', '.js-menu-back', function () {
            var $el = $(this),
                $parent = $el.parent('li');

            menulevel--;
            $parent.removeClass('is-expanded');
            $cache.navigation.attr('data-menu', menulevel);

            return false;
        });

        
    }
};


$(document).ready(BS.init());