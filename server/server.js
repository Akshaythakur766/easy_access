
console.log("hello world")


const buttons = document.querySelectorAll("button-container");

buttons.forEach(button => {
    button.addEventListener("onclick", () => {
        const sem = button.getAttribute("data-sem");
       window.location.href = `sem${sem}.html`;
    });
});
