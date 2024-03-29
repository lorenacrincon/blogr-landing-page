import React from "react";
import Attribution from "./Attribution";
import Logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <>
      <div className="footer-bg py-10 rounded-tr-[100px] mt-20 lg:mt-[350px]">
        <div className="px-4 xl:px-[8rem] text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto text-center lg:text-start lg:my-12">
          <div className="p-5 flex items-center lg:items-start">
            <img src={Logo} alt="Logo" className="mx-auto lg:mx-0" />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase font-bold mb-10">Product</div>
            <a className="my-3 block hover:underline" href="/#">
              Overview
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Pricing
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Marketplace
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Features
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Integrations
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase  font-bold mb-10">Company</div>
            <a className="my-3 block hover:underline" href="/#">
              About
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Team
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Blog
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Careers
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase  font-bold mb-10">Connect</div>
            <a className="my-3 block hover:underline" href="/#">
              Contact
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Newsletter
            </a>
            <a className="my-3 block hover:underline" href="/#">
              Linkedin
            </a>
          </div>
        </div>
        <Attribution />
      </div>
    </>
  );
}

export default Footer;
