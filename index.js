const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
app.get('/', (req, res) => res.send('Hollow SMP Bot is Alive!'));
app.listen(process.env.PORT || 3000);

function createBot() {
  const bot = mineflayer.createBot({
    host: 'hollows1.mcsh.gg', // Yahan apna server IP daalein
    port: 25565, // Agar koi alag port hai toh woh daalein
    username: 'Hollow_Guard', // Bot ka naam
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot server mein join ho gaya!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Bot disconnect ho gaya, 10 second mein wapas judega...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => console.log('Error:', err));
}

createBot();
