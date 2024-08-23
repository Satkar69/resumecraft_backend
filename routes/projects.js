import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjectByUserDetail,
  getProjects,
  updateProject,
  updateProjectByUserDetail,
} from "../controllers/projects.js";

const router = Router();

router.route("/").get(getProjects);
router.route("/create-proj").post(createProject);

// by project id
router.route("/:id").get(getProject).delete(deleteProject).put(updateProject);

// by userdetail
router
  .route("/proj-by-userdetail/:id")
  .get(getProjectByUserDetail)
  .put(updateProjectByUserDetail);

export default router;
