// bot.js

const { Client } = require('discord.js');
const config = require('./config.json');
const { Hola, Link,Musica } = require('./mensajes/mensajes');

const cliente = new Client({
  intents: 3276799
});

cliente.on('ready', () => {
  console.log('Iniciando waxito');
});

cliente.login(config.token);

cliente.on('messageCreate', async (message) => {
  Hola(message);
  Link(message);
  Musica(message)
 
  
});
