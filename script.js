const background = document.querySelector("[data-background]")
const flashcardsPopOut = document.querySelector("[data-div-flashcards]")
const virtualPianoPopOut = document.querySelector("[data-div-virtual-piano]")
const buttonFlashcard = document.getElementById("flashcards_button");
const buttonPiano = document.getElementById("piano_button");
const buttonExit = document.querySelectorAll("[data-button-exit]");

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

function open(model) {
    background.classList.add("div_active");
    model.classList.add("div_active");
}

function close() {
    background.classList.remove("div_active");
    flashcardsPopOut.classList.remove("div_active");
    virtualPianoPopOut.classList.remove("div_active")
}