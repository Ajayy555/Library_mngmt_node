import { Router } from "express"
import { addUser,allUsers, delUser ,editUser} from "../controllers/handleUser.js";
const router = Router();

router.route("/adduser").post(addUser)
router.route("/allusers").get(allUsers);
router.route("/deluser/:id").delete(delUser);
router.route("/edituser/:id").patch(editUser)



export default router;