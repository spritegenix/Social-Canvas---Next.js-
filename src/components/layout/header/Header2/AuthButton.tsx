import Button from "@/components/elements/Button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { loggedUser } from "@/data/global";
import { VscLaw } from "react-icons/vsc";

export default function AuthButton({ handleSidebar }: any) {
  const isLogin = true;

  return (
    <>
      {!isLogin ? (
        <Button
          as={Link}
          href="/listing-login"
          variant="orange-gradient"
          leftIcon={<VscLaw className="text-xl" />}
        >
          LogIn
        </Button>
      ) : (
        <Link
          className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-white bg-bg1 shadow-lg"
          href={`/listing-profile/${loggedUser.slug}`}
        >
          {loggedUser.avatar ? (
            <Image
              src={loggedUser.avatar}
              alt="avatar"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="cursor-pointer text-xl font-bold text-white">{loggedUser.name[0]}</p>
          )}
        </Link>
      )}
    </>
  );
}
