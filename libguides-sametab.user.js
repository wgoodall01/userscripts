// ==UserScript==
// @name         Libguides Sametab
// @namespace    http://williamgoodall.tk/
// @version      0.1
// @description  On libguides.mka.org, make all target=_blank links open in the same tab.
// @author       William Goodall
// @match        http://libguides.mka.org/*
// @grant        none
// ==/UserScript==

(function() {
    // Remove annoying new-tab links
    document.querySelectorAll('a[target="_blank"]').forEach(e => e.target = "");
})();