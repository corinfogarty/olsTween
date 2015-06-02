

window.onload = init;

var box = document.getElementById("box")
 
function init() {
    var box = document.getElementById("box");
    $(box, 0, {xOrigin:50, yOrigin:50, left:100,top:100, scaleY:1, scaleX:1, rotate:0, alpha:1});
     playFrame(tween)
}
function tween(){
       $(box, 1, {delay:1, left:200,top:100, scaleY:1, scaleX:1, rotate:90, alpha:1});

   }