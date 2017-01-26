function loadSlider(elemento) {
	$(elemento).slick({
	    autoplay: true,
	    autoplaySpeed: 5000,
	    dots: false,
	    infinite: true,
        slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: $(".slider")
	});
}