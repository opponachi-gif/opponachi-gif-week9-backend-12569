const express = require('express');
const app = express();

const users = [
    { id: 101, name: "John Doe", role: "Admin" },
    { id: 102, name: "Jane Smith", role: "User" },
];

app.get('/', (req, res) => {
    return res.send('สวัสดียามเช้า');
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.status(200).json(user) : res.status(404).send('User not found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});