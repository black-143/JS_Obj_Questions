var createCounter=function (init){
	temp=init
	function increment(){
		return ++init
	}
	function decrement(){
		return --init
	}
	function reset(){
		init = temp
		return init
	}
	return {
		increment,decrement,reset
	}
}