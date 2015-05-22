

window.onload = init;

 
function init() {
    var box = document.getElementById("box");
    $(box, 0, {xOrigin:50, yOrigin:50, left:100,top:100, alpha:1, onComplete:tween});
    // playFrame(tween)
}
function tween(){
        console.log("end of tween");

     $(box, 5, {delay:0,xOrigin:50, yOrigin:50, left:706,top:296, ease:"easeOutQuart", onStart:start, onComplete:end});
   
}

function start(){
    console.log("start of tween");
}
function end(){
    console.log("end of tween");
}