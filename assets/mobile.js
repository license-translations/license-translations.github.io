// @license magnet:?xt=urn:btih:87f119ba0b429ba17a44b4bffcab33165ebdacc0&dn=freebsd.txt
// @source: https://license-translations.github.io/assets/mobile.js
/* Utility for displaying dropdowns in mobile view */
var headerDropdowns = document.querySelectorAll(".header-item.dropdown");
	
headerDropdowns.forEach(function(element, index) {
	element.onclick = function(event) {
		var viewportWidth = window.innerWidth;
		if(viewportWidth < 658) {
			// We are on small screens
			event.preventDefault();
			
			var classList = element.classList;
			if(classList.contains('opened')) {
				classList.remove("opened");
			} else {
				classList.add("opened")
			}
		}
	}
});
// @license-end
