const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const kits = await connection('kits').select('*')

        return response.json(kits)
    },

    async create(request, response){
        const { nome, componentes } = request.body

        await connection('kits').insert({
            nome,
            componentes
        })
        return response.status(201).json({ nome, componentes })
    },

    async delete(request, response){
        const { id } = request.params

        await connection('kits').where('id', id).select('id').first().delete()

        return response.status(200).send()
    },

    async search(request, response){
        const { id } = request.params
        
        const kit = await connection('kits').where('id', id).first().select('nome', 'componentes')

        const nome = kit.nome
        const componentes = (kit.componentes).split(',')

        let arrayComp = [], cont = 0

        while(arrayComp.length != componentes.length){
            let el = componentes[cont]
            let aux
            aux = await connection('componentes').where('id', el).first().select('nome')
            arrayComp.push(aux.nome)
            cont++
        }

        return response.status(200).json({ nome, arrayComp })
    }
}