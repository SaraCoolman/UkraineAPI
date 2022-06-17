var fs = require('fs');
//const { Client } = require('pg');

module.exports = {
    host: 'ec2-52-30-75-37.eu-west-1.compute.amazonaws.com',
    user: 'ybhazpjomxdntw',
    password: 'f9b19e6a24c2ddcd8d3678ea61172fd79f5497a9911d165423682301f9744549',
    database: 'd7mvg5r1j697cn',
    port: 5432,
    dialect: 'postgres',
    ssl: {
        rejectUnauthorized: false
       },
    pool: {
        max: 8,
        min: 1,
        acquire: 3000000,
        idle: 100000
    },
    dialect: 'postgres',
};
