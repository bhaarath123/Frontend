const headingElement = document.getElementById("main-heading");
headingElement.textContent = "New Updated Heading Text!";

const paragraphs = document.querySelectorAll(".text-paragraph");

for (let i = 0; i < paragraphs.length; i++) {
    const position = i + 1;
    paragraphs[i].textContent = "New Paragraph Text " + position;
}
