const Twitter = require('twitter-lite');

async function tweetCompletedEpisode(episodeNumber){
    const cleint = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });
    const message = "Just finished ${episodeNumber}, still haven't found the One Piece";
    try{
        await Client.post('status/update', {stats: message});
        console.log("Tweeted:", message)
    } catch (error){
        console.error("Error posting tweet:", error)
    }
}

module.exports = {tweetCompletedEpisode};