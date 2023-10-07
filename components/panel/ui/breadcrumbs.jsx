import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className="flex gap-2 items-center">
      {crumbs.map((crump, index) => (
        <React.Fragment key={index}>
          <Link
            href={crump.link}
            className={`flex gap-3 ${
              index === crumbs.length - 1
                ? "text-font-colors-black100 text-base"
                : "text-font-colors-black200"
            } font-semibold text-sm items-center`}
          >
            {crump.label}
            {index < crumbs.length - 1 && <ChevronRight className="h-4" />}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
