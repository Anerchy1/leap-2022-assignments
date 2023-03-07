import express from "express";
import {
  createCategories,
  deleteCategories,
  getCategories,
  getOneOfCategories,
  updateCategories,
} from "../services/category-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneOfCategories(id));
});

router.post("/", async (req, res) => {
  const { categoryId, name, slug, productCount, parent_id } = req.body;
  res.json(
    await createCategories({ categoryId, name, slug, productCount, parent_id })
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteCategories(id));
});
router.put("/:id", async (req, res) => {
  const { name, slug, productCount, updated } = req.body;
  const { id } = req.params;
  res.json(await updateCategories(name, slug, productCount, updated, id));
});

export default router;
