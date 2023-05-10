const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();
const getTime = require("./getTime");

function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}

const absen = async (props) => {
	(async () => {
		let options = {
			args: [
				"--no-sandbox",
				"--disable-setuid-sandbox",
				"--hide-scrollbars",
				"--disable-web-security",
			],
			// headless: false,
		};
		let browser = await puppeteer.launch(options);

		try {
			// open browser
			let page = await browser.newPage();

			// open sipadung
			await page.goto(process.env.SITE, {
				waitUntil: "load",
				timeout: 240000,
			});

			// open login page (ws)
			await page.waitForNavigation({ waitUntil: "load", timeout: 240000 });

			// type username
			await page.waitForSelector("#mantine-r0", { timeout: 60000 });
			await page.type("#mantine-r0", process.env.NIM);

			// type password
			await page.waitForSelector("#mantine-r1", { timeout: 60000 });
			await page.type("#mantine-r1", process.env.PASSWORD);

			// click button
			await page.waitForSelector("button.mantine-Button-root", {
				timeout: 60000,
			});
			await page.click("button.mantine-Button-root");

			// wait for new page to load
			await page.waitForNavigation({ waitUntil: "load", timeout: 240000 });

			try {
				// open absen page
				// await page.waitForSelector("button.mantine-phjzx1");
				// await page.click("button.mantine-phjzx1");

				// click tandai kehadiran
				await page.waitForSelector("button.mantine-1gexd7o");
				await page.click("button.mantine-1gexd7o");

				// click tandai kehadiran
				// await page.waitForSelector("button.mantine-Button-root");
				// await page.click("button.mantine-Button-root");

				// get text mata kuliah
				// await page.waitForSelector("div.mantine-1iw28cd");
				// let text = await page.evaluate(() => {
				// 	let element = document.querySelector("div.mantine-1iw28cd");
				// 	return element.textContent;
				// });

				let { hour, minute, second, day, month, year } = getTime();
				console.log(`${props} Absen Sukses Pada ${hour}:${minute}:${second}`);
				// wait for 10 seconds
				await delay(10000);
			} catch (error) {
				console.log(`${props} tidak ada jadwal absen`);
			}
		} catch (err) {
			console.log(`${props} Absen Gagal :(`);
		} finally {
			await browser.close();
		}
	})();
};

module.exports = absen;
