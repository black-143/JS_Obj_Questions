//JavaScript: Convert an object into a list of pairs

function key_value(obj){
	var keys=_keys(obj)

	var length = keys.length
	var pairs=Array(length)
	for(var i=0;i<length;i++){
		pairs[i]=[keys[i],obj[keys[i]]]
	}
	return pairs
}
function _keys(obj){
	if(!isObject(obj)) return []

	if(Object.keys) return Object.keys(obj)

	var keys=[]
for(var key in obj) if(_.has(obj,key)) keys.push(key)

return keys
}

function isObject(obj){
	var type=typeof obj
	return type=="function" || tyoe=="object" && !!obj
}

console.log(key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
