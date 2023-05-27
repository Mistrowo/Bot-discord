const axios = require('axios');
const cheerio = require('cheerio');

async function Scrapper(message) {
  if (message.content === '!juegos') {
    const baseUrl = 'https://www.weplay.cl/juegos/juegos-ps5.html?p=';

    try {
      let pageIndex = 1;
      let hasMorePages = true;
      let productCount = 0;

      while (hasMorePages) {
        const url = baseUrl + pageIndex;
        const response = await axios.get(url);

        if (response.status === 200) {
          const $ = cheerio.load(response.data);
          const products = $('.product-item-info');

          if (products.length > 0) {
            products.each(async (index, element) => {
              const title = $(element).find('.product-item-link').text().trim();
              const price = parseFloat($(element).find('.price-wrapper').attr('data-price-amount'));
              const imageUrl = $(element).find('.product-image-photo').attr('src');

              if (price < 20000) {
                productCount++;
                const productInfo = `Producto ${productCount} (Página ${pageIndex}):\n` +
                                    `Título: ${title}\n` +
                                    `Precio: ${price}\n` +
                                    `URL de la imagen: ${imageUrl}\n\n`;

                await message.channel.send(productInfo);
              }
            });
          } else {
            hasMorePages = false;
          }
        } else {
          message.channel.send('Error al realizar la solicitud: ' + response.status);
          hasMorePages = false;
        }

        pageIndex++;
      }
    } catch (error) {
      message.channel.send('Error al realizar la solicitud: ' + error);
    }
  }
};

module.exports = {
  Scrapper
}
