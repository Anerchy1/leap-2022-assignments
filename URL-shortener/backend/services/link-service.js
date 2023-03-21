import shortid from "shortid";
import pool from "../configs/mysql-config.js";

export const isValidURL = (url) => {
  const result =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test();
  return result;
};

export const shorten = async (url) => {
  const id = shortid.generate();
  await pool.query(`insert into links values(?,?)`, [id, url]);
  return id;
};

export const findOneById = async (id) => {
  const [result] = await pool.query(`select * from links where id=?`, [id]);
  return result.length ? result[0] : null;
};
