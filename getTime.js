const getTime = () => {
	let date = new Date();
	let hour = date.getHours() + 7;
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let dayName1 = date.getDay();

	var days = [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jumat",
		"Sabtu",
	];
	var dayName = days[dayName1];

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let monthName = monthNames[month - 1];
	return { hour, minute, second, day, month, year, dayName, monthName };
};

module.exports = getTime;
