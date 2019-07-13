import { defaultFraction , defaultRegex , defaultRegexInput } from "./formatVariable";

export const countAfterComas = (value) => {
    if(Math.floor(value) === value){
    	return value;	
    }else{
    	return (value.toString().split(".")[1].length >= 4) ? value.toFixed(2) : value
    }   
 }

export const denominationFraction = (hint,value) => {
	return ` ${hint}x Rp ${value}`
}

export const validationInput = (value) => {
	let statusRegex = false
	for (let i = 0; i < defaultRegex.length; i++) {
	  if (defaultRegex[i].test(value)){
	  	statusRegex = true 
	  	break; 
	  }
	} 
	return statusRegex
}

export const formatInputValue = (value) => {
	let bracketValue = value
	for (let i = 0; i < defaultRegexInput.length; i++) {
	  	let switchValue = bracketValue.replace(defaultRegexInput[i],'')
	  		bracketValue = switchValue
	} 
	return parseInt(bracketValue)
}