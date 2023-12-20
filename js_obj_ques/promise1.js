const awaitTimeout  =delay=>new Promise((resolve)=>{
	setTimeout((resolve,delay))
	awaitTimeout(300).then(()=>console.log("hi"))

	const f= async ()=>{
	await awaitTimeout(300)

	console.log("hi")
	}
})

//async function
async function sleep(mills){
	return new Promise(resolve=>setTimeout(resolve,mills))
}