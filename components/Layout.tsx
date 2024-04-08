import { PropsWithChildren } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="xl:px-20 grid grid-cols-10 w-screen h-screen">
      <div className="border-r-2  border-secondary col-span-2 max-sm:col-span-2 max-md:col-span-1 max-lg:col-span-3 p-5">
        <LeftSidebar />
      </div>
      <div className="col-span-5 max-sm:col-span-8 max-md:col-span-9 max-lg:col-span-7 overflow-y-auto">
        {children}
      </div>
      <div className="col-span-3 max-lg:col-span-0 max-lg:hidden border-l-2 border-secondary p-5">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
