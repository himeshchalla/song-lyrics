const app = require('./server/server');
const config = require('./config');

app.listen(config.server.port, () => {
  console.log('Listening on port :'+config.server.port);
});
