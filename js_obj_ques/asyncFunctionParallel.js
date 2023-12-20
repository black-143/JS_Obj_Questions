function promiseAll(promises){
	return new Promise((resolve,reject)=>{
		let results=[]
		let pending=promises.length

		promises.forEach((promise,index)=>{
			promise.then(value=>{
				results[index]=value
				pending--

				if(pending===0){
					resolve(results)
				}
			}).catch(err=>{
				reject(err)
			})
		})
	})
}