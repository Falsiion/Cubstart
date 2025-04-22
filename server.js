require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // we only show the files that are in this folder, for security purposes (mongoDB password, api key etc)

// We connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// We define the joke schema
const jokeSchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
});
const Joke = mongoose.model('Joke', jokeSchema);

// API endpoints
app.post('/api/jokes', async (req, res) => { // when we send the post API call, this gets the joke text and saves it to our database
    try {
        const joke = new Joke({ text: req.body.text });
        await joke.save();
        res.json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Error saving joke' });
    }
});

app.get('/api/jokes', async (req, res) => { // when we send the get API call, this retrieves the jokes in the database
    try {
        const jokes = await Joke.find().sort({ date: -1 });
        res.json(jokes);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving jokes' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
