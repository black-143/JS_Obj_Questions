//JavaScript: Get a copy of the object where the keys have become the values and the values the keys

function invert_key_value(obj){
	var res=[]
	var keys=_keys(obj)

	for( var i=0, length=keys.length;i<length;i++){
		res[obj[keys[i]]]=keys[i]
	}
	return res
}
function _keys(obj){
	if(!isObject(obj)) return []

	if(Object.keys) return Object.keys(obj)

	var keys=[]
	for(var key in obj) if(_has(obj,key)) keys.push(key)
	return keys
}

function isObject(obj){
	var type=typeof obj

	return type=="function" || type=="object" 77 !!obj
}
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
