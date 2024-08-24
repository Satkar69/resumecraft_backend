import asyncHandler from "../utils/asyncHandler.js";
import {
  createSk,
  findAllSkill,
  deleteSkillById,
  findSkillById,
  updateSkillById,
  findSkillByUd,
  updateSkillByUd,
} from "../services/skills.js";

export const createSkill = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const skill = await createSk(data);
  res.status(201).json({
    status: "success",
    statusCode: 201,
    skill,
  });
});

export const getSkills = asyncHandler(async (req, res, next) => {
  const skills = await findAllSkill();
  res.status(200).json({
    status: "success",
    statusCode: 200,
    skills,
  });
});

export const getSkill = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const skill = await findSkillById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    skill,
  });
});

export const deleteSkill = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  deleteSkillById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    message: `skill with '_id: ${id}' deleted successfully!!`,
  });
});

export const updateSkill = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const skill = await updateSkillById(id, data);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    skill,
  });
});

export const getSkillByUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const skill = await findSkillByUd(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    skill,
  });
});

export const updateSkillByUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const skill = await updateSkillByUd(id, data);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    skill,
  });
});
