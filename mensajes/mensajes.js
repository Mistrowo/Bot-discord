

function Hola(message) {
  if (message.content.toLowerCase() === 'hola') {
    message.channel.send('wena klo');
  }
}


module.exports = {
  Hola
  
};
