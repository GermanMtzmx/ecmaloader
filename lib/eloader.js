(() => {
  
	lib = () => {

		const sayHello  = (element) => { 
			document.getElementById('eLoader').innerHTML = 'hi';
		};

		return {
			sayHello,
		};
	};

	init = lib();
	init.sayHello();

})();