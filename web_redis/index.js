const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        let rsp = "";
        rsp = 'Numbers of visits are ' + visits;
        if (visits == 'NaN') {
            rsp += 'visits is not number so set to 0';
            visits = '0';
            rsp += 'visits:' + visits + ' parseInt:' + parseInt(visits).toString();
        }
        client.set('visits', parseInt(visits) + 1);
        res.send(rsp);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});