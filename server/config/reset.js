import fruitData from "../data/fruits.js";
import { pool } from "./database.js";
import "./dotenv.js";

const createFruitsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS fruits;

    CREATE TABLE IF NOT EXISTS fruits (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        PLU_Code INTEGER NOT NULL,
        image VARCHAR(455) NOT NULL,
        description TEXT NOT NULL
    )
`;
  try {
    await pool.query(createTableQuery);
    console.log("🎉 fruits table created successfully");
  } catch (err) {
    console.error("⚠️ error creating fruits table", err);
  }
};
//Load the data into the table
const seedFruitsTable = async () => {
  await createFruitsTable()
  fruitData.forEach((fruit) => {
    const insertQuery = {
      text: "INSERT INTO fruits (id, name, image, PLU_Code, description) VALUES ($1, $2, $3, $4, $5)",
    };
    const values = [
      fruit.id,
      fruit.name,
      fruit.image,
      fruit.PLU_Code,
      fruit.description,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.log(`error: ${err}`);
        return;
      }
      console.log(`${fruit.name} inserted`);
    });
  });
};

seedFruitsTable();
