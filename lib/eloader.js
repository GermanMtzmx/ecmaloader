(() => {
	document.setLoader = (father,child) => {father.innerHTML = child;};
	

	//main lib
	lib = () => {
		// set templating stuff

		const template = `
		<span id="bar-loader">
			<span id="circleLoader">
				
			</span>
		</span>`;



		// load with time
		const showLoader = (elem,time=5) =>{
			//let child = document.createElement(template);
			totalTime = (time*1000)/100;
			document.setLoader(elem,template);
			let loader = document.getElementById('bar-loader');
			let percentaje = 0;

			let interval = setInterval(() =>{
				if (percentaje === 99) {
					console.log("Stop loading...")
					setTimeout(()=>elem.removeChild(loader),1000);
					clearInterval(interval);
				
				} else {
					percentaje++;
					loader.style.width = percentaje + '%';			
				}
			},totalTime);
		};

		const delayLoader = (elem,time,stopsAtPer=70,waitSecs=2) => {

			totalTime = ((time+waitSecs) * 1000)/100;

			console.log("execution every ms ",totalTime);

			document.setLoader(elem,template);
			let loader = document.getElementById('bar-loader');

			if(stopsAtPer > 99){
				return false;
			}


			let percentaje = 0;
			let interval = setInterval(()=>{
				console.log("interval executed");
				if(percentaje == stopsAtPer){
					console.log('waiting '+waitSecs+" secs")
					clearInterval(interval);
					setTimeout(()=>{
						loader.style.width = 99+ "%";
						setTimeout(()=>elem.removeChild(loader),3000);
						
					},waitSecs*1000);


				} else if( percentaje == 99){
					console.log("stop Interval")
					clearInterval(interval);
					elem.removeChild(loader);


				}else {
					console.log("increments")
					percentaje++;
					loader.style.width = percentaje+ "%";
				}

							

			},totalTime);

		};

		return {showLoader,delayLoader};
	};

	init = lib();
	// init.sayHello();

})();