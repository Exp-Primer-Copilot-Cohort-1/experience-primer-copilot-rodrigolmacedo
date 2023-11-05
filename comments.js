// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.json());

// Use middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Create comments array
const comments = [
  {
    username: 'alice',
    text: 'Comment 1',
    timestamp: new Date(),
  },
  {
    username: 'bob',
    text: 'Comment 2',
    timestamp: new Date(),
  },
];

// GET /comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  // Get username and text from request body
  const username = req.body.username;
  const text = req.body.text;

  // Create timestamp
  const timestamp = new Date();

  // Create new comment object
  const comment = {
    username: username,
    text: text,
    timestamp: timestamp,
  };

  // Add comment to comments array
  comments.push(comment);

  // Send back comment
  res.send(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

