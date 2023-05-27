//requerimientos
const {Client,EmbedBuilder}= require('discord.js')
const config=require('./config.json')
//cliente

const cliente = new Discord.Client({
    intents: 3276799
     
  });


//contenido
cliente.on('ready',async(client)=>{
    console.log('Iniciando waxito')
})

//comunicacion
cliente.login(config.token)

//Mensajes
cliente.on("messageCreate", async mensaje =>{
    if (mensaje.content="hola" || "Hola") {
        mensaje.channel.send("wena klo")
    }
})
cliente.on("messageCreate", async mensaje =>{
    if(mensaje.content = "lembed"){
        const embed= new EmbedBuilder()
        .setTitle("Titulo")
        .setDescription("Alex")
        .setAuthor({
            name: "poto"
        })
        //.setThumbnail
        //setImage
        .setFooter({
            text:"nooooo"
        })
        .setTimestamp()
        .setFields({
            name:"Nombre",
            value:"Antonio"
        },{
            name:"Nombre",inline:true,
            value: "Alex", inline:false
        })
        .setColor("ffff")
    }
})

