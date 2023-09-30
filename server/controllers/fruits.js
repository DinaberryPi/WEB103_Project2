import { pool } from "../config/database.js"
const getFruits = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM fruits ORDER BY id ASC")
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getFruit = async (req, res) => {
  try {
    const fruitId = req.params.fruitId
    const selectQuery = `
      SELECT name, image, PLU_Code, description
      FROM fruits
      WHERE id=$1
    `
    const results = await pool.query(selectQuery, [fruitId])
    /* const results = await pool.query(`select * from fruits where id=${id} order by id`) */
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
export default {
  getFruits,
  getFruit
}
