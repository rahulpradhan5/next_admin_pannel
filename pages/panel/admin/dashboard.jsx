import React from "react";
import Breadcrumbs from "@/components/panel/ui/breadcrumbs";
import Datatable from "@/components/panel/data-table/data-table";
import { Divider, Image, User } from "@nextui-org/react";
const dashboard = () => {
  const crumpsItem = [
    {
      link: "dashboard",
      label: "Page1",
    },
    {
      link: "dashboard2",
      label: "Users",
    },
  ];
  return (
    <>
      <div className="h-full ">
        {/* header */}
        <div className="sticky top-0 bg-background w-full h-auto z-50 pt-5">
          <h1 className=" text-s">Dashboard</h1>
          {/* breadcrumps */}
          <Breadcrumbs crumbs={crumpsItem} />
          <Divider className=" mt-1" />
        </div>
       
        <div className="mt-5 h-full ">
          <Datatable />
        </div>
      </div>
    </>
  );
};

export default dashboard;
