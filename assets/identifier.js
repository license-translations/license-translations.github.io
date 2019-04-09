// @license magnet:?xt=urn:btih:87f119ba0b429ba17a44b4bffcab33165ebdacc0&dn=freebsd.txt
// @source: https://license-translations.github.io/assets/identifier.js
/* Utility for the /tools/identifier.html page */
var identifierElement = document.getElementById("identifier");

window.setTimeout(function() {
	var hash = location.hash;
	if(hash == null) {
		return;
	}
	if(hash.startsWith('#')) {
		hash = hash.substr(1);
	}
	if(hash.startsWith('id=')) {
		hash = hash.substr(3);
	} else {
		return;
	}
	
	identifierElement.innerHTML = hash;
}, 500);
window.onhashchange = function(event) {
	var hash = location.hash;
	if(hash == null) {
		return;
	}
	if(hash.startsWith('#')) {
		hash = hash.substr(1);
	}
	if(hash.startsWith('id=')) {
		hash = hash.substr(3);
	} else {
		return;
	}
	
	identifierElement.innerHTML = hash;
}

document.getElementById("copy-link").onclick = function(event) {
	if(event.target) {
		event.preventDefault();
		navigator.clipboard.writeText(identifierElement.innerHTML);
	}
}

// @license-end
