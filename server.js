const express = require('express');
const app = express();
const port = 8080;
const budgetJSON=require('./budget.json');
app.use('/', express.static('public'));
// const budget = {
//     my_budget: [
//     {
//         title: 'Eat out',
//         budget: 500
//     },
//     {
//         title: 'Rent',
//         budget: 900
//     },
//     {
//         title: 'Groceries',
//         budget: 200
//     },
//     {
//         title: 'Investment',
//         budget: 2000
//     },
//     {
//         title: 'Savings',
//         budget: 2500
//     },
//     {
//         title: 'Trips',
//         budget: 1500
//     },
//     {
//         title: 'EMI',
//         budget: 450
//     },
//     {
//         title: 'Miscellaneous',
//         budget: 150
//     },

// ]
// };


app.get('/hello', (req, res) => {
    res.send("Hello WOrld!");
});
app.get('/budget', (req, res) => {
    res.json(budgetJSON);
});
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})