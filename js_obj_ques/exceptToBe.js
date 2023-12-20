var expect=function(val){
	function toBe(n){
		if(n===val){
			return true
		}
		else{
			throw new Error("not equal")
		}
	}
	function notToBe(n){
		if(n!==val){
		return true
		}
		else{
			throw new Error("equal")
		}
	}
}