const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    doc_type: {
      type: String,
      required: true,
    },
    doc_num: {
      type: Number,
      required: true,
    },
    guardian_label: {
      type: String,
      required: true,
    },
    guardian_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
    },
    religion: {
      type: String,
      
    },
    maritial: {
      type: String,
     
    },
    bloodGroup: {
      type: String,
      
    },
    nationality: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
