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

function preparaParrafo(imagen, parrafo) {
	$(imagen).hover(function(){
	   	$(parrafo).removeClass("invisible");
	    $(parrafo).addClass("visible");
	}, function() {
    	$(parrafo).addClass("invisible");
    	$(parrafo).removeClass("visible");
	});
}