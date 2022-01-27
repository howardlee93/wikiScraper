const puppeteer = require('puppeteer');
const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the term you want to scrape ', (searchTerm) => {
    search(searchTerm);
    rl.close();
});


const search = async (term) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://en.wikipedia.org/wiki/Operation_Grapple', {waitUntil : 'domcontentloaded'});
    // await page.goto('https://en.wikipedia.org/wiki/Cimoliopterus', {waitUntil : 'domcontentloaded'});

    await page.goto(`https://en.wikipedia.org/wiki/${term}`, {waitUntil : 'domcontentloaded'});

    const imageBox = await page.$eval('#mw-content-text > div.mw-parser-output > table.infobox > tbody > tr:nth-child(2) > td > a > img',
        el =>  el.getAttribute('src')
    );

    const info =  await page.$$eval('#mw-content-text > div.mw-parser-output > table.infobox > tbody tr', table => {
        // let tableRow =[];
        // for (let i = 1; i <table.length; i++){
        //     tableRow.push(table[i]);
        // }
        // return tableRow;

        return table[2].innerText;
    });

    console.log("image", imageBox);

    console.log("info", info);

   await page.pdf({ path: `res/${term}.pdf`, format: 'a4' });

    await browser.close();
};
