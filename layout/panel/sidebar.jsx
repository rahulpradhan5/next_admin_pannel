import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  User,
} from "@nextui-org/react";
import TheamSwitcher from "@/components/panel/topbar/ThemeSwitch";
import sideBaritems from "./sidebaritem";
import { ArrowLeftSquare } from "lucide-react";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      <Card
        className={`w-full lg:w-1/5 md:z-100 sm:z-100  rounded-none h-full ${
          sidebarOpen ? "md:block sm:block " : "md:hidden sm:hidden"
        } lg:block`}
      >
        <CardHeader className="flex justify-between w-full">
          <div className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <TheamSwitcher />
          </div>
          <div className="flex lg:hidden">
            <ArrowLeftSquare onClick={toggleSidebar} />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="overflow-y-auto h-full">
          {/* dropdown */}

          <div className="flex flex-col gap-3">
            {/* partition name */}
            <p className=" text-primary-pink-300 font-semibold">Home</p>
            <div className=" flex flex-col gap-2">
              {/* partition items */}
              <Link
                href="/"
                className="flex items-center gap-1 hover:bg-font-colors-black400 p-2 rounded-sm"
              >
                {" "}
                <p className="">hii</p>
              </Link>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
            <MoreVertical className="cursor-pointer" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Sidebar;
