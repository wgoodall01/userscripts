// ==UserScript==
// @name         Moodle Search
// @namespace    http://williamgoodall.tk/
// @version      0.2
// @description  Search all Moodle items on a page, and collapse the header.
// @author       William Goodall
// @match        https://moodle.mka.org/course/view.php*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const main = document.createElement('div');
  main.innerHTML = `
<div class="mdc-card">
    <details>
      <summary id="mdc-title"></summary>
    </details>
    <input id="mdc-input" placeholder="Search"/>
    <div id="mdc-results"></div>
  </div>

<style>
.mdc-card{
  box-sizing:border-box;
  padding:30px;
  background-color:white;
  box-shadow:0 0 20px 0 rgba(0,0,0,0.2);
  margin-bottom:50px;
  border-radius:5px;
}

.mdc-card *{
  box-sizing:inherit;
}

.mdc-card summary{
  font-size:30px;
  margin-bottom:20px;
}

.mdc-card input{
  width:100%;
  border:none;
  font-size:16px;
  padding:5px;
  padding-left:0;
  border-bottom:1px solid #dedede;
}

.mdc-card input:focus{
  outline:none;
  border-bottom:1px solid black;
}

#mdc-results:not(:empty){
  margin-top:20px;
}

#mdc-results>div{
  margin-top:5px;
}
</style>
`;
  if (document.querySelector('#mdc-input') == null) {
    document.querySelector('.course-content ul').prepend(main);

    document.querySelector("#mdc-title").textContent = document.querySelector(".page-header-headings h1").textContent;

    // Transplant uncollapsable first topic block
    const headBlock = document.querySelector("#section-0");
    if(headBlock != null){
      headBlock.parentNode.removeChild(headBlock);
      document.querySelector(".mdc-card details").appendChild(headBlock);
    }

    // Search match predicate
    const matches = (text, filter) => {
      filter = filter.trim().toLowerCase();
      text = text.trim().toLowerCase();
      if (filter.length === 0) {
        return false;
      } else {
        const tokens = filter.split(' ');
        for (let t of tokens) {
          if (text.indexOf(t) == -1) {
            return false;
          }
        }
        return true;
      }
    };

    // Wire up search to page
    const input = document.querySelector('#mdc-input');
    const results = document.querySelector('#mdc-results');
    input.oninput = e => {
      const filter = e.target.value;
      const allMods = document.querySelectorAll('.activity .activityinstance');
      results.innerHTML = '';
      allMods.forEach(e => {
        const text = e.textContent;
        if (matches(text, filter)) {
          results.append(e.cloneNode(true));
        }
      });
    };
    console.log('[Moodle Search] Loaded from Userscript.');
  }
})();
