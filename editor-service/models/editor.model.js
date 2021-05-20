const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const adminSchema = require("../../admin-service/models/admin.model");

const Schema = mongoose.Schema;

const editorSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Please Give Your Editor A Name"],
    },
    Email: {
      type: String,
      required: [true, "Please Your Editor Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter A Valid Email"],
    },
    Password: {
      type: String,
      required: true,
      min: [8, "Password Should Be 8 Characters Long"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character",
      ],
    },
    /**
     * Roles Will Be..
     * 1. Access To Blogs Queue - BLOG-ACCESS
     * 2. Edit Blogs - EDIT-BLOG
     * 3. Delete Blogs - DELETE-BLOG
     * 4. Change Website Theme - CHANGE-BLOG
     * 5. Delete Comments - DELETE-COMMENT
     * 6. Not Given Any Access - NONE
     */
    Role: [
      {
        type: String,
        default: "NONE",
      },
    ],
    /**
     * Status will be..
     * 1. Active - A
     * 2. Deactivated - F
     */
    Status: {
      type: String,
      default: "F",
    },
  },
  { timestamps: true }
);

editorSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

adminSchema.methods.PasswordVerification = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

module.exports = editorSchema;
