import { AiOutlineCloseCircle } from "react-icons/ai";
import Logo from "../elements/Logo";
import Portal from "../elements/Portal";
import Image from "next/image";
import { loggedUser } from "@/data/global";
import Button from "../elements/Button";
import { VscVerifiedFilled } from "react-icons/vsc";
import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }: any) {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm" onClick={handleSidebar}>
        <div
          className="ml-auto h-full w-full overflow-y-scroll bg-black/70 text-white transition-all duration-300 sm:w-80"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="absolute right-3 top-2 z-[9999999] text-2xl text-bg1 duration-300 hover:text-red-600"
            onClick={handleSidebar}
          >
            <AiOutlineCloseCircle />
          </button>
          <div className="flex w-full flex-col items-center gap-3 px-3 pt-5 md:pt-20">
            {/* Avatar  */}
            <div
              className="flex size-32 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-white bg-bg1 shadow-lg transition-all duration-300 hover:border-bg1"
              onClick={handleSidebar}
            >
              {!loggedUser.avatar ? (
                <Image
                  src={loggedUser.avatar}
                  alt="avatar"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              ) : (
                <p className="cursor-pointer text-7xl font-medium text-white">
                  {loggedUser.name[0]}
                </p>
              )}
            </div>
            {/* Contact Details  */}
            <p className="text-2xl font-medium">{loggedUser.name}</p>
            <p className="flex items-center gap-2 text-xl font-medium">
              {loggedUser.phone} <VscVerifiedFilled className="text-3xl text-green-500" />
            </p>
            <p className="flex items-center gap-2 text-xl font-medium">
              {loggedUser.email} <VscVerifiedFilled className="text-3xl text-green-500" />
            </p>
            <p className="text-2xl font-medium">Address:</p>
            <p className="text-xl font-medium">{loggedUser.address}</p>
            <Button
              as={Link}
              href={loggedUser?.slug ? `/user-profile/${loggedUser.slug}` : "#"}
              variant="orange-gradient"
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
