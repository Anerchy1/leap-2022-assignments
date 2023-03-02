import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategories = async (name, slug, imgUrl) => {
  const [result] = await pool.query(
    `insert into category (name,slug,imgUrl) values (?,?,?)`,
    [name, slug, imgUrl]
  );
  return result;
};

export const deleteCategories = async (id) => {
  const [result] = await pool.query(`delete from category where id= ${id}`);
  return result;
};

export const updateCategories = async (name, slug, imgUrl, id) => {
  const [result] = await pool.query(
    `update category set name='${name}', slug='${slug}', imgUrl='${imgUrl}' where id= ${id}`
  );
  return result;
};
export const getOneOfCategories = async (id) => {
  const [result] = await pool.query(`SELECT * FROM category where id = ${id}`);
  return result;
};
