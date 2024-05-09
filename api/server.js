const express = require("express");

const accountsRouter = require('./accounts/accounts-router')

const server = express();
server.use('/api/accounts', accountsRouter);

server.use(express.json());

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server;
