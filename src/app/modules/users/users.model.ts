import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first Name is require"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is require"],
  },
  phone:{
    type: String,
    required: [true, 'Phone is Required']
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;