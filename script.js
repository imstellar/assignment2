window.addEventListener('load', function () {
    navBarButtonHighlight()
})

function navBarButtonHighlight() {
    const totalButtons = document.querySelectorAll("#nav-button");
    const currentPage = window.location.pathname.split('/').pop();

    let i = 0

    while (i < 4) {
        const button = totalButtons[i];
        const page = button.getAttribute("data-page");

        if (page == currentPage || currentPage == "") {
            console.log("Navbar - Current page highlighted")
            button.classList.add("btn-focused")
            button.classList.remove("btn-dark")
            i = 4
        } else {
            console.log("Navbar - Page mismatch")
            i++
        }
    }
}