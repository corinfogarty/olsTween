

window.onload = init;

var box = document.getElementById("box")
 
function init() {
    var box = document.getElementById("box");
    $(box, 0, {xOrigin:0, yOrigin:0, top:0, left:400, scaleY:1, scaleX:1, rotate:0, alpha:1});
      playFrame(tween, 500)
}
function tween(){
       $(box, 1, {delay:1, top:100, left:10, scaleY:1, scaleX:1, rotate:90, alpha:1});

   }