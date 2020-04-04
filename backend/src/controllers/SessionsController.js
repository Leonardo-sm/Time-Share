const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { username, password } = request.body;

        const user = await connection('users')
            .where('username', username)
            .select('name')
            .first();

        const user_password = await connection('users')
            .where('password', password)
            .select('username')
            .first();

        if (!user) {
            return response.status(400).json({ error: 'The username does not exist' });
        }
        if (!user_password) {
            return response.status(400).json({ error: 'The password is wrong.' })
        }

        return response.json(user);
    }
}