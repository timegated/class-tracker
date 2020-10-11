/* eslint-disable prettier/prettier */
import { Router } from "express";
import controllers from "./char.controllers";

const router = Router();

// /api/characters
router.route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);

// /api/characters/:id
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)
  
export default router;
