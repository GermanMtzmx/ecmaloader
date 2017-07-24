# ecmaloader

A simple load bar emulation ....

**Simple load**
Receive two parameters
* One  is the root element and other is the load times
```javascrip
   el = document.getElementById('loader');
   loader.showLoader(el,10)
```

**Delay load**

Receivies 4 parameters
* Root element
* interval time
* percentaje at simulates delay
* waiting secconds until 100%

```javascript 
   el = document.getElementById('loader');
   loader.delayLoader(el,5,40,2)


```

