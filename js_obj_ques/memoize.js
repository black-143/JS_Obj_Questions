function memoize(fn){
	map={}

	return function(...args){
		if(args in map){
			return map[args]
		}
		map[args]=fn(...args)
		return map[args]
	}
}