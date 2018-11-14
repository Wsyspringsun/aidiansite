class Utils{
	
}
Utils.substr = (val,start,end) => {
	if(!val) return ''
	val = val + ''
	return val.substring(start,end)
}

Utils.formatDate = (val,fmt) => {
	let d = null
	try{
		d = new Date(val)
		if(!fmt)
			return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
	}catch(err){
		return ''
	}
}


export default Utils
