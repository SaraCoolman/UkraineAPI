var fs = require('fs');


module.exports = {
    host: 'ukrainelodgeservice.mysql.database.azure.com',
    user: 'user1',
    password: 'Admin123456',
    database: 'ukrainelodgeservice',
    port: 3306,
    dialect: 'mysql',
    ssl: { ca: fs.readFileSync("./cert/DigiCertGlobalRootCA.crt.pem") },
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 100000
    },
    dialect: 'mysql',
};
