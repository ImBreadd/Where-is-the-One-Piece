const axios = require('axios');
const cheerio = require('cheerio');

async function completedEpisde(){

    const url = 'https://www.crunchyroll.com/history'

    const response = await axios.get(url, {
        headers: {
            'User-Agent' : 'Mozzila/5.0'
        }
    });

}