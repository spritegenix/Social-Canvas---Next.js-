"use client";
import React from "react";
import Modal from "../Modal";
import AuthSlider from "./AuthSlider";
import { useRouter } from "next/navigation";

export default function AuthModal({ isSignIn }: any) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // Closes the modal and goes back to the previous page
  };
  return (
    <Modal onClose={handleClose}>
      <AuthSlider isSignIn={isSignIn} />
    </Modal>
  );
}
