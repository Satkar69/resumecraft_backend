import { Router } from "express";
import {
  createSkill,
  deleteSkill,
  getSkill,
  getSkillByUserDetail,
  getSkills,
  updateSkill,
  updateSkillByUserDetail,
} from "../controllers/skills.js";

const router = Router();

router.route("/").get(getSkills);
router.route("/create-skill").post(createSkill);

// by skill id
router.route("/:id").get(getSkill).delete(deleteSkill).put(updateSkill);

// by userdetail
router
  .route("/skill-by-userdetail/:id")
  .get(getSkillByUserDetail)
  .put(updateSkillByUserDetail);

export default router;
