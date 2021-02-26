const path = require('path');
const api = require('./restAPI');
const express = require('express');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));
        this._app.use(this.headerCors);

        this._app.post('/log-in', this.onLogIn)
        this._app.post('/add-city', this.onAddCity)
        this._app.post('/add-branch', this.onAddBranch)
        this._app.post('/add-country', this.onAddCountry)
        this._app.post('/get-all-users', this.onGetUsers)
        this._app.post('/register-user', this.onRegister)
        this._app.post('/add-departament', this.onAddDepartament)
        this._app.post('/get-comment-tuday', this.onGetCommentTuday)
        this._app.post('/get-comment-by-date', this.onGetCommentByDate)
        this._app.post('/get-raiting-curent-mounth', this.onGetRaitingCurentMounth)
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    }

    onGetUsers = async (req, res) => {
        const data = await api.getAllUsers(req.body);

        res.json(data);
        res.end();
    }

    onLogIn = async (req, res) => {
        const data = await api.logIn(req.body);
        
        res.json(data);
        res.end();
    }

    onRegister = async (req, res) => {
        const data = await api.register(req.body);

        res.json(data);
        res.end();
    }

    onGetCommentTuday = async (req, res) => {
        const data = await api.getCommentUserTuday(req.body);

        res.json(data);
        res.end();
    }
    
    onGetCommentByDate = async (req, res) => {
        const data = await api.getCommentUserByDate(req.body);

        res.json(data);
        res.end();
    }

    onGetRaitingCurentMounth = async (req, res) => {
        const data = await api.getRaitingCurentMounth(req.body);

        res.json(data);
        res.end();
    }

    onAddCountry = async (req, res) => {
        const data = await api.addCountry(req.body);

        res.json(data);
        res.end();
    }

    onAddCity = async (req, res) => {
        const data = await api.addCity(req.body);

        res.json(data);
        res.end();
    }

    onAddBranch = async (req, res) => {
        const data = await api.addBranch(req.body);

        res.json(data);
        res.end();
    }

    onAddDepartament = async (req, res) => {
        const data = await api.addDepartment(req.body);

        res.json(data);
        res.end();
    }

    getApp = () => this._app;
}

module.exports = App;