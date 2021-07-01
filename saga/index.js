const express = require('express');
const routes = require('./settings/routes.js');

const port = 5000;
const app = express();

app.use(express.json());
routes(app);

async function startApp() {
    try {        
        app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port));
    } catch (e) {
        console.log(e);
    }
}
startApp();
