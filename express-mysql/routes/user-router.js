import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getUsers());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  res.json(await getUser(id));
});

router.post("/", async (req, res) => {
  const {
    first_name,
    last_name,
    birth_date,
    email,
    phone,
    password,
    imageUrl,
  } = req.body;
  res.json(
    await createUser({
      first_name,
      last_name,
      birth_date,
      email,
      phone,
      password,
      imageUrl,
    })
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  res.json(await deleteUser(id));
});

router.put("/:id", async (req, res) => {
  const {
    first_name,
    last_name,
    birth_date,
    email,
    phone,
    password,
    imageUrl,
  } = req.body;
  const { id } = req.params;
  res.json(
    await updateUser(
      first_name,
      last_name,
      birth_date,
      email,
      phone,
      password,
      imageUrl,
      id
    )
  );
});

export default router;
