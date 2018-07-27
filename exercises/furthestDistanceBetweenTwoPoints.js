function furthestDistance(arr) {
	let d = 0
	for (let [x1, y1] of arr) {
		for (let [x2, y2] of arr) {
			d = Math.max(d, Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2)))
		}
	}
	return +d.toFixed(2)
}
