var BS = {
    config : {

    },  
    init : function($) { 

        var $cache = {
            body:           $('body'),
            navigation:     $("#site-navigation"),
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


		// Toggle Navigation menu for mobile and Tablet portrait
		// -----------------------------------------------------------
		$cache.header.on('click', '.js-toggle-menu', function () {
			$cache.body.toggleClass('has-navigation-active');
			return false;
		});



		// Chat bar toggle button
		// -----------------------------------------------------------
        $cache.footer.on('click', '.js-show-callback-form', function () {
            $cache.footer.find('.js-call-me').removeAttr('hidden');
            $('.js-call-message').attr('hidden', true);

			event.preventDefault();
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
                $parent = $el.parents('li.level-1-item');
            
            menulevel--;
            $parent.removeClass('is-expanded');
            $cache.navigation.attr('data-menu', menulevel);

            return false;
        });


        // Accordian Menu
        // -----------------------------------------------------------
        $cache.content.on('click', '.js-accordion .accordion__title', function () {
            var $el = $(this),
                $parent = $el.parents('.accordion__item'),
                $siblings = $parent.siblings();

            $parent.toggleClass('is-active');
            $siblings.removeClass('is-active');

            return false;
        });

        // Tabs
        // -----------------------------------------------------------
        $cache.body.on('click', '.js-tab', function () {
            var $el = $(this),
                data = $el.data();

            $('[data-panel=' + data.tab + ']').addClass('is-active')
                .siblings('[data-panel]').removeClass('is-active');

            $el.addClass('is-active').parents().siblings().find('[data-tab]').removeClass('is-active');

            return false;
        });


    }
};


$(document).ready(BS.init(jQuery));