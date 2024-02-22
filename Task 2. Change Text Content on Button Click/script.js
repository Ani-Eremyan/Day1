var button = document.getElementById("changeTextButton");
var paragraph = document.getElementById("textParagraph");

function changeText() {
    paragraph.textContent = "New Text";
}
button.addEventListener("click", changeText);