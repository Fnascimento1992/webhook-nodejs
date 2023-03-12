require("dotenv").config()
const amqp = require('amqplib')
const logger = require("../logs/logger")

async function conn() {
    try {
        await amqp.connect(process.env.MQ_STRING)
        logger.info("Conectado ao RabbitMQ")

    } catch (error) {
        logger.info(error.message);
        setTimeout(conn, process.env.MQ_RECONECT)
    }
}

async function createChannelAndQueue() {
    try {
        const connect = await amqp.connect(process.env.MQ_STRING)
        const channel = await connect.createChannel()

        await channel.assertExchange(process.env.MQ_EXCHANGE, 'direct', { durable: true })
        logger.info(' Exchange Criada com sucesso')

        await channel.assertQueue(process.env.MQ_QUEUE, { durable: true })
        logger.info(' Queue Criada com sucesso')

        await channel.bindQueue(process.env.MQ_QUEUE, process.env.MQ_EXCHANGE,'wb', {durable: true})
        logger.info('Bind realizado com sucesso')

        
        await channel.close()
        await connect.close()


    } catch (error) {
        logger.info(error.message);
    }

}

async function publishRequest(content) {
    try {
        const connect = await amqp.connect(process.env.MQ_STRING)
        const channel = await connect.createChannel()
        await channel.assertExchange(process.env.MQ_EXCHANGE, 'direct', { durable: true })
        await channel.publish(process.env.MQ_EXCHANGE,'wb', Buffer.from(JSON.stringify(content)))
        logger.info('Request publicada com sucesso')

        await channel.close()
        await connect.close()


    } catch (error) {
        logger.info(error.message);
    }

}



module.exports = { conn, createChannelAndQueue, publishRequest }
