import React, { useEffect, useState } from "react";
import Topbar from "./topbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { Flag } from "lucide-react";
import Head from "next/head";
import { Divider } from "@nextui-org/react";

const { nextui } = require("@nextui-org/react");
const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay (e.g., fetching data from an API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // sidebar toogle

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Head>
        {/* tittle */}
        <title> Dashboard</title>
        {/* meta tag */}
        <meta name="description" content={"Dashboard"} />
        {/* websiteicon */}

        {/* <link
          rel="shortcut icon"
          href={settings.website.fevicon}
          type="image/x-icon"
        /> */}
      </Head>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="flex w-full h-screen overflow-hidden">
          {/* sidebar >>>>>>>>>>>>>>>>*/}
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {/* maim div >>>>>>>>>>>>>>> */}
          <div className={`${sidebarOpen?'hidden':'w-full h-screen '}`}id="main">
            {/* topbar>>>>> */}
            <div className="lg:hidden sticky top-0">
              <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
            </div>
            {/* pages >>>>>>>>>>>>>>>>*/}
            <div className="pl-5 pr-5 h-full overflow-auto">
              <div>{children}</div>
              <Divider />
              {/* footer >>>>>>>>>>>>>>>*/}
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
