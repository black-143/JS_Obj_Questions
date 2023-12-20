var timeLimit = function(fn,t){
	return async function(...args){
		const promies=[
			new Promise(resolve=>resolve(fn(...args)))

			new Promise((res,reject)=>setTimeout(()=>reject('time limit exceeded'),t))

			]
	}		return Promise.race(promies);
}