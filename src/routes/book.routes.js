import { Router } from "express";
import { createBook, getBooks, updateBookById } from "../controllers/book.controller.js";

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)
router.put('/:id', updateBookById)


export default router;