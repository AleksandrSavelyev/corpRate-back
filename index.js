const Server = require('./src/Server');
const App = require('./src/App');
const Model = require('./src/Model')

function init() {
    this.port = process.env.PORT || 2020;

    const model = new Model();
    const app = new App(model);
    const server = new Server(this.port, app);
    server.start();
}

init()