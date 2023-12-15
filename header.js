function addHeader() {
    const headerHtml =
        '<div style="padding: 30px 0 18px; display: flex; justify-content: space-between; align-items: center">' +
        '<a style="width: 15%;" class="planets" href="index.html">Home</a>' +
        '<a class="planets" href="atlas.html">Hourglass Twins</a>' +
        '<a class="planets" href="Summer%20Wine.html">Brittle Hollow</a>' +
        '<a class="planets" href="HVN%20ON%20EARTH.html">Orbital Probe Cannon</a>' +
        '<a class="planets" href="ethereal.html">Giant’s Deep</a>' +
        '<a class="planets" href="Apex.html">Attlerock</a>' +
        '<a class="planets" href="credits.html">Sun Station [Credits]</a>' +
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
