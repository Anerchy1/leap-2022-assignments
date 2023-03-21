import { nanoid } from "nanoid";
import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query(
    "SELECT *, categoryId as id  FROM category"
  );
  return result;
};
export const getOneOfCategories = async (id) => {
  const [result] = await pool.query(
    `SELECT * FROM category where categoryId =?`,
    [id]
  );
  return result.length ? result[0] : null;
};
export const createCategories = async (category) => {
  const id = nanoid();
  try {
    await pool.query(
      `insert into category (categoryId,name,slug,productCount, parent_id,created,createdAt) values (?,?,?,?,?,?,?)`,
      [
        id,
        category.name,
        category.slug,
        category.productCount,
        category.parent_id,
        category.created,
        new Date(),
      ]
    );
    const result = getOneOfCategories(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteCategories = async (id) => {
  try {
    const [result] = await pool.query(
      `delete from category where categoryId=?`,
      [id]
    );
    return id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateCategories = async (
  name,
  slug,
  productCount,
  updated,
  id
) => {
  try {
    await pool.query(
      `update category set name=?, slug=?, productCount=?, updated=?,updatedAt=? where categoryId=?`,
      [name, slug, productCount, updated, new Date(), id]
    );
    const result = getOneOfCategories(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};
