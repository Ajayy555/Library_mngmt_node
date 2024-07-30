import { Router } from "express";
import {addBook,allBooks,editBook,removeBook} from "./../controllers/handlebooks.js"

const router=Router();

router.route("/addbook").post(addBook);
router.route("/allbooks").get(allBooks)
router.route("/editbook/:id").patch(editBook)
router.route("/removebook/:id").delete(removeBook)


export default router;

