const mongoose = require('mongoose')

const MongoConnect = async () =>{
    try {

     const conn = await mongoose.connect(`mongodb://localhost:27017/meu-banco-de-dados`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = MongoConnect;