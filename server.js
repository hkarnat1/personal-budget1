const express = require('express');
const app = express();
const port = 8080;
app.use('/', express.static('public'));
const budget = {
    my_budget: [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    },
]
};


app.get('/hello', (req, res) => {
    res.send("Hello WOrld!");
});
app.get('/budget', (req, res) => {
    res.json(budget);
});
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})