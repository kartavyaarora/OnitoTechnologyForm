import React from "react";
import { useNavigate } from "react-router-dom";

export default function NAvbar() {
  const navigate = useNavigate();
  const LoadPage1=()=>{
    navigate("page1");
  }
  const LoadPage2=()=>{
    navigate("page2");
  }
  return (
    <>
      <center className="my-3">
      <div class="container">
        <div class="tabs">
          <input type="radio" id="radio-1" name="tabs"/>
          <label class="tab" for="radio-1" onClick={LoadPage1}>
            Page1
          </label>
          <input type="radio" id="radio-2" name="tabs" />
          <label class="tab" for="radio-2"  onClick={LoadPage2}>
            Page2
          </label>
          <span class="glider"></span>
        </div>
      </div>
      </center>
    </>
  );
}
