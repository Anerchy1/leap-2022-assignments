import pool from "../config/mysql-config.js";

export const getProducts = async () => {
  const [result] = await pool.query("SELECT * FROM product");
  return result;
};

export const createProduct = async (name, imgUrl, createdAt) => {
  const [result] = await pool.query(
    `insert into product (name, imgUrl, createdAt) values (?,?,?)`,
    [name, imgUrl, createdAt]
  );
  return result;
};
