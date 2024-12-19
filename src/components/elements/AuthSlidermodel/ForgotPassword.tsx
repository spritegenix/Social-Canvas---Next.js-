"use client";
import Button from "@/components/elements/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "./zodValidations";
import { Input } from "../Input";
import Link from "next/link";
import { ChangePasswordByOtp } from "./ChangePasswordByOtp";

interface Type {
  type: "email" | "phone";
}

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword({ type }: Type) {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userIdentifier, setUserIdentifier] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    // Check for email or phoneNumber based on the provided type
    const identifier = type === "email" ? data.email : data.phoneNumber;
    if (identifier) {
      console.log("Form data submitted:", identifier);
      setUserIdentifier(identifier);
      setIsOtpSent(true);
    } else {
      console.error("Identifier not provided.");
    }
  };

  return (
    <div className="rounded-lg bg-white p-5 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">
        Recover Password by {type === "email" ? "Email" : "Phone Number"}
      </h2>

      {!isOtpSent ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          {type === "email" ? (
            <div>
              <Input
                {...register("email")}
                type="email"
                label="Email"
                placeholder=" "
                autoFocus
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          ) : (
            <div>
              <Input
                {...register("phoneNumber")}
                type="tel"
                label="Phone Number"
                placeholder=" "
                autoFocus
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          )}
          <Button className="mt-5 w-full" type="submit">
            Send OTP
          </Button>
        </form>
      ) : (
        <ChangePasswordByOtp
          type={type}
          userIdentifier={userIdentifier}
          backToEdit={() => setIsOtpSent(false)}
        />
      )}

      <Link
        className="mt-4 block text-sm text-blue-500 hover:underline"
        href={
          type === "email" ? "/forgot-password/phone" : "/forgot-password/email"
        }
      >
        Recover Password by {type === "email" ? "Phone Number" : "Email"}
      </Link>
    </div>
  );
}
