// ==UserScript==
// @name         Moodle Dispatch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moodle.mka.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Replace homepage links w/ dispatch
    const mainPageContainer = document.querySelector(".box.generalbox.sitetopic")
    if(mainPageContainer !== null){
        mainPageContainer.innerHTML = `
<div class="link-container">
  <div class="link-group left">
    <a href="https://moodle.mka.org/course/view.php?id=4214"><div class="color_chem">Chemistry</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4150"><div class="color_phys">Physics</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4162"><div class="color_calc">Calculus</div></a>
  </div>
  <div class="link-group right">
    <a href="https://moodle.mka.org/course/view.php?id=2808"><div class="color_eng">English</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4169"><div class="color_spaan">Spanish</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=3774"><div class="color_hist">History</div></a>
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

<a class="clink color_chem"  href="https://moodle.mka.org/course/view.php?id=4214">Chemistry</a>
<a class="clink color_phys"  href="https://moodle.mka.org/course/view.php?id=4150">Physics</a>
<a class="clink color_calc"  href="https://moodle.mka.org/course/view.php?id=4162">Calculus</a>
<a class="clink color_eng"   href="https://moodle.mka.org/course/view.php?id=2808">English</a>
<a class="clink color_spaan" href="https://moodle.mka.org/course/view.php?id=4169">Spanish</a>
<a class="clink color_hist"  href="https://moodle.mka.org/course/view.php?id=3774">History</a>
`;
    }

    // Append common styles.
    const styleEl = document.createElement("div");
    styleEl.innerHTML = `<style>
.color_chem{background-color:#27ae60;}
.color_phys{background-color:#8e44ad;}
.color_calc{background-color:#7f8c8d;}
.color_eng{background-color:#c0392b;}
.color_spaan{background-color:#f1c40f; color:black !important;}
.color_hist{background-color:#2980b9;}
</style>`;
    document.body.appendChild(styleEl);

    console.log("[Moodle Dispatch] Loaded from userscript.");

})();