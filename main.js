"use strict";

const allsections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    allsections.forEach(sec => {
        let topval = sec.getBoundingClientRect().top;
        if(topval <= 100 && !sec.classList.contains("inside")) {
            sec.classList.add("inside");
        }
    });
});