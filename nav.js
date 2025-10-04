function addNavLinks() {
    const navHtml =
        `<div style="padding: 30px 0 18px; display: flex; justify-content: space-between; align-items: center">
            <a style="width: 15%;" href="index.html">Home</a>
            <a href="hobbies.html">Extracurriculars</a>
            <a href="vocabulary.html">Vocabulary</a>
            <a href="formulas.html">Formulas</a>
            <a href="Apex.html">Gamer Highlights</a>
            <a href="credits.html">Credits</a>
        </div>`;
    document.querySelector("nav").innerHTML += navHtml;
    const links = document.querySelectorAll("nav a");
    const currentUrl = window.location.pathname.split("/").pop();
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (i === 0 && currentUrl === "") {
            link.style.pointerEvents = "none";
            link.setAttribute('aria-disabled', 'true');
            break;
        }
        if (link.getAttribute("href") === currentUrl) {
            link.style.pointerEvents = "none";
            break;
        }
    }
}
