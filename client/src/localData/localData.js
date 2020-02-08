export const loadData = () => {
	try {
		const localData = localStorage.getItem('state');

		if(localData === null) {
			return undefined;
		}

		return JSON.parse(localData);

	} catch (err) {
		return undefined;
	}
}

export const saveData = (state) => {
	try {
		const data = JSON.stringify(state);
		localStorage.setItem('state', data);
	} catch (err) {
		console.log(err);
	}
}