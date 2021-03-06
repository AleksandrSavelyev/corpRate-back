const http = require('http');

class Server {
    constructor(port, app) {
        this._port = port;
        this._server = http.createServer(app.getApp());
    }

    start = () => this._server.listen(this._port) && console.log('SERVER HAS BEEN STARTED ON PORT', this._port);
}

module.exports = Server;