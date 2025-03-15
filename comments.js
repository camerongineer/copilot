// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getComments, addComment } = require('./commentController');
const { authenticateToken } = require('./authMiddleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get all comments for a post
app.get('/api/comments/:postId', authenticateToken, getComments);

// Add a new comment to a post
app.post('/api/comments/:postId', authenticateToken, addComment);

module.exports = app;