import { Router } from "express";
import controllers from "./user.controllers";

const router = Router();

router.route('/')
  .get(controllers.getUser)

export default router;
