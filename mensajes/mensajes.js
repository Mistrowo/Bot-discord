const { MessageActionRow, MessageButton } = require('discord.js');

function Hola(message) {
  if (message.content.toLowerCase() === 'hola') {
    message.channel.send('wena klo');

  } else if (message.content.toLowerCase() === 'fome') {
    message.channel.send('Saco Wea Culiao');
  } else if (message.content.toLowerCase() === 'gracias') {
    message.channel.send('De nada waxito ');
  } 
}

function Link(message) {
  if (message.content.toLowerCase() === 'boton') {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle('LINK')
        .setLabel('Hola')
        .setURL('https://github.com/Mistrowo') // Reemplaza con tu enlace deseado
        .setEmoji('😈')
    );

    message.channel.send({  components: [row] });
  }
}

module.exports = {
  Hola,
  Link
};
