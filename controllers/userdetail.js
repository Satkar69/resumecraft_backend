import asyncHandler from "../utils/asyncHandler.js";
import {
  createUd,
  findAllUd,
  deleteUdById,
  findUdById,
  updateUdById,
  searchUdsByUser,
} from "../services/userdetail.js";

export const createUserDetail = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const user = req.user;
  data.user = user._id;
  const userdetail = await createUd(data);
  res.status(201).json({
    status: "success",
    statusCode: 201,
    userdetail,
  });
});

export const getUserDetails = asyncHandler(async (req, res, next) => {
  const userdetails = await findAllUd();
  res.status(200).json({
    status: "success",
    statusCode: 200,
    userdetails,
  });
});

export const getUserDetailsByCurrentUser = asyncHandler(
  async (req, res, next) => {
    const user_id = req.user._id;
    const userdetails = await searchUdsByUser(user_id);
    res.status(200).json({
      status: "success",
      statusCode: 200,
      userdetails,
    });
  }
);

export const getUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const userdetail = await findUdById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    userdetail,
  });
});

export const deleteUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  await deleteUdById(id);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    message: `userdetail deleted successfully!!`,
  });
});

export const updateUserDetail = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const userdetail = await updateUdById(id, data);
  res.status(200).json({
    status: "success",
    statusCode: 200,
    userdetail,
  });
});

export const uploadImage = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    res.status(400).json({
      status: "fail",
      statusCode: 400,
      message: "file must be uploaded!",
    });
  }
  res.status(200).json({
    status: "success",
    statusCode: 200,
    file: req.file,
  });
});
