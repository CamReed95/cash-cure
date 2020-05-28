const bcrypt = require('bcrypt');

module.exports = {

    login: async (req, res) => {
        try {
            const db = req.app.get('db')
            let {email, password} = req.body
            let users = await db.auth.select_user(email)
            let user = users[0]

            if (!user) {
                return res.status(401).send('Incorrect email or password')
            }

            let isAuthenticated = bcrypt.compareSync(password, user.hashed_password)
            if (!isAuthenticated) {
                return res.status(401).send('Incorrect email or password')
            }

            delete user.password
            req.session.user = user
            res.send(req.session.user)

        } catch (error) {
            console.log('An error ocurred logging in', error)
            res.status(500).send(error)
        }
    },
    
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            let {email, password} = req.body
            let users = await db.auth.select_user(email)
            let user = users[0]

            if (user) {
                return res.status(409).send('That email is already in use')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            let response = await db.auth.add_user([email, hash])
            let newUser = response[0]

            delete newUser.password
            req.session.user = newUser
            res.send(req.session.user)

        } catch (error) {
            console.log('An error ocurred registering', error)
            res.status(500).send(error)
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    
    userSession: (req, res) => {
        console.log('~hit from Redux~')
    },

    updatePassword: async (req, res) => {
        // console.log(req.session)
        try {
            const db = req.app.get('db')
            let {password} = req.body
            const {user_id} = req.session.user
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            let response = await db.auth.update_user([hash, user_id])
            let user = response[0]
            
        } catch (error) {
            console.log('An error ocurred updating the password', error)
            res.status(500).send(error)
        }
    }
}