const keymap = ["a", "s", "d", "f", "g", "h"];

function load() {
    const tracks = Array.from(document.getElementsByClassName("mii")).map(e => e as HTMLMediaElement);
    window.addEventListener("keypress", event => {
        if (keymap.includes(event.key)) {
            const track = tracks[keymap.indexOf(event.key)];
            track.play();
        }
    });
}

const button = document.getElementById("load");
button?.addEventListener("click", () => {
    const docu = document.getElementById("docu");
    if (docu) docu.style.display = "block";
    if (button) button.style.display = "none";
    load();
});
