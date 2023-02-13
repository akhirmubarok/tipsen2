const cron = require("node-cron");
const absen = require("./absen");

// UTC

// sesi 1 = 07:20 WIB = 00:20 UTC
const sesi1 = cron.schedule("41 20 * * *", async () => {
	absen();
});

// sesi 2 = 09:00 WIB = 02:00 UTC
const sesi2 = cron.schedule("1 2 * * *", async () => {
    absen();
});

// sesi 3 = 10:00 WIB = 03:00 UTC
const sesi3 = cron.schedule("1 3 * * *", async () => {
    absen();
});

// sesi 4 = 10:50 WIB = 03:50 UTC
const sesi4 = cron.schedule("51 3 * * *", async () => {
    absen();
});

// sesi 5 = 13:20 WIB = 06:20 UTC
const sesi5 = cron.schedule("21 6 * * *", async () => {
    absen();
});

// sesi 6 = 16:00 WIB = 09:00 UTC
const sesi6 = cron.schedule("1 9 * * *", async () => {
    absen();
});

sesi1.start();
sesi2.start();
sesi3.start();
sesi4.start();
sesi5.start();
sesi6.start();

