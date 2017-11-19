// ==UserScript==
// @name         Libguides Sametab
// @namespace    http://williamgoodall.tk/
// @version      0.2
// @description  On libguides.mka.org, make all target=_blank links open in the same tab.
// @author       William Goodall
// @match        http://libguides.mka.org/*
// @grant        none
// ==/UserScript==

(function() {
    // Remove annoying new-tab links
    document.querySelectorAll('a[target="_blank"]').forEach(e => e.target = "");

    // Log in automatically with password for research.
    if(window.location.href.startsWith("http://libguides.mka.org/databases/")){
        const pwInput = document.getElementById("password");
        if(pwInput !== null){
            // submitPassword() is part of libguides, and this is janky.
            setTimeout(() => submitPassword(), 500);
        }
    }
})();
