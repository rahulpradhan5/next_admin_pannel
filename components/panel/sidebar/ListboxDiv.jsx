import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
const ListboxDiv = ({id}) => {
  return (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small">
      <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default ListboxDiv;
