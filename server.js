
console.log("hello world")
const buttons = document.querySelectorAll("button-container");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sem = button.getAttribute("data-sem");
       window.location.href = `sem${sem}.html`;
    });
});


function ToggleDownload(id){
    var dlLink =
    document.getElementById(id);

    if (dlLink) {
    if (dlLink.style.display === "none"
        || dlLink.style.display === ""  )
    {
        dlLink.style.display = "inline-block";
    }
     else {
        dlLink.style.display = "none";
    }
}
}