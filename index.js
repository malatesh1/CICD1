const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  todos.push(req.body);
  res.status(201).json({ message: 'Todo added!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

