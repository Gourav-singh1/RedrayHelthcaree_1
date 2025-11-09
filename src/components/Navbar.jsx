import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pagelogo from "../assets/images/webp/pagelogo.webp";

function Navbar() {
  const nav = [
    { PageName: "Home", linkName: "/" },
    { PageName: "About Us", linkName: "/about" },
    { PageName: "Products", linkName: "/products" },
    { PageName: "Services", linkName: "/services" },
    { PageName: "Contact", linkName: "/contact" },
  ];

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const current = nav.find((item) => item.linkName === location.pathname);
    if (current) {
      setActiveLink(current.PageName);
    }
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative bg-white shadow-2">
        <div className="container py-1">
          <div className="flex align-items-center justify-content-between">
            <div className="z-4">
              <img width={170} src={pagelogo} alt="pagelogo" />
            </div>

            <div>
              <ul
                className={`flex flex-column md:flex-row align-items-center respons_Nav z-3 ${
                  isOpen ? "ml-0" : ""
                }`}
              >
                {nav.map((items, index) => (
                  <li key={index}>
                    <Link
                      to={items.linkName}
                      onClick={() => {
                        setActiveLink(items.PageName), setIsOpen(false);
                      }}
                      className={`text_dark font-bold text-lg my-2 md:my-0 md:mx-3 relative pb-1 Link_Hover ${
                        activeLink === items.PageName ? "active-tab" : ""
                      }`}
                    >
                      {items.PageName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`menu_toggle z-4 md:hidden ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
