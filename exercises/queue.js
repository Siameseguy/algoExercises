// create a Que
class Que {
	constructor() {
		this.data = []
	}

	add(record) {
		this.data.unshift(record)
	}

	remove() {
		return this.data.pop()
	}
}
