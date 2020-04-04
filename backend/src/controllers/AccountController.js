const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { username, name, email, gender, password } = request.body;

        const balance = 2.0;
        const description = "";
        const evaluation = 5.0;

        await connection('users').insert({
            username,
            name,
            email,
            gender,
            balance,
            description,
            evaluation,
            password
        })

        return response.send("Usuario cadastrado com sucesso.");
    }
}