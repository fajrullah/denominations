export const defaultFraction = [100000,50000,20000,10000,5000,2000,1000,500,100,50]
export const defaultRegex = [
    /^(rp|RP|Rp)(\s|)[0-9][0-9]*[0-9]$/,
    /^\d{1,3}([.]\d{3})*(\,0{2})?$/,
    /^(\d)*(\d+)?$/,
    /^(rp|RP|Rp)(\s|)\d{1,3}([.]\d{3})*(\,0{2})?$/
  ]
export const defaultRegexInput = [
	/,\d+/g,
	/^(rp |rp)/i,
	/\./g,
]