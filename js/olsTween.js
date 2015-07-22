'use strict';
/* ========================================================================================================================================================
    To change style properties of an object use
    olsTween(element, time, {
        delay: 1,
        height: "400px",
        alpha: 0.5, // note ints must start with a 0
        scaleX: 0.1,
        scaleY: 0.1,
        xOrigin: "50%",
        yOrigin: "50%",
        x: "200px",
        y: "100px",
        ease: "cubic-bezier(0.6, -0.28, 0.735, 0.045)"
    })

    To change class of an object use
    addClass(elem ent, className, delay)

    To replace class of an object use
    changeClass(element, className, delay)

 ========================================================================================================================================================*/

var ready = [];
//PLAY THE NEXT FRAME WITH DELAY AFTER ALL TWEENS 

function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != 'undefined') {
            return properties[i];
        }
    }
    return null;
}

var easing = {
        easeInSine: '0.47, 0, 0.745, 0.715',
        easeOutSine: '0.39, 0.575, 0.565, 1',
        easeInOutSine: '0.445, 0.05, 0.55, 0.95',
        easeInQuad: '0.55, 0.085, 0.68, 0.53',
        easeOutQuad: '0.25, 0.46, 0.45, 0.94',
        easeInOutQuad: '0.455, 0.03, 0.515, 0.955',
        easeInCubic: '0.55, 0.055, 0.675, 0.19',
        easeOutCubic: '0.215, 0.61, 0.355, 1',
        easeInOutCubic: '0.645, 0.045, 0.355, 1',
        easeInQuart: '0.895, 0.03, 0.685, 0.22',
        easeOutQuart: '0.165, 0.84, 0.44, 1',
        easeInOutQuart: '0.77, 0, 0.175, 1',
        easeInQuint: '0.755, 0.05, 0.855, 0.06',
        easeOutQuint: '0.23, 1, 0.32, 1',
        easeInOutQuint: '0.86, 0, 0.07, 1',
        easeInExpo: '0.95, 0.05, 0.795, 0.035',
        easeOutExpo: '0.19, 1, 0.22, 1',
        easeInOutExpo: '1, 0, 0, 1',
        easeInCirc: '0.6, 0.04, 0.98, 0.335',
        easeOutCirc: '0.075, 0.82, 0.165, 1',
        easeInOutCirc: '0.785, 0.135, 0.15, 0.86',
        easeOutBack: '0.175, 0.885, 0.32, 1.275',
        linear: '0, 0, 1, 1'
    },
    args;

var transform = ['transform', 'msTransform', 'webkitTransform', 'mozTransform', 'oTransform'];
var transition = ['transition', 'msTransition', 'webkitTransition', 'mozTransition', 'oTransition'];

var transformProperty = getSupportedPropertyName(transform);
var transitionProperty = getSupportedPropertyName(transition);

var animateable = ["top", "left", "right", "bottom"];


function getPropertyByName(obj, propName) {

    if (typeof obj === 'undefined') return false;

    var _index = propName.indexOf('.')

    if (_index > -1) return getPropertyByName(obj[propName.substring(0, _index)], propName.substr(_index + 1));

    return obj[propName];

}

function assign(obj, prop, value) {
    if (typeof prop === "string")
        prop = prop.split(".");

    if (prop.length > 1) {
        var e = prop.shift();
        assign(obj[e] =
            Object.prototype.toString.call(obj[e]) === "[object Object]" ? obj[e] : {},
            prop,
            value);
    } else
        obj[prop[0]] = value;
}

function $(name, duration, args) {
    for (var i = 0; i < animateable.length; i++) {
        var propVal = getPropertyByName(args, animateable[i])
        var existingVal = getPropertyByName(name.style, animateable[i]);


        // console.log("existing value " + existingVal);
        if (propVal != undefined && existingVal === undefined) {
            if (existingVal === undefined || existingVal === 0) {
                assign(name.style, animateable[i], 0);

            }

        }
    }

    ready.unshift(false);
    setTimeout(function() {
        var s = name.style;
        var a = args;
        var easeType = a.ease;
        var scaleAll = a.scale;
        var xScale = a.scaleX || scaleAll || null;
        var yScale = a.scaleY || scaleAll || null;
        var rotation = a.rotate || null;
        var top = a.top || null;
        var left = a.left || null;

        var transformation = "";


        var defEase = 'linear';
        if (a.ease != -1 && easing.hasOwnProperty(a.ease)) {
            defEase = 'cubic-bezier(' + easing[easeType] + ')';
        }
        s.position = a.position || 'absolute';       
        
       if (typeof a.scale !== 'undefined') {
         s.transform = transformation + ' scale('  + a.scale + ', '  + a.scale + ')';
        }        
        if (typeof a.y !== 'undefined') {
         s.transform = transformation + ' translateY('  + a.y + 'px)';
        }
        if (typeof a.x !== 'undefined') {
         s.transform = transformation + ' translateX('  + a.x + 'px)';
        }
        if (typeof a.skewY !== 'undefined') {
        s.transform = transformation + ' skewY('  + a.skewY + 'deg)';
        }
        if (typeof a.skewX !== 'undefined') {
         s.transform = transformation + ' skewX('  + a.skewX + 'deg)';
        }
        if (typeof a.rotate !== 'undefined') {
         s.transform = transformation + ' rotate('  + a.rotate + 'deg)';
        }
        s[transitionProperty] = 'all ' + duration + 's';
        s.transitionTimingFunction = 'cubic-bezier(' + easing[easeType] + ')' || a.ease || 'linear';
        s.opacity = a.alpha;

        s.filter = 'blur(' + a.blur + 'px)';
        s.top = a.top + 'px';
        s.left = a.left + 'px';
        s.bottom = a.bottom + 'px';
        s.right = a.right + 'px';

        s.width = a.width + "px";
        s.height = a.height + "px";

        s.marginTop = a.marginTop + 'px';
        s.marginRight = a.marginRight + 'px';
        s.marginBottom = a.marginBottom + 'px';
        s.marginLeft = a.marginLeft + 'px';

        s.paddingTop = a.paddingTop + 'px';
        s.paddingRight = a.paddingRight + 'px';
        s.paddingBottom = a.paddingBottom + 'px';
        s.paddingLeft = a.paddingLeft + 'px';

        s.backgroundColor = a.backgroundColor;

        ready.pop();
        doNext();
    }, args.delay * 1000);
    if (args.onStart) {
        eval(args.onStart)()
    }

    function doNext() {
        //console.log(args.delay + duration * 1000 || 75)
        setTimeout(function() {
          //  console.log(args.onComplete)

            if (args.onComplete != undefined && ready.length === 0) {
                eval(args.onComplete)();
            }
        }, (args.delay ||0) + duration * 1000 || 75)
    }

}

// ADD A CLASS NAME TO THE EXISTING SET
function addClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = element.className + " " + className;
    }, d);
}


// SWAP ALL CLASS NAMES FOR A NEW SET
function replaceClass(element, className, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = className;
    }, d);
}

// REMOVE THE FIRST INSTANCE OF A CLASS NAME AND ITS TRAILING SPACE
function removeClass(element, removeClassName, delay) {
    var d = delay || 0;
    setTimeout(function() {
        element.className = element.className.replace(removeClassName + " ", "");
    }, d);
}
