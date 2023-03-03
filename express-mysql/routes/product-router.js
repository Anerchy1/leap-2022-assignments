import express from "express";
import { createProduct, getProducts } from "../services/product-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getProducts());
});

router.post("/", async (req, res) => {
  const { name, imgUrl, createdAt } = req.body;
  try {
    res.json(await createProduct(name, imgUrl, createdAt));
  } catch (err) {
    console.error(err);
    res.status(400).json("product nemhed aldaa garlaa");
  }
});

export default router;
