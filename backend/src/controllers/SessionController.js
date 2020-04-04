
module.exports = {
    async create(request, response) {
        const { username, password } = request.body;

        const username = await connection('username')
            .where('username', username)
            .select('')
            .first();

        if (!username) {
            return response.status(400).json({ error: 'The username does not exist' });
        }
        if (!password) {
            return response.status(400).json({ erro: 'The password is wrong.' })
        }
    }
}