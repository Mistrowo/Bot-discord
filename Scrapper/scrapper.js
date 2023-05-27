const axios = require('axios');
const cheerio = require('cheerio');


  
  async function Scrapper(message) {
    if (message.content === '!juegos') {
      const url = 'https://www.weplay.cl/juegos/juegos-ps5.html';
  
      try {
        const response = await axios.get(url);
  
        if (response.status === 200) {
          const $ = cheerio.load(response.data);
          const products = $('.product-item-info');
          let result = '';
  
          products.each((index, element) => {
            const title = $(element).find('.product-item-link').text().trim();
            const price = $(element).find('.price-wrapper').attr('data-price-amount');
            const imageUrl = $(element).find('.product-image-photo').attr('src');
  
            result += `Producto ${index + 1}:\n`;
            result += `Título: ${title}\n`;
            result += `Precio: ${price}\n`;
            result += `URL de la imagen: ${imageUrl}\n\n`;
          });
  
          message.channel.send(result);
        } else {
          message.channel.send('Error al realizar la solicitud: ' + response.status);
        }
      } catch (error) {
        message.channel.send('Error al realizar la solicitud: ' + error);
      }
    }
  };
  

  module.exports={
    Scrapper
  }