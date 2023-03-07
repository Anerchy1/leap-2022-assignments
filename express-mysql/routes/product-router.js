import express from "express";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "../services/product-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getProducts());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneProduct(id));
});

router.post("/", async (req, res) => {
  const {
    productId,
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
  } = req.body;
  res.json(
    await createProduct({
      productId,
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
    })
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteProduct(id));
});
router.put("/:id", async (req, res) => {
  const {
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
  } = req.body;
  const { id } = req.params;
  res.json(
    await updateProduct(
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
    )
  );
});

export default router;
