module.exports = {

    getValues: async (req,res) => {
        try {
            const db = req.app.get('db')
            const vals = await db.vals.get_values()
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error getting words', error)
            res.status(500).send(error)
        }
    },

    getUserValues: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_id} = req.session.user_id
            const vals = await db.vals.user.get_user_values(user_id)
            res.status(200).send(vals)
        } catch (error) {
            console.log("Error getting user's values", error)
            res.status(500).send(error)
        }
    },

    addValue: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const {user_id} = req.session.user
            const vals = await db.vals.add_value([user_id, id])
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error adding value', error)
            res.status(500).send(error)
        }
    },

    deleteValue: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const vals = await db.vals.delete_value(id)
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error deleting value', error)
            res.status(500).send(error)
        }
    }
}