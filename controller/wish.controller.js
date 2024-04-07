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
            const { name, message } = req.body
            const sql = "insert into wish (name, message) values (?, ?)"
            const [rows, fields] = await pool.query(sql, [name, message])
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