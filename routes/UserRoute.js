import express from "express";
import {
  createExpanse,
  deleteExpanse,
  getExpanse,
  getExpanseById,
  updateExpanse,
} from "../controller/ExpanseController.js";

const router = express.Router();

router.get("/expanse", getExpanse);
router.get("/expanse/:id", getExpanseById);
router.post("/expanse", createExpanse);
router.patch("/expanse/:id", updateExpanse);
router.delete("/expanse/:id", deleteExpanse);

export default router;
