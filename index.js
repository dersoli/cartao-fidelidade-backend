const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.sendStatus(200))
  .get('/lojas', (req, res) => {
    res.send(JSON.stringify({
      lojas: [
        {
          id: 1,
          nome: "Babearia Salve Man"
        },
        {
          id: 2,
          nome: "Restaurante do Seu Zé"
        },
        {
          id: 3,
          nome: "Padaria 9 de Julho"
        }
      ]
    }));
  })
  .get('/lojas/:id', (req, res) => {
    res.send(JSON.stringify({
      total: 12,
      preenchidos: 8
    }));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
