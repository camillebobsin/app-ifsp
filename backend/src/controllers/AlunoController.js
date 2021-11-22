const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response) {
    const alunos = await connection('alunos').select('*')

    return response.json(alunos)
},

    async create(request, response) {
        const { nome, prontuario, email, permissao } = request.body
        let { senha } = request.body

        const exist = Boolean(await connection('alunos').where('prontuario', prontuario).select().first())

        if(!exist){
            senha = crypto.createHash('md5').update(senha).digest('hex')

            await connection('alunos').insert({
                nome,
                prontuario,
                email,
                senha,
                permissao
            })
            return response.status(201).json({ prontuario, senha })
        } else {
            return response.status(400).json({ erro: 'prontuario já cadastrado' })
        }
    },

async login(request, response) {
        const { prontuario } = request.body
        let { senha } = request.body
        console.log(request.body)

        const exist = Boolean(await connection('alunos').where('prontuario', prontuario).select().first())

        if(exist){
            senha = crypto.createHash('md5').update(senha).digest('hex')

            const aluno = await connection('alunos').where('prontuario', prontuario).first()

            if(aluno.senha == senha) {
                console.log("1")
                return response.status(201).json({ status: 'ok', aluno })
            }

            console.log("2")
            return response.status(200).json({ status: 'senha invalida' })
        } else {
            console.log("3")
            return response.status(200).json({ status: 'prontuario não cadastrado' })
        }
    }
}
