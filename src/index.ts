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

document.getElementById("load")?.addEventListener("click", load);
