(function ($) {
    $(document).ready(function () {
        var wow = new WOW();

        setTimeout(function () {
            $('body').addClass('loaded');
            if ($('body').hasClass('loaded')) {
                wow.init();
            };
        }, 1000);

        $(window).on('scroll', function () {
            let position = $(this).scrollTop();
            let scrollLink = $('.scroll-to-top');


            if (position >= 150) {
                $('.nav').addClass('fixed-nav animated-nav');
                scrollLink.fadeIn(300);
            } else {
                $('.nav').removeClass('fixed-nav animated-nav');
                scrollLink.fadeOut(300);
            }

            if ($('.why-choose').length) {
                if (position > ($('.why-choose').offset().top - 400)) {
                    if ($('.bar').length) {
                        let progressBar = $('.count-bar');
                        progressBar.each(function () {
                            let progressItem = $(this);
                            let percentage = progressItem.data('percentage');
                            progressItem.css('width', percentage).addClass('counted');
                            if (progressItem.hasClass('counted')) {
                                $('.bar .count-text').css('opacity', 1);
                            }
                        });
                    }
                }
            }
        });

        $(window).one('scroll', function () {
            let position = $(this).scrollTop();

            if (position >= $('.know-percentages').scrollTop()) {
                if ($(".circle-progress").length) {

                    let circleProgress = $(".circle-progress");
                    circleProgress.each(function () {
                        let progress = $(this);
                        let progressOptions = progress.data("options");
                        progress.circleProgress(progressOptions);

                    });

                }
            }

        });

        $(".play-btn").each(function () {
            $(this).magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function (url) {
                                var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                                if (!m || !m[1]) return null;
                                return m[1];
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                    }
                }
            });
        })


        var customerCarousel = function () {
            if ($().owlCarousel) {
                $('.customer-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 30,
                        nav: true,
                        smartSpeed: 500,
                        autoHeight: false,
                        autoplay: true,
                        dots: false,
                        autoplayTimeout: 10000,
                        navText: [
                            '<i class="fal fa-long-arrow-left"></i>',
                            '<i class="fal fa-long-arrow-right"></i>',
                        ],
                        responsive: {
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 1,
                            },
                            800: {
                                items: 1,
                            },
                            1024: {
                                items: 1,
                            },
                            1200: {
                                items: 1.6,
                            },
                        },
                    });
                });
            }
        };

        var brandingOneCarousel = function () {
            if ($().owlCarousel) {
                $('.branding-one .branding-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        items: 6,
                        margin: 60,
                        navigation: false,
                        pagination: false,
                        autoWidth: true,
                        autoplay: false,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 2,
                                margin: 100,
                            },
                            1000: {
                                items: 5
                            }
                        }
                    });
                });
            }
        };
        var brandingCarousel = function () {
            if ($().owlCarousel) {
                $('.branding-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        items: 5,
                        margin: 140,
                        navigation: false,
                        autoWidth: true,
                        autoplay: false,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: 1,
                                center: true
                            },
                            600: {
                                items: 2,
                            },
                        }
                    });
                });
            }
        };

        var projectOneCarousel = function () {
            if ($().owlCarousel) {
                $('.project-one-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        items: 2,
                        stagePadding: 0,
                        loop: true,
                        margin: 30,
                        nav: false,
                        smartSpeed: 500,
                        autoHeight: false,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 10000,
                        autoWidth: true,
                        responsive: {
                            0: {
                                items: 1,
                                autoWidth: false,
                            },
                            600: {
                                items: 1,
                                autoWidth: false,
                            },
                            800: {
                                items: 1,
                            },
                            1024: {
                                items: 1,
                            },
                            1200: {
                                items: 1,
                            },
                        },
                    });
                });
            }
        };
        var projectTwoCarousel = function () {
            if ($().owlCarousel) {
                $('.project-two-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 30,
                        nav: false,
                        smartSpeed: 500,
                        autoHeight: false,
                        autoplay: true,
                        dots: true,
                        autoplayTimeout: 10000,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 1,
                            },
                            800: {
                                items: 2,
                            },
                            1024: {
                                items: 2,
                            },
                            1200: {
                                items: 4,
                            },
                        },
                    });
                });
            }
        };

        var homeCarousel = function () {
            if ($().owlCarousel) {
                $('.home-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        items: 1,
                        nav: true,
                        smartSpeed: 500,
                        autoHeight: false,
                        dots: true,
                        autoplayTimeout: 5000,
                        animateOut: 'fadeOut',
                        navText: [
                            '<i class="fal fa-long-arrow-left"></i>',
                            '<i class="fal fa-long-arrow-right"></i>',
                        ],
                        responsive: {
                            0: {
                                items: 1,
                                nav: false,
                            },
                            600: {
                                items: 1,
                                nav: false,
                            },
                            800: {
                                items: 1,
                                nav: true,

                            },
                            1024: {
                                items: 1,
                            },
                        },
                    });
                });

            }
        };

        var newsTwoCarousel = function () {
            if ($().owlCarousel) {
                $('.news-two .news-two-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 30,
                        nav: true,
                        smartSpeed: 500,
                        autoHeight: false,
                        dots: false,
                        autoplayTimeout: 10000,
                        navText: [
                            '<i class="fal fa-long-arrow-left"></i>',
                            '<i class="fal fa-long-arrow-right"></i>',
                        ],
                        responsive: {
                            0: {
                                items: 1,
                                nav: false
                            },
                            600: {
                                items: 1,

                            },
                            800: {
                                items: 2,
                                nav: true
                            },
                            1024: {
                                items: 2,
                            },
                        },
                    });
                });
            }
        };



        if ($('.customer-feedback #particles-js').length) {
            particlesJS.load('particles-js', 'assets/js/particlesjs-config.json');
        }

        if ($('.experience-section #particles-js-2').length) {
            particlesJS.load('particles-js-2', 'assets/js/particlesjs-config-2.json');
        }


        if ($('.services-accordions').length) {
            $('.services-accordions .accordion:first-child').addClass('active').find('.accordion-content').show()
            $('.services-accordions .accordion').click(function () {
                $(this).addClass('active').find('.accordion-content').slideDown().parent().siblings().removeClass('active').find('.accordion-content').slideUp();
            })
        }

        if ($('.mobile-nav-toggler').length) {
            $('.mobile-nav-toggler').click(function () {
                $('.mobile-nav').addClass('expanded').children('.mobile-nav-overlay').css({ "transform": "translateX(0%)", "opacity": "0.5" }).siblings().css({ "transform": "translateX(0%)", "opacity": "1", "visibility": "visible" });
            })
        }

        function removeActiveNavClass() {
            $('.mobile-nav').removeClass('expanded').children().removeAttr("style");
        }

        if ($('.mobile-nav').length) {

            $('.mobile-nav-overlay').click(function () {
                removeActiveNavClass();
            })
            $('.nav-mobile-close').click(function () {
                removeActiveNavClass();
            })
            $('.mobile-nav .list-item a button').click(function () {
                $(this).toggleClass('active').parent().toggleClass('active').siblings('.mobile-list .list-item > .sub-menu').slideToggle("slow");
            })
        }


        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }




        customerCarousel();
        brandingOneCarousel();
        brandingCarousel();
        projectOneCarousel();
        homeCarousel();
        projectTwoCarousel();
        newsTwoCarousel();
    });


})(window.jQuery);

