const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.weplay.cl/juegos/juegos-ps5.html';

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      const products = $('.product-item-info');

      products.each((index, element) => {
        const title = $(element).find('.product-item-link').text().trim();
        const price = $(element).find('.price-wrapper').attr('data-price-amount');
        const imageUrl = $(element).find('.product-image-photo').attr('src');

        console.log(`Producto ${index + 1}:`);
        console.log('Título:', title);
        console.log('Precio:', price);
        console.log('URL de la imagen:', imageUrl);
        console.log('');
      });
    } else {
      console.log('Error al realizar la solicitud:', response.status);
    }
  })
  .catch(error => {
    console.log('Error al realizar la solicitud:', error);
  });
