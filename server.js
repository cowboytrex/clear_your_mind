const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const notes = [
  { id: 1, title: 'First Note', content: 'This is the first note' },
  { id: 2, title: 'Second Note', content: 'This is the second note' },
];

app.get('/api/notes', (req, res) => {
  console.log('GET /api/notes'); // Logging to confirm the endpoint is hit
  res.json(notes);
});

const PORT = 8080; // Ensure this matches the port you're accessing
app.listen(PORT, '192.168.43.12', () => {
  console.log(`Server running on http://192.168.43.12:${PORT}`);
});
