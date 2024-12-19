import React, { useState } from "react";
import Button from "../Button";
import OTPInput from "react-otp-input";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

interface OtpProps {
  setOTPContainerShow: (show: boolean) => void;
}

export default function Otp({ setOTPContainerShow }: OtpProps) {
  const [userEmailOtp, setUserEmailOtp] = useState("");
  const [userPhoneOtp, setUserPhoneOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async () => {
    setErrorMessage(""); // Clear any previous errors

    // Check if at least one OTP is provided
    if (!userEmailOtp && !userPhoneOtp) {
      setErrorMessage("Please enter at least one OTP.");
      return;
    }

    // Validate OTP length (assuming 6-digit OTPs)
    if (userEmailOtp && userEmailOtp.length !== 6) {
      setErrorMessage("Email OTP must be 6 digits.");
      return;
    }
    if (userPhoneOtp && userPhoneOtp.length !== 6) {
      setErrorMessage("Phone OTP must be 6 digits.");
      return;
    }

    // try {
    //   // Simulate OTP verification (replace this with actual API call)
    //   const isOtpValid = await fakeOtpVerificationAPI(
    //     userEmailOtp,
    //     userPhoneOtp,
    //   );

    //   if (isOtpValid) {
    //     console.log("OTP verified successfully");
    //   } else {
    //     setErrorMessage("Invalid OTP. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("OTP verification failed:", error);
    //   setErrorMessage("An error occurred while verifying the OTP.");
    // }
  };
  return (
    <div className="flex h-full flex-col items-center overflow-y-auto bg-white px-5 py-5">
      <div className="space-y-3">
        <p
          className="flex cursor-pointer items-center gap-3 text-blue-500 duration-300 hover:underline"
          onClick={() => setOTPContainerShow(false)}
        >
          <IoMdArrowRoundBack /> Update Your Details{" "}
          <FaRegEdit className="text-lg" />
        </p>
        <h2 className="mb-5 text-2xl font-bold">OTP Verification</h2>
        <p>Verify at least one contact method: phone, email, or both.</p>
      </div>
      <div className="space-y-3">
        <h6 className="mt-5 font-medium">Email: </h6>
        <div className="otp mb-5">
          <OTPInput
            value={userEmailOtp}
            onChange={setUserEmailOtp}
            numInputs={6}
            renderSeparator={<span className="mx-1 text-gray-300">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className="h-9 w-9 rounded-md border border-gray-300 text-center text-lg focus:border-bg1 focus:outline-none"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
            )}
            shouldAutoFocus={true}
            inputType="tel"
          />
        </div>
      </div>
      <div className="space-y-3">
        <h6 className="mt-5 font-medium">Phone Number: </h6>
        <div className="otp mb-5">
          <OTPInput
            value={userPhoneOtp}
            onChange={setUserPhoneOtp}
            numInputs={6}
            renderSeparator={<span className="mx-1 text-gray-300">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className="h-9 w-9 rounded-md border border-gray-300 text-center text-lg focus:border-bg1 focus:outline-none"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
            )}
            inputType="tel"
          />
        </div>
      </div>
      {/* Error Message */}
      {errorMessage && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}
      <Button className="mt-5 w-full" type="submit">
        Sign Up
      </Button>
    </div>
  );
}
