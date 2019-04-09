// @license magnet:?xt=urn:btih:87f119ba0b429ba17a44b4bffcab33165ebdacc0&dn=freebsd.txt
/* Helper functions */
function addJS(name) {
	var element = createElement("script");
	setAttribute(element, "src", "/assets/" + name + ".min.js");
	append(element);
};
function addCSS(name) {
	var element = createElement("link");
	setAttribute(element, "src", "/assets/" + name + ".min.css");
	append(element);
};
function append(node) {
	return html.body.appendChild(node);
}
function createElement(tagName) {
	return html.createElement(tagName);
}
function setAttribute(node, name, value) {
	node[name] = value;
}

/* Substitute the window object as a variable */
var root = window;
/* Substitute the window object as a variable */
var html = document;

root.onresize = function() {
	if(root.innerWidth < 658 && !root.mobile) {
		// We are on small screens
		addJS('mobile');
		root.mobile = true;
	}
}
// @license-end
