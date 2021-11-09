class Utilities {

	constructor() {
	}

	buildClassNames(obj) {
		obj = obj || {};
		return Object.keys(obj)
			.filter(k => obj[k] === true)
			.join(' ');
	}

}

export default new Utilities();