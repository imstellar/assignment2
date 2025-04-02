document.addEventListener('DOMContentLoaded', function() {
    navBarButtonHighlight();});

function navBarButtonHighlight() {
    const totalButtons = document.querySelectorAll("#nav-button");
    const currentPage = window.location.pathname.split('/').pop();
    let i = 0

    while (i < 4) {
        const button = totalButtons[i];
        const page = button.getAttribute("data-page");
        
        if (page == currentPage) {
            console.log("Page button found")
            button.classList.add("btn-focused")
            button.classList.remove("btn-dark")
        }
        i++
    }
}