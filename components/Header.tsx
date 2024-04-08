import React, { PropsWithChildren } from "react";
import BtnBack from "./BtnBack";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-2 flex items-center gap-2 border-b-2 border-secondary">
      <BtnBack />
      <div>{children}</div>
    </div>
  );
};

export default Header;
