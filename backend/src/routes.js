const express = require('express')
const AlunoController = require('./controllers/AlunoController')
const ComponenteController = require('./controllers/ComponenteController')
const KitController = require('./controllers/KitController')

const routes = express.Router()

routes.get('/alunos', AlunoController.index)
routes.post('/alunos', AlunoController.create)
routes.post('/login', AlunoController.login)

routes.get('/componentes', ComponenteController.index)
routes.post('/componentes', ComponenteController.create)
routes.delete('/componentes/:id', ComponenteController.delete)

routes.get('/kits', KitController.index)
routes.post('/kits', KitController.create)
routes.delete('/kits/:id', KitController.delete)
routes.get('/kits/:id', KitController.search)

module.exports = routes