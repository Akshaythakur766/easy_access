<<<<<<< HEAD
console.log("hello world")
=======

const buttons = document.querySelectorAll("button-container");

buttons.forEach(button => {
    button.addEventListener("onclick", () => {
        const sem = button.getAttribute("data-sem");
       window.location.href = `sem${sem}.html`;
    });
});
>>>>>>> 89a4627b042a3c685094278485ff3dc4a23a8ee7
