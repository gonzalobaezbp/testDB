const express = require('express');
const app = express();

const pool = require('./database');


app.get('/test', async (req, res) => {
    try {
        const myConnection = await pool.getConnection();
        const consulta = 'SELECT * FROM PERSON_TEST';
        const result = await myConnection.query(consulta);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.listen(2000, () => {
    console.log('Listening:',2000);
});