export function formData (n, s) {
  if (!n || typeof (n) !== 'number') return ''
  var t = new Date(n)
  var y = t.getFullYear()
  var m = t.getMonth() + 1
  var d = t.getDate()
  var hh = t.getHours()
  var mm = t.getMinutes()
  // var ss = t.getSeconds()
  function add0 (n) { return n < 10 ? '0' + n : n }
  if (s === 1) { return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(hh) + ':' + add0(mm) } else if (s === 2) { return y + '-' + add0(m) } else {	return add0(m) + '-' + add0(d) + ' ' + add0(hh) + ':' + add0(mm) }
}
