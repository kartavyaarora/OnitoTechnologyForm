const mongoose = require("mongoose");
const Data = require("../Model/dataModel");
// get all data
const getData = async (req, res) => {
  const data = await Data.find({}).sort({ createdAt: -1 });

  res.status(200).json(data);
};
// create data
const createData = async (req, res) => {
  const {
    name,
    age,
    gender,
    mobile,
    doc_type,
    doc_num,
    guardian_label,
    guardian_name,
    email,
    emergencyContact,
    address,
    state,
    city,
    country,
    pincode,
    occupation,
    religion,
    maritial,
    bloodGroup,
    nationality
  } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!age) {
    emptyFields.push("age");
  }
  if (!gender) {
    emptyFields.push("gender");
  }
  if (!mobile) {
    emptyFields.push("mobile");
  }
  if (!doc_type) {
    emptyFields.push("doc_type");
  }
  if (!doc_num) {
    emptyFields.push("doc_name");
  }
  if (!guardian_label) {
    emptyFields.push("guardian_label");
  }
  if (!guardian_name) {
    emptyFields.push("guardian_name");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!emergencyContact) {
    emptyFields.push("emergencyContact");
  }
  if (!address) {
    emptyFields.push("address");
  }
  if (!state) {
    emptyFields.push("state");
  }
  if (!city) {
    emptyFields.push("city");
  }
  if (!country) {
    emptyFields.push("country");
  }
  if (!pincode) {
    emptyFields.push("pincode");
  }
  if (!occupation) {
    emptyFields.push("occupation");
  }
  if (!maritial) {
    emptyFields.push("maritial");
  }
  if (!bloodGroup) {
    emptyFields.push("bloodGroup");
  }
  if (!nationality) {
    emptyFields.push("nationality");
  }
  if (!religion) {
    emptyFields.push("religion");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const data = await Data.create({ name,
        age,
        gender,
        mobile,
        doc_type,
        doc_num,
        guardian_label,
        guardian_name,
        email,
        emergencyContact,
        address,
        state,
        city,
        country,
        pincode,
        occupation,
        religion,
        maritial,
        bloodGroup,
        nationality 
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getData,
  createData
};
