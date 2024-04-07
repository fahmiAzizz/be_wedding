const pool = require("../database/index")
const wishController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from wish")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const {id_wish, name, message, created_at } = req.body
            const sql = "insert into wish (id_wish, name, message , created_at) values (?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [id_wish, name, message, created_at])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = wishController