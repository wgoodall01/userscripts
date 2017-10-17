// ==UserScript==
// @name         Quizlet Typo Shortcut
// @namespace    http://williamgoodall.tk/
// @version      0.1
// @description  try to take over the world!
// @author       William Goodall
// @match        https://quizlet.com/*/learn*
// @grant        none
// ==/UserScript==

(function() {
    const typoParentClass = "AssistantIncorrectWrittenFeedbackItem-mistyped";
    const hasTypoButton = () => document.querySelectorAll(`.${typoParentClass}`).length === 1;
    const clickTypoButton = () => document.querySelector(`.${typoParentClass} button`).click();

    document.addEventListener("keydown", (e) => {
        if(e.code === "Backspace" && hasTypoButton()){
            clickTypoButton();
        }
    });
})();