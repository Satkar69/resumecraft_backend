import { Router } from "express";
import {
  createEducation,
  deleteEducation,
  getEducation,
  getEducationByUserDetail,
  getEducations,
  updateEducation,
  updateEducationByUserDetail,
} from "../controllers/education.js";

const router = Router();

router.route("/").get(getEducations);
router.route("/create-edu").post(createEducation);

// by education id
router
  .route("/:id")
  .get(getEducation)
  .delete(deleteEducation)
  .put(updateEducation);

// by userdetail
router
  .route("/edu-by-userdetail/:id")
  .get(getEducationByUserDetail)
  .put(updateEducationByUserDetail);

export default router;
