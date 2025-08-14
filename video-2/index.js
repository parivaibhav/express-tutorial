const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to first route"); // when request on this route then return this message
})

//about route
app.get('/about', (req, res) => {
    res.send('Welcome to about route');
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

