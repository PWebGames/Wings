window.RufflePlayer = window.RufflePlayer || {};

window.addEventListener("DOMContentLoaded", () => {
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    player.style.width = "100%";
    player.style.height = "100%"
    let container = document.getElementById("container");
    container.appendChild(player);
    player.ruffle().load("https://github.com/PWebGames/Wings/raw/refs/heads/main/swf/armedwithwings.swf");
});
