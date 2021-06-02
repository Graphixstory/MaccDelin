const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Roles Will Be..
 * 1. Access To Blogs Queue - ACCESS_BLOG
 * 2. Edit Blogs - EDIT_BLOG
 * 3. Delete Blogs - DELETE_BLOG
 * 4. Change Website Theme - CHANGE_WEB_THEME
 * 5. Delete Comments - DELETE_COMMENT
 * 6. Not Given Any Access - NONE
 */
const editorPermission = new Schema({
  editorID: {
    type: String,
    required: true,
  },
  Permission: {
    ACCESS_BLOG: {
      type: String,
      default: false,
    },
    EDIT_BLOG: {
      type: String,
      default: false,
    },
    DELETE_BLOG: {
      type: String,
      default: false,
    },
    CHANGE_WEB_THEME: {
      type: String,
      default: false,
    },
    DELETE_COMMENT: {
      type: String,
      default: false,
    },
  },
  // ACCESS_BLOG: {
  //   type: String, //true or false
  //   default: false,
  // },
  // EDIT_BLOG: {
  //   type: String,
  //   default: false,
  // },
  // DELETE_BLOG: {
  //   type: String,
  //   default: false,
  // },
  // CHANGE_WEB_THEME: {
  //   type: String,
  //   default: false,
  // },
  // DELETE_COMMENT: {
  //   type: String,
  //   default: false,
  // },
  NONE: {
    type: String,
    default: true,
  },
});

module.exports = editorPermission;