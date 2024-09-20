require('dotenv').config()
const { token } = require("./config.json");
const express = require('express');
const mongoose = require('mongoose');  // Import mongoose
const { Client, IntentsBitField, ActivityType } = require('discord.js');

// Disable strictQuery deprecation warning
mongoose.set('strictQuery', false);

// MongoDB connection string
const mongoURI = 'Input mongodb client link';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.listen(3000);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
