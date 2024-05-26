const User = require("./user.model");

const getAllUsers = async () => {
  const result = await User.find({}).sort({ createdAt: "desc" });
  return result;
};

const createUser = async (data) => {
  const result = await User.create(data);
  return result;
};

const makeAdmin = async (id) => {
  const isUser = await User.findOne({ _id: id });
  if (isUser) {
    const result = await User.updateOne({ _id: id }, { role: "ADMIN" });
    return result;
  }
};

module.exports.userService = {
  createUser,
  makeAdmin,
  getAllUsers,
};
