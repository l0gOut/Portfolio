const background = document.querySelector("[data-background]")
const flashcardsPopOut = document.querySelector("[data-div-flashcards]")
const virtualPianoPopOut = document.querySelector("[data-div-virtual-piano]")
const buttonFlashcard = document.getElementById("flashcards_button");
const buttonExit = document.querySelectorAll("[data-button-exit]");

buttonFlashcard.addEventListener("click", ev => {
    background.classList.add("div_active");
    flashcardsPopOut.classList.add("div_active");
});

buttonExit.forEach(value => {
    value.addEventListener("click", evt => {
        close();
    });
});

background.addEventListener("click", evt => {
    close();
});

function close() {
    background.classList.remove("div_active");
    flashcardsPopOut.classList.remove("div_active");
}