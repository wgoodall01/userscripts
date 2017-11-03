// ==UserScript==
// @name         Moodle Search
// @namespace    http://williamgoodall.tk/
// @version      0.1
// @description  Search all Moodle items on a page.
// @author       William Goodall
// @match        https://moodle.mka.org/course/view.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const main = document.createElement("div");
    main.innerHTML = `

<style>
.sch_container{
    padding:8px;
    border-radius:5px;
    border: 1px solid lightgrey;
    margin-bottom:20px;
}

.sch_bar{
    display:flex;
    flex-direction:row;
    align-items:center;
}

.sch_input{
    padding:5px;
    flex:1;
    border:none;
    background:none;
}

.sch_bar .fa{
    margin-left:5px;
}

.sch_results .activityinstance{
    margin-left:5px;
    margin-bottom:5px;
    margin-top:5px;
}

</style>

<div class="sch_container">
    <div class="sch_bar">
        <input placeholder="Search" id="sch_input" class="sch_input"></input>
        <i class="fa fa-search"></i>
    </div>
    <div class="sch_results" id="sch_results">

    </div>
</div>

`;
    if(document.querySelector("#sch_input") == null){
        document.querySelector(".content").prepend(main);

        const matches = (text, filter) => {
            filter = filter.trim().toLowerCase();
            text = text.trim().toLowerCase();
            if(filter.length === 0){
                return false;
            } else{
                const tokens = filter.split(" ");
                for(let t of tokens){
                    if(text.indexOf(t) == -1){return false;}
                }
                return true;
            }
        };

        const input = document.querySelector("#sch_input");
        const results = document.querySelector("#sch_results");
        input.oninput = (e) => {
            const filter = e.target.value;
            const allMods = document.querySelectorAll(".activity .activityinstance");
            results.innerHTML = "";
            allMods.forEach(e => {
                const text = e.textContent;
                if(matches(text, filter)){
                    results.append(e.cloneNode(true));
                }
            });
        };
        console.log("Script loaded");
    }
})();




