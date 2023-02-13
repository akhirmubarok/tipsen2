const cron = require("node-cron");
const absen = require("./absen");

// UTC

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();


// sesi 1 = 07:20 WIB = 00:20 UTC
const sesi1 = cron.schedule("21 0 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 1 - ${hour}:${minute} WIB`);
	absen();
});

// sesi 2 = 09:00 WIB = 02:00 UTC
const sesi2 = cron.schedule("0 2 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 2 - ${hour}:${minute} WIB`);
	absen();
});

// sesi 3 = 10:00 WIB = 03:00 UTC
const sesi3 = cron.schedule("1 3 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 3 - ${hour}:${minute} WIB`);
    absen();
});

// sesi 4 = 10:50 WIB = 03:50 UTC
const sesi4 = cron.schedule("51 3 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 4 - ${hour}:${minute} WIB`);
    absen();
});

// sesi 5 = 13:20 WIB = 06:20 UTC
const sesi5 = cron.schedule("21 6 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 5 - ${hour}:${minute} WIB`);
    absen();
});

// sesi 6 = 16:00 WIB = 09:00 UTC
const sesi6 = cron.schedule("1 9 * * *", async () => {
	console.log(`${day}/${month}/${year} - Sesi 6 - ${hour}:${minute} WIB`);
    absen();
});

sesi1.start();
sesi2.start();
sesi3.start();
sesi4.start();
sesi5.start();
sesi6.start();

