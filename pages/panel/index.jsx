import React, { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/react";

const Index = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay (e.g., fetching data from an API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <div>
      {/* skeleton >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {loading ? (
        <div className="max-w-[300px] w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      ) : (
        // main content >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        <div>
          {/* Content to display once loading is complete */}
          <h1>{children}</h1>
        </div>
      )}
    </div>
  );
};

// Layout
export default Index;
