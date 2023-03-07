import pool from "../config/mysql-config.js";
import { nanoid } from "nanoid";

export const getUsers = async () => {
  const [result] = await pool.query("SELECT * FROM user");
  return result;
};

export const getUser = async (id) => {
  const [result] = await pool.query(`SELECT * FROM user where userId = ?`, [
    id,
  ]);
  const user = result.length ? result[0] : null;
  return user;
};

export const createUser = async (user) => {
  const id = nanoid();
  try {
    await pool.query(
      `insert into user (userId,first_name,last_name,birth_date,email,phone,password,imageUrl,createdAt) values (?,?,?,?,?,?,?,?,?)`,
      [
        id,
        user.first_name,
        user.last_name,
        user.birth_date,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
      ]
    );
    const result = await getUser(id);
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const [result] = await pool.query(`delete from user where userId=?`, [id]);
    return id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateUser = async (
  first_name,
  last_name,
  birth_date,
  email,
  phone,
  password,
  imageUrl,
  id
) => {
  try {
    await pool.query(
      `update user set first_name=?, last_name=?, birth_date=?, email=?, phone=?, password=?, imageUrl=? where userId=?`,
      [first_name, last_name, birth_date, email, phone, password, imageUrl, id]
    );
    const result = await getUser(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};
