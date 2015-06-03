# olsTween
Lightweight (3kb minified) js library for banner animation using CSS.

# Usage
Declare all objects as ids and assign them to a variable using getElementById
remember to declare variables within an object to keep them out of the global scope

## Styling and animation 

To change style properties of an object use  
```$(element, time, {onStart:function, delay:n, style:attribute, onComplete:function})```

* **duration: **  
number in seconds *default 0*  
```$(element, 1, {style:attribute)```  


* **position:**  
absolute or relative - *default absolute*  
```$(element, 1, {position:absolute})```


* **xScale**: 
number can include *px* or *%* - *default 1*  
```$(element, 1, {xScale:1})```


* **yScale:**  
number can include px or %- *default 1*  
```$(element, 1, {yScale:1})```


* **rotation:**  
number does not requre deg - *default 0*  
```$(element, 1, {rotation:90)```  


* **ease:**  
see **easings.net** for list -  or can be either named or a cubic bezier equation  
```$(element, 1, {ease:"easeInSine") ```  
```$(element, 1, {ease:cubic-bezier(0.77, 0, 0.175, 1))```  


* ** alpha:**  
number - *default 1*  
```$(element, 1, {alpha:"0.5")```


* **blur:**  
number *does not requre px*  
```$(element, 1, {blur:20)```  



* **top:**  
number *does not requre px* - *default 0*  
```$(element, 1, {top:100)```  


* **left:**  
number *does not requre px* - *default 0*  
```$(element, 1, {left:100)```  


* **bottom:**  
number *does not requre px* - *default 0*  
```$(element, 1, {bottom:100)```  


* **right:**  
number *does not requre px* - *default 0*  
```$(element, 1, {right:100)```  


* **width**  
number *does not requre px*  
```$(element, 1, {width:100)```  


* **height**  
number *does not requre px*  
```$(element, 1, {height:100)```  


* **marginTop**  
number *does not requre px* - *default 0*  
```$(element, 1, {marginTop:100)```  


* **marginRight**  
number *does not requre px* - *default 0*  
```$(element, 1, {marginRight:100)```  


* **marginBottom**  
number *does not requre px* - *default 0*  
```$(element, 1, {marginBottom:100)```  


* **marginLeft**  
number *does not requre px* - *default 0*  
```$(element, 1, {marginLeft:100)```  


* **paddingTop**  
number *does not requre px* - *default 0*  
```$(element, 1, {paddingTop:100)```  


* **paddingRight**  
number *does not requre px* - *default 0*  
```$(element, 1, {paddingRight:100)```  


* **paddingBottom**  
number *does not requre px* - *default 0*  
```$(element, 1, {paddingBottom:100)```  


* **paddingLeft**  
number *does not requre px* - *default 0*  
```$(element, 1, {paddingLeft:100)```  


* **backgroundColor**  
number *does not requre px* - *default 0*  
```$(element, 1, {backgroundColor:"#ffcc00")```  
```$(element, 1, {backgroundColor:"rgba(225,225,225,.5)")```  

* **onStart**  
number *does not requre px* - *default 0*  
```$(element, 1, {onStart:function)```  


* **onComplete**  
number *does not requre px* - *default 0*  
```$(element, 1, {onComplete:function)```  


## Changing class
* **To add a class name to an element use in addition to its current class names**  
```addClass(element, className, delay)```

* **To replace all class names to an element removing all its current class names**  
```replaceClass(element, className, delay)```

* **To remove a class name from the class names of element - note if duplicate class names are present it will only remove the first**  
```removeClass(element, className, delay)```

## Progressing between frames or functions
* **to fire a function after an interval, whilt making sure all concurrent tweens have set up**  
```playFrame(frame, delay)```

