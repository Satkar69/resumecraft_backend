import { Router } from "express";
import {
  createObjective,
  deleteObjective,
  getObjective,
  getObjectiveByUserDetail,
  getObjectives,
  updateObjective,
  updateObjectiveByUserDetail,
} from "../controllers/objective.js";
import authenticate from "../middlewares/auth.js";

const router = Router();

router.route("/").get(getObjectives);
router.route("/create-obj").post(createObjective);

// by objective id
router
  .route("/:id")
  .get(getObjective)
  .delete(deleteObjective)
  .put(updateObjective);

// by userdetail
router
  .route("/obj-by-userdetail/:id")
  .get(getObjectiveByUserDetail)
  .put(updateObjectiveByUserDetail);

export default router;
