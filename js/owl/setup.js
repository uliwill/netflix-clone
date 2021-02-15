$('#carousel-1').owlCarousel({
    items: 1,
    margin: 10,
    autoHeight: true
});

$('#carousel-2').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false,
            loop: false
        }
    }
})

$('#carousel-3').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false,
            loop: false
        }
    }
})