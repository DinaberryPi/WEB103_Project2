import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
/* converts a file URL to a file path */
//import fruitData from '../data/fruits.js'
import fruitController from '../controllers/fruits.js'
/* Convert the import.meta.url property to a file path and store the result in a variable called __filename */
const __filename = fileURLToPath(import.meta.url)
/* the directory name of the current module file. */
const __dirname = path.dirname(__filename)

const router = express.Router()

/* router.get('/', (req, res) => {
  res.status(200).json(fruitData)
}) */
router.get('/', fruitController.getFruits)
router.get('/:fruitId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/fruit.html'))
})

export default router
