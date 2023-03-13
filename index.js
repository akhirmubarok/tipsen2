const cron = require("node-cron");
const absen = require("./absen");
const getTime = require("./getTime");

// const tryAbsen =  async () => {
// 	// let { day, year, dayName, monthName } = getTime();
// 	// console.log(
// 	// 	`================== ${dayName} ${day} ${monthName} ${year} ==================`
// 	// );
// 	absen("Sesi 1");
// };

// sesi 1 = 07:10 WIB = 00:10 UTC
const sesi1 = cron.schedule("11 0 * * 1-5", async () => {
	let {  day, year, dayName, monthName } =
		getTime();
	console.log(
		`================== ${dayName} ${day} ${monthName} ${year} ==================`
	);
	absen("Sesi 1 -");
});

// sesi 2 = 09:00 WIB = 02:00 UTC
const sesi2 = cron.schedule("1 2 * * 1-5", async () => {
	absen("Sesi 2 -");
});

// sesi 3 = 10:00 WIB = 03:00 UTC
const sesi3 = cron.schedule("1 3 * * 1-5", async () => {
	absen("Sesi 3 -");
});

// sesi 4 = 10:50 WIB = 03:50 UTC
const sesi4 = cron.schedule("51 3 * * 1-5", async () => {
	absen("Sesi 4 -");
});

// sesi 5 = 13:20 WIB = 06:20 UTC
const sesi5 = cron.schedule("21 6 * * 1-5", async () => {
	absen("Sesi 5 -");
});

// sesi 6 = 16:00 WIB = 09:00 UTC
const sesi6 = cron.schedule("1 9 * * 1-5", async () => {
	absen("Sesi 6 -");
});

sesi1.start();
sesi2.start();
sesi3.start();
sesi4.start();
sesi5.start();
sesi6.start();
// tryAbsen();