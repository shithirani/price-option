import React, { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:id", name: "Profile" },
  ];
  return (
    <nav className="bg-green-500 p-6 text-black">
      <div className="md:flex" onClick={() => setOpen(!open)}>
        {open === true ? (
    <RxCross1 />
        
        ) : (
          <CiMenuBurger className="text-3xl md:hidden" />
        
        )}
      </div>
      <ul className={`md:flex bg-blue-400 duration-1000 absolute md:static shadow-lg ${open ? 'top-60': '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
