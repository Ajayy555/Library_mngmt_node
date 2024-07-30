import { Router } from "express";   
import { issueBook } from "../controllers/handleTransaction.js";

const router= Router();

router.route("/issuebook").post(issueBook)





export default router;