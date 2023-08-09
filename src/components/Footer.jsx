import React from "react";
import Attribution from "./Attribution";
import Logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <>
      <div className="footer-bg py-10 rounded-tr-[100px] mt-72">
        <div className="px-4 xl:px-[9rem] text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto text-start my-12">
          <div className="p-5">
            <img src={Logo} alt="" />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase  font-bold mb-10">Product</div>
            <a className="my-3 block" href="/#">
              Overview
            </a>
            <a className="my-3 block" href="/#">
              Pricing
            </a>
            <a className="my-3 block" href="/#">
              Marketplace
            </a>
            <a className="my-3 block" href="/#">
              Features
            </a>
            <a className="my-3 block" href="/#">
              Integrations
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase  font-bold mb-10">Company</div>
            <a className="my-3 block" href="/#">
              About
            </a>
            <a className="my-3 block" href="/#">
              Team
            </a>
            <a className="my-3 block" href="/#">
              Blog
            </a>
            <a className="my-3 block" href="/#">
              Careers
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase  font-bold mb-10">Connect</div>
            <a className="my-3 block" href="/#">
              Contact
            </a>
            <a className="my-3 block" href="/#">
              Newsletter
            </a>
            <a className="my-3 block" href="/#">
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
