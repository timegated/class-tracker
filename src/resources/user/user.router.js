import { Router } from "express";
import { updateMe, getUser } from "./user.controllers";

const router = Router();

router.put("/", updateMe);
router.get("/", getUser);
export default router;
