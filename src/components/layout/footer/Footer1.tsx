"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Wrapper from "@/components/elements/Wrappers";
import Button from "@/components/elements/Button";
import Logo from "@/components/elements/Logo";
import { footer } from "@/data/layout";

export default function Footer1() {
  return (
    <Wrapper
      as="footer"
      containerClassName="w-full text-black"
      className="pt-5 md:px-16 md:pt-12"
      bgColor="bg-white"
    >
      {/* NewsLetter Section  */}
      <div className="mb-5 flex w-full items-center justify-between gap-3 border-b border-white max-sm:flex-wrap md:pb-8">
        <Logo />
        <p className="mb-4 max-w-[400px] text-wrap max-sm:mt-3 max-sm:!w-[80vw]">
          <TextWithLineBreak text={footer?.text} />
        </p>
      </div>
      {/* Footer links section  */}
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list1?.title}</h4>
          <ul>
            {footer?.list1?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul>
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list3?.title}</h4>
          <ul>
            {footer?.list3?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2">
          <h4 className="my-2 text-xl font-semibold">{footer?.list4?.title}</h4>
          <ul>
            {footer?.list4?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className="hover:pl-2 hover:font-medium hover:text-zinc-900"
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="col-span-1 flex flex-col">
          <h4 className="my-2 mb-3 text-xl font-semibold">Contact Us</h4>
          <p>
            <Link href={`tel:${footer?.contactDetails?.contactNo}`}>
              {footer?.contactDetails?.contactNo}
            </Link>
          </p>
          <p>
            <Link href={`mailto:${footer?.contactDetails?.email}`}>
              {footer?.contactDetails.email}
            </Link>
          </p>
          <h4 className="my-2 text-xl font-semibold">Location</h4>
          <p>
            <TextWithLineBreak text={footer?.contactDetails?.location} />
          </p>
        </div> */}
        <div className="col-span-2 flex flex-col max-lg:hidden lg:col-span-1">
          <h4 className="my-2 mb-3 text-xl font-semibold">
            {footer?.newLetter?.title}
          </h4>
          <p>{footer?.newLetter?.description}</p>
          <form action="" className="my-5 flex w-full flex-col gap-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full rounded-full border-none py-4 pl-5 text-sm outline-none"
            />
            <Button
              variant="black"
              className="!rounded-full !px-8"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      {/* copyright  */}
      <div className="flex items-center justify-between border-t border-white py-5 max-md:flex-col">
        <p className="text-center text-sm">{footer?.copyrightText}</p>
        {/* Socials  */}
        {footer?.socials && (
          <div className="flex-center gap-x-2 text-3xl text-white">
            {footer?.socials?.facebook && (
              <FaFacebook
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.facebook, "_blank")}
              />
            )}
            {footer?.socials?.instagram && (
              <AiFillInstagram
                className="social-icon text-xl"
                onClick={() =>
                  window.open(footer?.socials?.instagram, "_blank")
                }
              />
            )}
            {footer?.socials?.linkedin && (
              <FaLinkedinIn
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.linkedin, "_blank")}
              />
            )}
            {footer?.socials?.youtube && (
              <TbBrandYoutubeFilled
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.youtube, "_blank")}
              />
            )}
            {footer?.socials?.twitter && (
              <FaXTwitter
                className="social-icon text-xl"
                onClick={() => window.open(footer?.socials?.twitter, "_blank")}
              />
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
