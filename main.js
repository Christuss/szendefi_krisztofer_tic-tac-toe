import Elem from "./Elem.js";

$(function () {
    let lepes = 0;
    const CONTAINER = $(".container");
    for (let index = 0; index < 9; index++) {
        const elem = new Elem(index, CONTAINER);
    };
    $(window).on("elemKattintas", (event) => {
        if (lepes % 2 === 0) {
            event.detail.setElem("x");
        } else {
            event.detail.setElem("o");
        }
        lepes++;
    })
})