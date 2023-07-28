const axios = require('axios');//to use http get
const cheerio = require('cheerio');

const topics = [];

async function getPage(){
    const res = await axios.get('https://pinghsieh.github.io/ioc535526_2022fall.html');
    const $ = cheerio.load(res.data);
    const table = $("table tbody tr").each((i,el1) => {
        let counter = 0;
        const trs = $(el1).find("td").each((j,el2) => {
            if (j == 3 ){
                const topic = $(el2).html();
                if (topic != ' Lecture  ' && topic != ' Topics '){
                    topics.push(topic);
                }
            }
            counter+=1;
        });
    });
    console.log(topics)
}

getPage();
