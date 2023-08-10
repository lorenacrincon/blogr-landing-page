import React from "react";
import Attribution from "./Attribution";
import Logo from "../assets/images/logo.svg";
import { navigation } from "../navbar";

function Footer() {
  return (
    <div className="footer-bg py-10 rounded-tr-[100px] mt-20 lg:mt-[350px]">
      <div className="px-4 xl:px-40 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto text-center lg:text-start lg:my-12">
        <div className="p-5 flex items-center lg:items-start lg:ps-0">
          <img src={Logo} alt="Logo" className="mx-auto lg:mx-0" />
        </div>
        <div className="p-5">
          {navigation.map((item, i) => (
            <div key={i} className="text-sm uppercase font-bold mb-3">
              {item.name}
            </div>
          ))}
        </div>
        <div className="p-5">
          {navigation.map((item, i) => (
            <div key={i}>
              {item.items.map((subItem, subIndex) => (
                <a key={subIndex} className="my-3 block" href={item.href}>
                  {subItem}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Attribution />
    </div>
  );
}

export default Footer;
