module.exports = {

    // getValues: async (req,res) => {
    //     try {
    //         const db = req.app.get('db')
    //         const vals = await db.income.get_values()
    //         res.status(200).send(vals)
    //     } catch (error) {
    //         console.log('Error getting values', error)
    //         res.status(500).send(error)
    //     }
    // },

    getUserValues: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {user_id} = req.session.user
            const vals = await db.income.get_values(user_id)
            res.status(200).send(vals)
        } catch (error) {
            console.log("Error getting user's values", error)
            res.status(500).send(error)
        }
    },

    addValue: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {expected, actual} = req.body
            const {user_id} = req.session.user
            const vals = await db.income.add_value([user_id, expected, actual])
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error adding value', error)
            res.status(500).send(error)
        }
    },

    editValue: async (req, res) => { // double check this function 
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const {expected, actual} = req.body
            const vals = await db.income.edit_value([expected, actual, id]) 
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error editing value', error)
            res.status(500).send(error)
        }
    },

    deleteValue: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {id} = req.params
            const vals = await db.income.delete_value(id)
            res.status(200).send(vals)
        } catch (error) {
            console.log('Error deleting value', error)
            res.status(500).send(error)
        }
    }
}