import React, { useState } from "react";
import {
  CustomForm,
  CustomInput,
  CustomTextArea,
} from "../shared/inputs/AllInputs";
import { allValidations } from "../utils/formValidations";
import PrimaryButton, { PrimaryButtonOutlined } from "../shared/Button/PrimaryButton";

function CallbackForm({ setVisible }) {
  const [data, setData] = useState({
    email: "",
    // password: "",
  });

  const handleChange = ({ name, value }) => {
    const formErrors = allValidations(name, value, data);
    setData((prev) => ({ ...prev, [name]: value, formErrors }));
  };
  return (
    <>
        <div className="container bg-white shadow-2 CallBack_form border-round-lg p-2 pt-3">
          <CustomForm>
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="name"
              label="Name"
              placeholder="Enter your name"
              required
            />
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="phone"
              label="Phone Number"
              placeholder="Enter your Phone Number"
              required
            />
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="email"
              label="Email"
              placeholder="Enter your email"
              required
            />
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="country"
              label="Country"
              placeholder="Enter your country name"
              required
            />
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="city"
              label="City"
              placeholder="Enter your city name"
              required
            />
            <CustomInput
              col="12"
              data={data}
              onChange={handleChange}
              name="centerName"
              label="Hospital/Clinic/Diagnostic Center's Name: (Optional)"
              placeholder="Type Hospital/Clinic/Diagnostic Center Name"
              required
            />
            <CustomTextArea
              label="Enquiry:"
              name="enquiry:"
              placeholder="Type Your Enquiries/Requests"
              required
              data={data}
              onChange={handleChange}
            />
            <div className="text-right w-full">
              <PrimaryButtonOutlined  label ="Cancel" onClick={() => setVisible(false)} />
              <PrimaryButton label="sumbit"  />
            </div>
          </CustomForm>
        </div>
    </>
  );
}

export default CallbackForm;
