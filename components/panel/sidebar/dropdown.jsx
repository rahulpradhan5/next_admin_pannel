import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import ListboxDiv from "./ListboxDiv";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      key: "new",
      label: "New file",
      title: "1",
      content: "Content for New file",
    },
    {
      key: "copy",
      label: "Copy link",
      title: "2",
      content: "Content for Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
      title: "3",
      content: "Content for Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
      title: "4",
      content: "Content for Delete file",
    },
  ];

  const defaultContent = "Default content";

  return (
    <div className="flex flex-col">
      <div
        className="flex w-full items-center justify-between cursor-pointer pb-2"
        onClick={handleToggleDropdown}
      >
        <h1>Hii</h1>
        <ChevronRight
          className={`h-4 ${isOpen ? "transform rotate-90" : ""}`}
        />
      </div>
      {isOpen && <ListboxDiv id="86868" />}
    </div>
  );
};

export default Dropdown;
