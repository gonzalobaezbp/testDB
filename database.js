const mariadb = require('mariadb');

mariadb.createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '123123',
    database: 'DB_TEST'
});

async function getConnection() {
    try {
        const connection = await mariadb.getConnection();
        return connection;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getConnection };