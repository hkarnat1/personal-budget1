const express = require('express');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });
const uri = "mongodb://localhost:27017/budget";
mongoose.connect(uri);
const app = express();
const port = 3001;
app.use(express.json())
// const budgetJSON=require('./budget.json');
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

const budgetSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    relatedValue: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
      validate: /^#([0-9a-fA-F]{6})$/,
    },
  });
  const budget_data = mongoose.model('budget_data', budgetSchema);

app.get('/api/fetchBudget', async(req, res) => {
    const budget = await budget_data.find();
    res.json(budget);
});

app.post('/api/addBudget', async (req, res) => {
    // const budget_data = new my_budget({
    //     title: req.body.title,
    //     budget: req.body.budget
    // })
    try{
    const { title, relatedValue, color } = req.body;
    const budget_item = new budget_data({ title, relatedValue, color });
    const savedEntry = await budget_item.save();
    res.json(savedEntry);
    }
    catch(error) {
        res.status(500).send(error);
    }
    
  });
app.get('/hello', (req, res) => {
    res.send("Hello WOrld!");
});
// app.get('/budget', (req, res) => {
//     res.json(budgetJSON);
// });
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})