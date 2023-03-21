import express from "express";
import { findOneById, isValidURL, shorten } from "../services/link-service.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("o");
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  if (isValidURL(url)) res.json(await shorten(url));
  else res.status(400).json("invalid url");
});

export default router;
