export function INCREMENT_ACTION(seed){
	console.log('seed -', seed);
	return function(dispatch){
		setTimeout(function(){
			dispatch({
				type : 'INCREMENT'
			})	
		},5000);
		
	};
}

export function DECREMENT_ACTION(){
	return {
		type : 'DECREMENT'
	}
}