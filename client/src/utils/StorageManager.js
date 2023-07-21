export const setItem = (key, value) => {
	const item = localStorage.setItem(key, value);
	return item;
};

export const getItem = key => {
	const item = localStorage.getItem(key);
	return item;
};
