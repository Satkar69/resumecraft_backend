import mongoose from "mongoose";
import { Schema } from "mongoose";

const userdetail = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  fullname: {
    type: String,
    required: [true, "fullname is a required field"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "address is a required field"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is a required field"],
    trim: true,
  },
  contact: {
    type: String,
    required: [true, "contact is a required field"],
    trim: true,
  },
  image: {
    type: String,
    trim: true,
    default: null,
  },
  socials: {
    type: [String],
    default: [],
  },
});

// Middleware to cascade delete all related documents when a userdetail is deleted
userdetail.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      const userdetailId = this._id;

      // Delete related documents from all relevant collections
      await Promise.all([
        RESUMEDB.Skills.deleteMany({ userdetail: userdetailId }),
        RESUMEDB.Education.deleteMany({ userdetail: userdetailId }),
        RESUMEDB.Experience.deleteMany({ userdetail: userdetailId }),
        RESUMEDB.Projects.deleteMany({ userdetail: userdetailId }),
        RESUMEDB.Objective.deleteMany({ userdetail: userdetailId }),
      ]);

      next();
    } catch (error) {
      next(error);
    }
  }
);

const UserDetail = mongoose.model("userdetail", userdetail);

export default UserDetail;
