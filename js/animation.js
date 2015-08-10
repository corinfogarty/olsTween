window.onload = function() {

    init()
}

var elems = {};

function init() {
  elems.exit = document.getElementById('bg-exit');
  play();
  setInterval(play, 2000);

}

function play() {

  $("#box", 1,{ y:245, rotate:45, ease:"easeInOutSine"})


  $("#box", 1,{delay:1, y:50, rotate:0, ease:"easeInOutSine"})

}

function doExits() {
    elems.exit.addEventListener('click', bgExitHandler, false);
}
