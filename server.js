
console.log("hello world");
const buttons = document.querySelectorAll("button-container");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sem = button.getAttribute("data-sem");
       window.location.href = `sem${sem}.html`;
    });
});

function toggleList(listId){
    const list =
    document.getElementById(listId);

    if (list.style.display ==="none"
        || list.style.display === ""
    )
    {list.style.display ="block";

    } else {list.style.display ="none";
    }
}


function openPaper(id){
    const link =
    document.getElementById(id);
    if (link){
window.open(link.href,'_blank');

    } 
  
}