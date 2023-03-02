const winston = require('winston');

// Configurar transportes para registrar os logs
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'logs/app.log' }),
];

// Criar o logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports,
});

module.exports = logger;