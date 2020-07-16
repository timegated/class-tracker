import { Router } from "express";
import { updateMe, getUser } from "./user.controllers";

const router = Router();

router.route("/:id").get(getUser);
router.put("/", updateMe);

export default router;
