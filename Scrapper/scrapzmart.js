const axios = require('axios');
const cheerio = require('cheerio');

async function Scrapper2(message) {
  if (message.content === '!zmart') {
    try {
      const url = 'https://www.zmart.cl/Relampagos';
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const ps5Games = [];

      // Buscar en la sección de "Relámpagos"
      $('.relampago').each((i, element) => {
        const title = $(element).find('.BoxProductoNombre').text().trim();
        const price = $(element).find('.BoxProductoPrecio').text().trim();
        const lowerCaseTitle = title.toLowerCase();

        if (lowerCaseTitle.includes('ps5') && !lowerCaseTitle.includes('consola') && !lowerCaseTitle.includes('accesorio')) {
          ps5Games.push({
            title,
            price
          });
        }
      });

      // Enviar los resultados a través del mensaje
      if (ps5Games.length > 0) {
        let responseMessage = 'Juegos de PS5 en Relámpagos de Zmart:\n';
        ps5Games.forEach(game => {
          responseMessage += `\n${game.title} - ${game.price}`;
        });
        message.channel.send(responseMessage);
      } else {
        message.channel.send('No se encontraron juegos de PS5 en Relámpagos de Zmart.');
      }
    } catch (error) {
      console.error(`Error al obtener la página: ${error}`);
      message.channel.send('Hubo un error al obtener la información de Zmart.');
    }
  }
}



module.exports={
    Scrapper2
}