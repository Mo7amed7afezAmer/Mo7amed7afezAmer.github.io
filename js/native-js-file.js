$(function () {

    // data active
    $("[data-active-slide]").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(`.${$(this).data("active-slide")}`).removeClass("back-slide").siblings().addClass("back-slide");
        $(`.${$(this).data("active-slide")}`).addClass("slide-right").siblings().removeClass("slide-right");
    });
    // data toggle
    $("[data-toggle]").click(function () {
        $($(this).data("toggle")).toggleClass("open");
    });

    // click any part of window
    $(".main-content").click(function () {
        // close sidebar
        if ($("#openSidebar").hasClass("open")) {
            $("#openSidebar").removeClass("open");
        }
    });


});


/* *************** theme colors *************** */
/* color box */
const themeColorBox = document.querySelector(".theme-color-box");

themeColorBox.querySelector(".switcher-style").addEventListener("click", function () {
    themeColorBox.classList.toggle("open");
})
window.addEventListener("scroll", () => {
    themeColorBox.classList.remove("open")
});
/* mode color */
document.getElementById("modeColor").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
/* switcher color */
// const switcherColor = document.querySelectorAll(".alternate-color");
// function setActiveStyle (color) {
//     if (color === switcherColor.getAttribute("color-value")) {
//         switcherColor.removeAttribute("disabled");
//     } else {
//         switcherColor.setAttribute("disabled", true);
//     }
// }
const alternateStyles = document.querySelectorAll(".alternate-color");
const checkBox = document.querySelectorAll(".box-values span");
function setActiveStyle (color) {
    alternateStyles.forEach((s) => {
        if (color == s.getAttribute("color-value")) {
            s.removeAttribute("disabled");
        } else {
            s.setAttribute("disabled", true);
        }
    });
    checkBox.forEach((s) => {
        if (color == s.getAttribute("color-flag")) {
            s.classList.add("open");
            s.querySelector("i").classList.remove("d-none");
        } else {
            s.classList.remove("open");
            s.querySelector("i").classList.add("d-none");
        }
    });
}






console.log(themeColorBox)