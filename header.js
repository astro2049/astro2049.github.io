function addHeader() {
    const headerHtml =
        '<div style="padding: 30px 0 18px; display: flex; justify-content: space-between; align-items: center">' +
        '<a style="width: 15%;" href="index.html">Home</a>' +
        '<a href="hobbies.html">Extracurriculars</a>' +
        '<a href="Summer%20Wine.html">Gallery</a>' +
        '<a href="HVN%20ON%20EARTH.html">Vocabulary</a>' +
        '<a href="ethereal.html">Formulas</a>' +
        '<a href="Apex.html">Gamer Highlights</a>' +
        '<a href="credits.html">Credits</a>' +
        '</div>';
    document.getElementById("header").innerHTML += headerHtml;
    const links = document.querySelectorAll("#header a");
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
