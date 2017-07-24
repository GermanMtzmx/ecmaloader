# ecmaloader by German Martinez Solis

A simple load bar emulation ....

**Simple load**

Receives two parameters

* Root element
* duration time in secs 
```javascript
   const el = document.getElementById('loader');
   window.loader.showLoader(el,10)
```

**Delay load**

Receives 4 parameters

* Root element
* interval time
* percentaje to set delay
* waiting secconds until 100%

```javascript 
   const el = document.getElementById('loader');
   window.loader.delayLoader(el,5,40,2)
```

