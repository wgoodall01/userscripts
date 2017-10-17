// ==UserScript==
// @name         Google Classroom Auto Redirect
// @namespace    http://williamgoodall.tk/
// @version      0.1
// @description  If you have personal and school Google accounts, automatically redirect to the school one.
// @author       You
// @match        https://classroom.google.com/u/*/ineligible*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var CLASSROOM_USER_NUMBER = 1;
    window.onbeforeunload = function(){};
    window.location.replace(`https://classroom.google.com/?authuser=${CLASSROOM_USER_NUMBER}`);
})();