//JavaScript: Check whether an object contains specified property


function hasKey(obj,key){
	return obj!=null && hasOwnProperty.call(obj,key)
}
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
