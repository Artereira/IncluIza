import { dados } from "./dados.js";

var painel_init = document.getElementById("painel-init");
var nav_categorys = document.querySelectorAll(".nav-category");
var category_contents = document.querySelectorAll(".category-content");
var active_category_content = "";

var shortcuts_btn = document.querySelectorAll(".shortcut-btn")

var shortcuts_btn_index = 0;
var shortcuts_btn_index_limit = 0;

var back_btn = document.getElementById("back-btn");

var sound_btn = document.getElementById("sound-btn");
var sound = true;

sound_btn.addEventListener("click", () => {
    sound = (sound) ? false : true;
    let i = document.querySelector("i");

    i.classList.toggle("fa-volume-xmark");
    i.classList.toggle("fa-volume-high");
});

nav_categorys.forEach(nav_category => {
    nav_category.addEventListener("click", () => {
        let _class = nav_category.querySelector("strong").innerHTML.toLowerCase();

        if (_class === "emoções") { _class = "emocoes" }

        painel_init.classList.toggle("disabled");
        active_category_content = document.querySelector(`.${_class}`);
        active_category_content.classList.toggle("active-category")
        back_btn.classList.toggle("active-back-btn");
    });
});

category_contents.forEach(category_content => {

    let div_content = category_content.querySelector("div");

    for (let index = 0; index < dados[category_content.classList[1]].length; index++) {
        let div = document.createElement("div");
        let button = document.createElement("button");
        let strong = document.createElement("strong");
        let button_div = document.createElement("div");

        button_div.style.backgroundImage = `url(${dados[category_content.classList[1]][index].photo_url})`;
        strong.innerHTML = dados[category_content.classList[1]][index].name_display;

        button.appendChild(button_div);
        button.appendChild(strong);
        div.appendChild(button);
        div.classList.add("btns-voice");
        console.log(div);

        div_content.appendChild(div);
    }

})

var btns_voice = document.querySelectorAll(".btns-voice");

back_btn.addEventListener("click", () => {
    active_category_content.classList.toggle("active-category");
    painel_init.classList.toggle("disabled");
    active_category_content = "";
    back_btn.classList.toggle("active-back-btn");
})

btns_voice.forEach(btn_voice => {
    btn_voice.addEventListener("click", () => {
        shortcuts_btn[shortcuts_btn_index].style.backgroundImage = btn_voice.querySelector("div").style.backgroundImage;

        if (shortcuts_btn_index == shortcuts_btn_index_limit) {
            shortcuts_btn_index = 0;
        }

        else {
            shortcuts_btn_index++;
        }
    });
});

function set_shortcuts_btn_index_limit() {
    if (window.innerWidth < 1100) {
        shortcuts_btn_index_limit = 2;
    }

    else if (window.innerWidth < 790) {
        shortcuts_btn_index_limit = 0;
    }

    else {
        shortcuts_btn_index_limit = 4;
    }
}

window.addEventListener("resize", set_shortcuts_btn_index_limit);
set_shortcuts_btn_index_limit();

