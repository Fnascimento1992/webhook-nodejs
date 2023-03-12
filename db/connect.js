const mongoose = require('mongoose')

const MongoConnect = async () =>{
    try {

     const conn = await mongoose.connect(`mongodb://mongo:27017/webhook_db`, {
      useUnifiedTopology: true,    
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
        
    } catch (error) {
        logger.info(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = MongoConnect;