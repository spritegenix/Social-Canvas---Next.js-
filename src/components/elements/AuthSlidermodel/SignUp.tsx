"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { Input } from "../Input";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { signUpSchema } from "./zodValidations";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Otp from "./Otp";

// Define TypeScript type for the form values based on Zod schema
type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isOTPContainerShow, setOTPContainerShow] = useState(false);
  const [formData, setFormData] = useState<SignUpFormValues | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });
  const phoneNumber = watch("phoneNumber");

  const onSubmit = (data: SignUpFormValues) => {
    // Handle signup logic here, e.g., call the GraphQL signup mutation
    console.log("Form data submitted:", data);
    setFormData(data); // Save form data before showing OTP container
    setOTPContainerShow(true);
  };

  // Restore form data when switching back to the signup form
  const handleGoBack = () => {
    setOTPContainerShow(false);
    if (formData) {
      reset(formData);
    }
  };

  return (
    <>
      {!isOTPContainerShow ? (
        // Sign Up Container
        <div className="flex h-full flex-col items-center justify-center overflow-y-auto bg-white px-5 py-1">
          <h2 className="mb-5 text-2xl font-bold">Sign Up Now</h2>
          <GoogleAuthButton />
          <div className="mt-3 flex items-center justify-center">
            <p className="h-0 w-32 border-b border-zinc-300" />
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300">
              OR
            </button>
            <p className="h-0 w-32 border-b border-zinc-300" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Input {...register("name")} type="text" label="Name" placeholder=" " autoFocus />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            <div className="mt-5">
              <PhoneInput
                defaultCountry="in"
                onChange={(value, country) => {
                  setValue("phoneNumber", value);
                }}
                value={phoneNumber}
                inputStyle={{
                  width: "100%",
                  padding: "1.3rem",
                  borderColor: "#e5e7eb",
                  borderRadius: "0.375rem",
                  borderTopLeftRadius: "0rem",
                  borderBottomLeftRadius: "0rem",
                }}
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
            <Input {...register("email")} type="email" label="Email" placeholder=" " />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            <div className="relative">
              <Input
                {...register("password")}
                type={isPasswordShow ? "text" : "password"}
                label="Password"
                placeholder=" "
              />
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-zinc-500 duration-300 hover:text-bg1"
                onClick={() => setIsPasswordShow((pre) => !pre)}
              >
                {isPasswordShow ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

            {/* <Input
          {...register("confirmPassword")}
          type="password"
          label="Confirm Password"
          placeholder=" "
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )} */}

            <Button className="mt-5 w-full" type="submit">
              Generate OTP
            </Button>
          </form>
          <Link
            href={"/login"}
            onClick={(e) => {
              e.preventDefault(); // Prevent the default SPA navigation
              window.location.href = "/login"; // Use a full reload
            }}
            className="text-sm text-blue-500 hover:underline md:hidden"
          >
            Already have an account? Login
          </Link>
        </div>
      ) : (
        // OTP Container
        <Otp setOTPContainerShow={handleGoBack} />
      )}
    </>
  );
}
