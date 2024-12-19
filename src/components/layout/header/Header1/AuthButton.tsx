import Button from "@/components/elements/Button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { loggedUser } from "@/data/global";

export default function AuthButton({ handleSidebar }: any) {
  const isLogin = false;

  return (
    <>
      {!isLogin ? (
        <Button as={Link} href="/login" variant="orange-gradient">
          Log In / Sign Up
        </Button>
      ) : (
        <div className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-white bg-bg1 shadow-lg" onClick={handleSidebar}>
          {loggedUser.avatar ? (
            <Image
              src={loggedUser.avatar}
              alt="avatar"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="text-xl font-bold text-white cursor-pointer">{loggedUser.name[0]}</p>
          )}
        </div>
      )}     
    </>
  );
}