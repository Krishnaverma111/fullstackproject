const user = require("../model/usermodel");

exports.registerUser = (req, res) => {
  const data = req.body;
  console.log(data);

  res.status(200).json({
    message: "API hit successfully",
    data: data,
  });
};
