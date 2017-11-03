// ==UserScript==
// @name         Moodle Dispatch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moodle.mka.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(".box.generalbox.sitetopic").innerHTML = `
<div class="link-container">
  <div class="link-group left">
    <a href="https://moodle.mka.org/course/view.php?id=4214"><div class="chem">Chemistry</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4150"><div class="phys">Physics</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4162"><div class="calc">Calculus</div></a>
  </div>
  <div class="link-group right">
    <a href="https://moodle.mka.org/course/view.php?id=2808"><div class="eng">English</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=4169"><div class="spaan">Spanish</div></a>
    <a href="https://moodle.mka.org/course/view.php?id=3774"><div class="hist">History</div></a>
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

.link-container .chem{background-color:#27ae60;}
.link-container .phys{background-color:#8e44ad;}
.link-container .calc{background-color:#7f8c8d;}

.link-container .eng{background-color:#c0392b;}
.link-container .spaan{background-color:#f1c40f; color:black !important;}
.link-container .hist{background-color:#2980b9;}
</style>
`;
})();