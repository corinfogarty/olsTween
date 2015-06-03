# olsTween
Lightweight (3kb minified) GSAP like CSS3 js library for banner animation. 

# Usage
To change style properties of an object use
**$(element, time, {style:attribute, style:attribute, onComplete:function})**

* **duration: **  
number in seconds default 0  
```$(element, 1, {style:attribute)```  

* **position:**  
absolute or relative - default absolute,
```$(element, 1, {position:absolute})```

* **xScale**: 
number can include *px* or *%* - default 1  
```$(element, 1, {xScale:1})```

* **yScale:**  
number can include px or %- default 1  
```$(element, 1, {yScale:1})```

* **rotation:**  
number does not requre deg - default 0  
```$(element, 1, {rotation:90)```  

* **ease:**  
see **easings.net** for list default, or can be either named or a cubic bezier equation  
```$(element, 1, {ease:"easeInSine") ``` 
```$(element, 1, {ease:cubic-bezier(0.77, 0, 0.175, 1))```  

* ** alpha:**  
number - default 1;
```$(element, 1, {alpha:"0.5")```

* **blur:**  
number does not requre px;
```$(element, 1, {blur:20)```  

* **top:**  
number does not requre px - default 0  
```$(element, 1, {top:100)```  

* **left:**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **bottom:**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **right:**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  


* **widt**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **heigh**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  


* **marginTo**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **marginRigh**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **marginBotto**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **marginLef**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  


* **paddingTo**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **paddingRigh**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **paddingBotto**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **paddingLef**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  


* **backgroundColo**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

* **onStar**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  


* **onComplet**  
number does not requre px - default 0  
```$(element, 1, {rotation:90)```  

To change class of an object use
addClass(element, className, delay)

To replace class of an object use
changeClass(element, className, delay)