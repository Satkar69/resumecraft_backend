import asyncHandler from "../utils/asyncHandler.js";
import {
  createEdu,
  findAllEdu,
  deleteEduById,
  findEduById,
  updateEduById,
  findEduByUd,
  updateEduByUd,
} from "../services/education.js";

export const createEducation = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const education = await createEdu(data);
  res.status(201).json({
    status: "success",
    statusCode: 201,
    education,
  });
});

export const getEducations = asyncHandler(async (req, res, next) => {
  const educations = await findAllEdu();
  res.status(200).json({
    status: "success",
    statusCode: 200,
    educations,
  });
});

export const getEducation = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const education = await findEduById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    education,
  });
});

export const deleteEducation = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  await deleteEduById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    message: `education with '_id: ${id}' deleted successfully!!`,
  });
});

export const updateEducation = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const education = await updateEduById(id, data);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    education,
  });
});

export const getEducationByUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const education = await findEduByUd(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    education,
  });
});

export const updateEducationByUserDetail = asyncHandler(
  async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    const education = await updateEduByUd(id, data);
    res.status(200).json({
      status: "success",
      statusCode: 200,
      education,
    });
  }
);
