import { Router } from "express";
import {
  createExperience,
  deleteExperience,
  getExperience,
  getExperienceByUserDetail,
  getExperiences,
  updateExperience,
  updateExperienceByUserDetail,
} from "../controllers/experience.js";

const router = Router();

router.route("/").get(getExperiences);
router.route("/create-exp").post(createExperience);

//by experience id
router
  .route("/:id")
  .get(getExperience)
  .delete(deleteExperience)
  .put(updateExperience);

// by userdetail
router
  .route("/exp-by-userdetail/:id")
  .get(getExperienceByUserDetail)
  .put(updateExperienceByUserDetail);

export default router;
