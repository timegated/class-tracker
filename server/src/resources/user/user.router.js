import { Router } from "express";
import { updateMe, getUser } from "./user.controllers";

const router = Router();

router.put("/", updateMe);
router.get("/:id", getUser);
export default router;
