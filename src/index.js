module.exports = function reverse (n) {
	if(typeof n === 'string') n = parseInt(n)
	if(n === 0 || typeof n !== 'number' || !isFinite(n)) return 0
	if(n < 0) n = -n
	let s = ''
	while(n > 0) {
		s += n % 10
		n = Math.floor(n / 10)
	}
	return s || '0'
}