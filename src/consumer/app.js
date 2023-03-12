/*
Conectar com o MQ
Consumir a fila e gravar no banco de dados

Logs para criar:
1-quando conectar
2-exibir a mensagem da fila
3-quando gravar a mensagem
4-caso ocorra algum erro no banco de dados


*/

const mongo = require('../db/connect')

//conectado com o banco de dados
mongo()