const puppeteer = require('puppeteer');
const argv = require('yargs')
	.option('url', {describe: 'the url for downloading'})
	.option('path', {describe: 'path to download the file to'})
	.help()
	.argv;


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(argv.url, {waitUntil: 'networkidle'});
  const buffer = await page.pdf({path: argv.path, format: 'A4'});

  process.stdout.write(buffer)
  browser.close();
})();
