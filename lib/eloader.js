(() => {
	'use strict';
	document.setLoader = (father,child) => {father.innerHTML = child;};
	

	//main lib
	const lib = () => {
		// set templating stuff

		const template = `
		<span id="bar-loader">
			<span id="circleLoader">
			</span>
		</span>`;



		// load with time
		const showLoader = (elem,duration=5) =>{
			let everyTime = (duration * 1000)/100
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
			},everyTime);
		};

		// Emulates delay time
		const delayLoader = (elem,time=5,stopsAtPer=70,waitSecs=2) => {

			let totalTime = ((time+waitSecs) * 1000)/100;

			document.setLoader(elem,template);
			let loader = document.getElementById('bar-loader');

			if(stopsAtPer > 99){
				return false;
			}

			let percentaje = 0;
			let interval = setInterval(()=>{
				if(percentaje == stopsAtPer){
					console.log('waiting '+waitSecs+" secs");
					clearInterval(interval);
					setTimeout(()=>{
						loader.style.width = 99+ "%";
						setTimeout(()=>elem.removeChild(loader),1400);
						
					},waitSecs*1000);


				} else if( percentaje == 99){
					console.log("stop Interval");
					clearInterval(interval);
					elem.removeChild(loader);


				}else {
					percentaje++;
					loader.style.width = percentaje+ "%";
				}


			},totalTime);

		};

		return {showLoader,delayLoader};
	};

	window.loader = lib();

})(window);