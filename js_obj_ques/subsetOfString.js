String.prototype.sub_String=function(){
	var subset=[]

	for(var i=0;i<this.length;i++){
		for(var j=i+1;j<this.length+1;j++){
			subset.push(this.slice(i,j))
		}
	}
	return subset
}
console.log("dog".sub_String())