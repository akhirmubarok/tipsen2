const getTime = () => {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	return { hour, minute, second, day, month, year };
};

module.exports = getTime;