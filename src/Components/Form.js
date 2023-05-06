import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Form() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().integer().positive(),
    gender: yup.string().required(),
    mobile: yup.string().required().min(10).max(10),
    doc_type: yup.string().required(),
    doc_num: yup.string().required(),
    guardian_label: yup.string().required(),
    guardian_name: yup.string().required(),
    email: yup.string().required().email(),
    emerencyContact: yup.string().min(10).max(10),
    address: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    pincode: yup.string().required().min(6).max(6),
    occupation: yup.string(),
    religion: yup.string(),
    maritial: yup.string(),
    bloodGroup: yup.string(),
    nationality: yup.string().required(),
  });

  const { register, handleSubmit,reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/data/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <div className="form mb-2">
      <form className="form_details" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-headings">Personal Details</div>
        <div className="fields">
          <div className="col-sm-5">
            <label>Name</label>
            <input
              className="px-2"
              {...register("name")}
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="col-sm-3">
            <label className="col-sm-4">Age</label>
            <input
              {...register("age")}
              className="col-sm-6 px-2"
              placeholder="Age"
              type="number"
            />
          </div>
          <div className="col-sm-4">
            <label>Gender</label>
            <select class="px-2" placeholder="Gender" {...register("gender")}>
              <option value="">Enter Gender</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
        <div className="fields mt-3">
          <div className="col-sm-5">
            <label>Mobile</label>
            <input
              className="px-2"
              {...register("mobile")}
              placeholder="+91-00000-00000"
              type="text"
            />
          </div>
          <div className="col-sm-7">
            <label className="col-sm-3 pr-0">Govt. Issued ID</label>
            <select class="col-sm-2 px-2 ml-0" {...register("doc_type")}>
              <option value="">Type</option>
              <option value="Aadhar">Aadhar</option>
              <option value="DL">DL</option>
            </select>
            <input
              {...register("doc_num")}
              class="col-sm-5"
              placeholder="XXXX-XXXX-XXXX"
              type="text"
            />
          </div>
        </div>
        <div className="form-headings mt-3">Contact Details</div>
        <div className="fields mt-4">
          <div className="col-sm-5">
            <label>Guadrian Details</label>
            <select class="col-sm-2 px-1" {...register("guardian_label")}>
              <option value="">Label</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
              <option value="Ms">Ms</option>
            </select>
            <input
              {...register("guardian_name")}
              class="col-sm-5"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="col-sm-3">
            <label className="col-sm-3">Email</label>
            <input
              {...register("email")}
              className="col-sm-8"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="col-sm-4">
            <label>Emergency Contact</label>
            <input
              {...register("emergencyContact")}
              className="col-sm-6"
              placeholder="+91 00000-00000"
              type="text"
            />
          </div>
        </div>
        <div className="form-headings mt-3">Address Details</div>
        <div className="fields">
          <div className="col-sm-5">
            <label>Address</label>
            <input
              className="px-2"
              {...register("address")}
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="col-sm-3">
            <label className="col-sm-3">State</label>
            <input
              className="px-2"
              {...register("state")}
              placeholder="State"
              type="text"
            />
          </div>
          <div className="col-sm-4">
            <label>City</label>
            <input
              className="px-2"
              {...register("city")}
              placeholder="City"
              type="text"
            />
          </div>
        </div>
        <div className="fields mt-3">
          <div className="col-sm-5">
            <label>Country</label>
            <input
              className="px-2"
              {...register("country")}
              placeholder="Country"
              type="text"
            />
          </div>
          <div className="col-sm-7">
            <label className="col-sm-1">Pincode</label>
            <input
              {...register("pincode")}
              className="col-sm-3 px-2"
              placeholder="Pincode"
              type="text"
            />
          </div>
        </div>
        <div className="form-headings mt-3">Other Details</div>
        <div className="fields mt-3">
          <div className="col-sm-3">
            <label>Occupation</label>
            <input
              {...register("occupation")}
              className="col-sm-7 px-2"
              placeholder="occupation"
              type="text"
            />
          </div>
          <div className="col-sm-3">
            <label>Religion</label>
            <select class="px-2" placeholder="Gender" {...register("religion")}>
              <option value="">Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Sikh">Sikh</option>
              <option value="Christian">Christian</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Maritial Status</label>
            <select
              class="col-sm-7 px-2"
              placeholder="status"
              {...register("maritial")}
            >
              <option value="">Status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Seperated">Seperated</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label>Blood Group</label>
            <select
              class="px-2"
              placeholder="blood group"
              {...register("bloodGroup")}
            >
              <option value="">Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        <div className="fields mt-3">
          <div className="col-sm-3">
            <label>Nationality</label>
            <input
              className="px-2"
              {...register("nationality")}
              placeholder="Nationality"
              type="text"
            />
          </div>
        </div>
        <div className="fields justify-content-center">
          <button className="btn btn-success w-25 mt-4">Submit</button>
        </div>
      </form>
    </div>
  );
}
