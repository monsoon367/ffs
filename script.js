const vid = document.querySelector('#vid');

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        vid.requestFullscreen();
        screen.orientation.lock("landscape-primary");
      }else{
        document.exitFullscreen();
        screen.orientation.unlock();
      }
}
vid.addEventListener("dblclick",  toggleFullscreen);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.fullscreenElement) {
      document.exitFullscreen();
    }
});

vid.addEventListener('click',() => {
    vid.paused ? vid.play() : vid.pause();
});