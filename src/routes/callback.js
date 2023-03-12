const express = require("express")
const token = require("../middleware/token")
const logger = require("../../logs/logger")
const rabbitmq = require("../../rabbit_mq/connect_rabbit")
const router = express.Router()
const bodyParser = require("body-parser")

router.use(bodyParser.json())

router.post("/v1/callback", (req, res) => {
  rabbitmq.conn()
  try {
    const content = req.body
    res.send(req.body);

    rabbitmq.createChannelAndQueue()
    logger.info("Acesso na rota");
    
    rabbitmq.publishRequest(content)

    
  } catch (error) {

    console.log('Erro ao conectar', error.message)
    
  }  
  
  })

module.exports = router
