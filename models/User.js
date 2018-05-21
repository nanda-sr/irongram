const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: String,
    name: String,
    profilePic: String,
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    bio: String,
    follows: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
}, {
  timestamps:{
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

userSchema.plugin('passportLocalMongoose', {usernameField: "email"})

module.exports = mongoose.model("User", userSchema);