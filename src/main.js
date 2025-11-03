import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".fan-reviews__carousel");
	new Flickity(carousel, {
		wrapAround: true,
		autoPlay: 3000,
		pageDots: false,
		prevNextButtons: false,
	});
});
