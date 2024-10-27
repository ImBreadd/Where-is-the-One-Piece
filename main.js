const { completedEpisode} = require ('./crunchyrollScript');
const { tweetCompletedEpisode} = require ('/.twitterScript');

async function run(){

    const episodeTitle = await completedEpisode();

    if (episodeTitle){
        await tweetCompletedEpisode();
    } else{
        console.log("Could not get latest episode.");
    }
}
setInterval(run, 3600000)