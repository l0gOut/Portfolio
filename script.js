const background = document.querySelector("[data-background]")
const flashcardsPopOut = document.querySelector("[data-div-flashcards]")
const virtualPianoPopOut = document.querySelector("[data-div-virtual-piano]")
const buttonFlashcard = document.getElementById("flashcards_button");
const buttonPiano = document.getElementById("piano_button");
const buttonExit = document.querySelectorAll("[data-button-exit]");
const navTag = document.querySelector(".nav_tag");
const navUl = document.querySelector(".list_ul");
const checkBox = document.getElementById("#burger");

let intervalWidth = setInterval(checkWidth, 500);

setTimeout(() => {
    background.classList.remove("time");
}, 100);

buttonFlashcard.addEventListener("click", () => {
    open(flashcardsPopOut);
});

buttonPiano.addEventListener("click", () => {
    open(virtualPianoPopOut);
});

buttonExit.forEach(value => {
    value.addEventListener("click", () => {
        close();
    });
});

background.addEventListener("click", () => {
    close();
});

setTimeout(() =>{
    navTag.classList.add("nav_tag_anim");
    navUl.classList.add("nav_tag_anim");
}, 500);

function open(model) {
    background.classList.add("div_active");
    model.classList.add("div_active");
}

function close() {
    background.classList.remove("div_active", "time");
    flashcardsPopOut.classList.remove("div_active");
    virtualPianoPopOut.classList.remove("div_active")
}


function checkWidth() {
    if (innerWidth > 1000) {
        checkBox.checked = false;
    }
}