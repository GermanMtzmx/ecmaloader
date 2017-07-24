# ecmaloader by German Martinez Solis

A simple load bar emulation ....

**Simple load**
Receives two parameters: 
* Root element
* duration time in secs 
```javascript
   el = document.getElementById('loader');
   loader.showLoader(el,10)
```

**Delay load**

Receives 4 parameters
* Root element
* interval time
* percentaje to set delay
* waiting secconds until 100%

```javascript 
   el = document.getElementById('loader');
   loader.delayLoader(el,5,40,2)


```

