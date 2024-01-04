import React, { useEffect, useState } from "react";
import Header from "../components/Navbars/Header";
import Menu from "../components/Navbars/Menu";
import SmallMenu from "../components/Navbars/SmallMenu";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`grid ${toggle?"grid-cols-[80px,auto]":"grid-cols-[250px,auto]"} h-screen transition-all duration-150`}>
      <div className="bg-gray-800 md:block hidden">{toggle ? <SmallMenu /> : <Menu />}</div>
      <div className="md:col-span-1 col-span-2">
        <Header setToggleMenu={setToggle} toggleMenu={toggle} />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
