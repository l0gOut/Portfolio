const background = document.querySelector("[data-background]")
const flashcardsPopOut = document.querySelector("[data-div-flashcards]")
const virtualPianoPopOut = document.querySelector("[data-div-virtual-piano]")
const buttonFlashcard = document.getElementById("flashcards_button");
const buttonPiano = document.getElementById("piano_button");
const buttonExit = document.querySelectorAll("[data-button-exit]");
const navTag = document.querySelector(".nav_tag");
const navUl = document.querySelector(".list_ul");

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
    setTimeout(() => {
        background.classList.add("time");
    }, 200);
}

function close() {
    background.classList.remove("div_active", "time");
    flashcardsPopOut.classList.remove("div_active");
    virtualPianoPopOut.classList.remove("div_active")
}