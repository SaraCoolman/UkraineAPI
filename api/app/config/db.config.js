var fs = require('fs');


module.exports = {
    host: 'localhost',
    user: 'postgres',
    password: 'Admin123456',
    database: 'UkraineLodgeService',
    port: 5432,
    dialect: 'postgres',
    //ssl: { ca: fs.readFileSync("./cert/DigiCertGlobalRootCA.crt.pem") },
    pool: {
        max: 8,
        min: 1,
        acquire: 3000000,
        idle: 100000
    },
    dialect: 'postgres',
};
