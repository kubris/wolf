$(function () {
	const loginBtns = $(".jsLogin");
	const regBtns = $(".jsRegister");
	const popup = $(".popup");
	const popupClose = $(".popup-close");
	const mainTag = $('html');

	/* Login modal show*/
	loginBtns.on( "click", function() {
		popup.addClass('show');
		mainTag.addClass('no-scroll');
	});

	/* Registraion modal show */
	regBtns.on( "click", function() {
		popup.addClass('show');
		mainTag.addClass('no-scroll');
	});

	popupClose.on("click", function() {
		popup.removeClass('show');
		mainTag.removeClass('no-scroll');
	});


});

/*
document.addEventListener("DOMContentLoaded", function(event) {
	

	loginBtns.forEach(loginBtn => {
		loginBtn.addEventListener('click', function() {
			popup.classList.add('show');
			document.html.classList.add("no-scroll");
		});
	})

	popupClose.addEventListener('click', function() {
		popup.classList.remove('show');
		document.html.classList.remove("no-scroll");
	});
});
*/
