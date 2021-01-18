// Hold application secrets and config
module.exports = {
    server: {
        mode: 'development', // development || production
        mongodb_connection: 'mongodb://localhost:27017/songlyrics',
        port: '9000'
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