import { Router } from "express";
import { updateMe } from "./user.controllers";

const router = Router();

router.put("/", updateMe);

export default router;
