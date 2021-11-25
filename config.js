// Hold application secrets and config
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;
// const PORT = 9000;
// const MONGO_URI = 'mongodb://songLyricsUser:songLyricsUser@song_lyrics_mongo:27017/songLyricsService';
module.exports = {
    server: {
        mode: 'development', // development || production
        // mongodb_connection: 'mongodb://localhost:27017/songlyrics',
        mongodb_connection: MONGO_URI,
        port: PORT
    },
    // client: {
    //     development: {
    //         port: '9000',
    //         display_error: false
    //     },
    //     production: {
    //         port: '9000',
    //         display_error: true
    //     },
    //     test: {
    //         port: '9010',
    //         display_error: true
    //     }
    // },
    test: {
        mode: 'development', // development || production
        mongodb_connection: 'mongodb://localhost:27017/songlyrics_test'
    }
};