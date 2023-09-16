const express = require('express');
const app = express();
const port = 8080;
app.use('/', express.static('public'));
app.get('/hello', (req, res) => {
    res.send("Hello WOrld!");
});
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})