import React from "react";
import TheamSwitcher from "@/components/panel/topbar/ThemeSwitch";
import { Card, CardBody } from "@nextui-org/react";
import {ArrowLeftSquare} from 'lucide-react'
const Topbar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      <Card className="rounded-none shadow-none">
        <CardBody className="flex">
          <div className="flex">
            <ArrowLeftSquare onClick={toggleSidebar} />
          </div>
          <TheamSwitcher />
        </CardBody>
      </Card>
    </>
  );
};

export default Topbar;
