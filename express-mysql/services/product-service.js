import { nanoid } from "nanoid";
import slugify from "slugify";
import pool from "../config/mysql-config.js";

export const getProducts = async () => {
  const [result] = await pool.query(
    "SELECT productId as id , name, remaining FROM product"
  );
  return result;
};
export const getOneProduct = async (id) => {
  const [result] = await pool.query(
    `SELECT * FROM product where productId =?`,
    [id]
  );
  return result.length ? result[0] : null;
};
export const createProduct = async (product) => {
  const id = nanoid();
  try {
    await pool.query(
      `insert into product (productId,name,slug,description,imageUrl,text,price,discountPrice,remaining,readCount,rating,created,createdAt) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        id,
        product.name,
        slugify(),
        // product.slug,
        product.description,
        product.imageUrl,
        product.text,
        product.price,
        product.discountPrice,
        product.remaining,
        product.readCount,
        product.rating,
        product.created,
        new Date(),
      ]
    );
    const result = getOneProduct(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const [result] = await pool.query(`delete from product where productId=?`, [
      id,
    ]);
    return id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateProduct = async (
  name,
  slug,
  description,
  imageUrl,
  text,
  price,
  discountPrice,
  remaining,
  readCount,
  rating,
  updated,
  id
) => {
  try {
    await pool.query(
      `update product set name=?, slug=?, description=?,imageUrl=?,text=?,price=?,discountPrice=?,remaining=?,readCount=?,rating=?, updated=?,updatedAt=? where productId=?`,
      [
        name,
        slug,
        description,
        imageUrl,
        text,
        price,
        discountPrice,
        remaining,
        readCount,
        rating,
        updated,
        new Date(),
        id,
      ]
    );
    const result = getOneProduct(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};
