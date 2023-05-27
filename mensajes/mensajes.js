const { MessageActionRow, MessageButton } = require('discord.js');
const YouTube = require('youtube-api-v3-search');

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

 async function Musica(message){
    if (message.content.toLowerCase().startsWith('!buscar')) {
      const query = message.content.slice(7).trim();
      if (query) {
        try {
          const response = await YouTube.searchVideos(config.youtubeAPIKey, { q: query, maxResults: 5 });
          const videos = response.items;
  
          // Tomar el primer video encontrado
          if (videos.length > 0) {
            const firstVideo = videos[0];
            const videoURL = `https://www.youtube.com/watch?v=${firstVideo.id.videoId}`;
            message.channel.send(`Aquí está el primer resultado de la búsqueda: ${videoURL}`);
          } else {
            message.channel.send('No se encontraron videos para esa búsqueda.');
          }
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
          message.channel.send('Se produjo un error al buscar el video.');
        }
      } else {
        message.channel.send('Por favor, proporciona un término de búsqueda válido.');
      }
    }
}
  

module.exports = {
  Hola,
  Link,
  Musica
};
