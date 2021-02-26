const Server = require('./src/Server');
const App = require('./src/App');

function init() {
    this.port = process.env.PORT || 2020;

    const model = new Model();
    const app = new App();
    const server = new Server(this.port, app);
    server.start();
}

init()