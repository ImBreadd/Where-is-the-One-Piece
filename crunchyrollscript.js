const axios = require('axios');
const cheerio = require('cheerio');

async function completedEpisode(){

    const url = 'https://www.crunchyroll.com/history'

    try{
        const response = await axios.get(url, {
            headers: {
                'User-Agent' : 'Mozzila/5.0'
            }
        });

        const $ = cheerio.load(response.data);
        const episodes = $('.episode-title');
        for (let episode of episodes){
            const title = $(episode).text();
            if (title.includes ('One Piece')){
                return title;
            }
        }
    } catch (error){
        console.error("Error fetching latest episode data", error);
    }
    return null;
}

module.exports = { completedEpisode};