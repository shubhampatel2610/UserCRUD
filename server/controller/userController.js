const userServices = require("../services/userService");

const getAllUsers = async (req, res, next) => {
  try {
    result = await userServices.getAllUsers(req, res);

    // console.log(result, res);
  } catch (error) {
    console.log(error, next);
  }
};

const getSearchUsers = async (req, res, next) => {
    try {
      result = await userServices.getSearchUsers(req, res);
  
      // console.log(result, res);
    } catch (error) {
      console.log(error, next);
    }
  };

const getSingleUser = async (req, res, next) => {
  try {
    result = await userServices.getSingleUser(req, res);

    // console.log(result, res);
  } catch (error) {
    console.log(error, next);
  }
};

const addUser = async (req, res, next) => {
  try {
    result = await userServices.addUser(req, res);

    // console.log(result, res);
  } catch (error) {
    console.log(error, next);
  }
};

const updateUser = async (req, res, next) => {
  try {
    result = await userServices.updateUser(req, res);

    // console.log(result, res);
  } catch (error) {
    console.log(error, next);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    result = await userServices.deleteUser(req, res);

    // console.log(result, res);
  } catch (error) {
    console.log(error, next);
  }
};

const downloadAllUsersData = async (req, res, next) => {
    try {
      result = await userServices.downloadAllUsersData(req, res);
  
      // console.log(result, res);
    } catch (error) {
      console.log(error, next);
    }
  };

module.exports = {
  getAllUsers,
  getSearchUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
  downloadAllUsersData
};
