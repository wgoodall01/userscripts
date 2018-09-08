// ==UserScript==
// @name         Moodle Dispatch
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://moodle.mka.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // yes this is a massive XSS.
    // it's also trusted input. don't put sketchy things here.
    const links = {
        history: {name: "History", courseId: 4256},
        dsa: {name: "DSA", courseId: 4087},
        physics: {name: "Physics", courseId: 4249},
        english: {name: "English", courseId: 4319},
        calculus: {name: "Calculus", courseId: 4082},
        numberTheory: {name: "NT&C", courseId: 4081}
    };

    // Common color styles for links.
    const styleEl = document.createElement("div");
    styleEl.innerHTML = `<style>
.dispatch-link[data-course="numberTheory"]{background-color:#27ae60;}
.dispatch-link[data-course="physics"]{background-color:#8e44ad;}
.dispatch-link[data-course="calculus"]{background-color:#7f8c8d;}
.dispatch-link[data-course="english"]{background-color:#c0392b;}
.dispatch-link[data-course="dsa"]{background-color:#f1c40f; color:black !important;}
.dispatch-link[data-course="history"]{background-color:#2980b9;}
</style>`;
    document.body.appendChild(styleEl);

    const linkBlob = (id) => `<a href="https://moodle.mka.org/course/view.php?id=${links[id].courseId}"><div class="dispatch-link" data-course="${id}">${links[id].name}</div></a>`
    const headerBlob = (id) => `<a class="clink dispatch-link" data-course="${id}" href="https://moodle.mka.org/course/view.php?id=${links[id].courseId}">${links[id].name}</a>`

    // Replace homepage links w/ dispatch
    const mainPageContainer = document.querySelector(".box.generalbox.sitetopic")
    if(mainPageContainer !== null){
        mainPageContainer.innerHTML = `
<div class="link-container">
  <div class="link-group left">
    ${linkBlob('history')}
    ${linkBlob('dsa')}
    ${linkBlob('physics')}
  </div>
  <div class="link-group right">
    ${linkBlob('english')}
    ${linkBlob('calculus')}
    ${linkBlob('numberTheory')}
  </div>
</div>

<style>

.link-container{
  display:flex;
  flex-direction:row;
  margin: 0 auto;
  max-width:500px;
}

.link-container a{
  text-decoration:none;
}

.link-container .link-group{
  flex:1;
  margin:10px;
}

.link-container .link-group div{
  height:50px;
  line-height:50px;
  font-size:30px;
  margin:5px;
  border-radius:5px;
  color:white;
  transition:0.3s;
}

.link-container .link-group div:hover{
  filter: saturate(2);
  position:relative;
  box-shadow:0 0 20px 0 rgba(0,0,0,0.2);
}

.link-container .link-group.left div:hover{
    margin-right:-10px;
}

.link-container .link-group.left div{
  padding-left:30px;
  text-align:left;
}

.link-container .link-group.right div{
  padding-right:30px;
  text-align:right;
}

.link-container .link-group.right div:hover{
    margin-left:-10px;
}

</style>
`;
    }

    // Replace navbar dropdown with useful links.
    const navbarContainer = document.querySelector(".menus");
    if(navbarContainer !== null){
        navbarContainer.innerHTML = `

<style>
.menus{
text-align:right;
line-height:88px;
font-size:18px;
}

.menus a.clink{
margin-right:10px;
padding:10px;
color:white;
border-radius:4px;
transition:0.2s;
}
</style>

    ${headerBlob('history')}
    ${headerBlob('dsa')}
    ${headerBlob('physics')}
    ${headerBlob('english')}
    ${headerBlob('calculus')}
    ${headerBlob('numberTheory')}
`;
    }

    console.log("[Moodle Dispatch] Loaded from userscript.");

})();
