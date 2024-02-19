const User = require("../models/userModel");
// const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const getAllUsers = async (req, res) => {
  try {
    
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const skip = (page - 1) * limit;

    const users = await User.find().limit(limit * 1).skip(skip);

    console.log(users);
    res.status(200).json({ message: "All Users Details", data: users });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const getSearchUsers = async (req, res) => {
  try {
    const searchText = req.query.searchText;

    const searchFilter =
      searchText !== undefined && searchText !== ""
        ? {
            $or: [
              { firstName: { $regex: searchText, $options: "i" } },
              { lastName: { $regex: searchText, $options: "i" } },
              { email: { $regex: searchText, $options: "i" } },
            ],
          }
        : {};

    const users = await User.find(searchFilter);

    console.log(users);
    res.status(200).json({ message: "Users Details", data: users });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log(user);
    res.status(200).json({ message: "Users Details", data: user });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const addUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json({ message: "New User Created", data: user });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId, req.body);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await User.findById(userId);
    console.log(updatedUser);
    res
      .status(200)
      .json({ message: "User Details Updated", data: updatedUser });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await User.deleteOne({ _id: userId });
    res.status(200).json({ message: "User Details Deleted" });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const downloadAllUsersData = async (req, res) => {
  try {
    const users = await User.find({});

    const csvContent = users.reduce((acc, user) => {
      acc += `${user.firstName},${user.lastName},${user.email},${user.mobile},${user.gender},${user.status},${user.image},${user.location}\n`;
      return acc;
    }, "First Name, Last Name, Email, Mobile No, Gender, Status, Image, Location\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=Users.csv");

    res.status(200).send(csvContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  getSearchUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
  downloadAllUsersData,
};
