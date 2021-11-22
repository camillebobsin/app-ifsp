const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const componentes = await connection('componentes').select('*')

        return response.json(componentes)
    },

    async create(request, response) {
        const nomes = request.body

        nomes.forEach(async el => {
            let nome = el.nome
            await connection('componentes').insert({
                nome
            })
        })
        return response.status(201).json(nomes)
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('componentes').where('id', id).select('id').first().delete()

        return response.status(200).send()
    }
}