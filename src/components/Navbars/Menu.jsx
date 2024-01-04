import React from "react";
import { menu } from "../../utils/menu";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menu = () => {
    const location = useLocation()
    const icons = {
        home:<FaHome size={22}/>,
        createPost:<RiEditFill size={22}/>
    }
  return (
    <div className="">
      <div className="text-white font-bold text-center py-4 text-2xl border-b border-gray-600">
        <Link to="/">EZwrite</Link>
      </div>
      <div className="ml-10 flex items-baseline space-x-4 flex-col mt-8 gap-y-4">
        {menu.map((item,index) => (
          <Link
          title={item.name}
            key={index}
            to={item.href}
            className={classNames(
                location.pathname===item.href
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center gap-x-2"
            )}
            aria-current={item.current ? "page" : undefined}
          >
           <span>{icons[item.icon]}</span> {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
