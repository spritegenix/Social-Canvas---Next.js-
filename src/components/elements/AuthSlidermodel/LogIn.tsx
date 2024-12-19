"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { Input } from "../Input";
import Link from "next/link";
import { loginSchema } from "./zodValidations";
import { useLocalStorage } from "@/customHooks/useLocalStorage";
import { TextAccordion } from "../Accordions/TextAccordion";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// Define TypeScript type for the form values based on Zod schema
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LogIn() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [loginCredentials, setLoginCredentials] = useLocalStorage("loginCredentials", {
    loginIdentifier: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginIdentifier: loginCredentials.loginIdentifier,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    const isEmail = /\S+@\S+\.\S+/.test(data.loginIdentifier);
    console.log(
      "Form data submitted:",
      isEmail ? { email: data.loginIdentifier } : { phoneNumber: data.loginIdentifier },
      data.password,
    );
    // Save the login identifier to local storage
    setLoginCredentials({ loginIdentifier: data.loginIdentifier });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto bg-white px-5 py-5">
      <h2 className="mb-5 text-2xl font-bold">LogIn Now</h2>
      <GoogleAuthButton />
      {/* OR  */}
      <div className="mt-5 flex items-center justify-center">
        <p className="h-0 w-32 border-b border-zinc-300" />
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300">
          OR
        </button>
        <p className="h-0 w-32 border-b border-zinc-300" />
      </div>
      <div>
        {/* Form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Input
            {...register("loginIdentifier")}
            type="text"
            label="Email or Phone Number"
            placeholder=" "
            autoFocus
          />
          {errors.loginIdentifier && (
            <p className="text-xs text-red-500">{errors.loginIdentifier.message}</p>
          )}
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
          <Button className="mt-5 w-full" type="submit">
            Sign In
          </Button>
        </form>
        <TextAccordion
          items={[
            {
              title: "Forgot your password?",
              className: "text-sm text-blue-500",
              content: (
                <>
                  <Link
                    className="text-sm text-blue-500 hover:underline"
                    href="/forgot-password/email"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default SPA navigation
                      window.location.href = "/forgot-password/email"; // Use a full reload
                    }}
                  >
                    Recover Password by Email
                  </Link>
                  <br />
                  <Link
                    className="text-sm text-blue-500 hover:underline"
                    href="/forgot-password/phone"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default SPA navigation
                      window.location.href = "/forgot-password/phone"; // Use a full reload
                    }}
                  >
                    Recover Password by Phone Number
                  </Link>
                </>
              ),
            },
          ]}
        />
        <Link
          href={"/signup"}
          onClick={(e) => {
            e.preventDefault(); // Prevent the default SPA navigation
            window.location.href = "/signup"; // Use a full reload
          }}
          className="text-sm text-blue-500 hover:underline md:hidden"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}
