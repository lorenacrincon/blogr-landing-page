import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../navbar";
import arrowDark from "../assets/images/icon-arrow-dark.svg";
import arrowLight from "../assets/images/icon-arrow-light.svg";
import logo from "../assets/images/logo.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const handleOnClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="font-ubuntu absolute inset-x-0 top-0 z-50 max-w-7xl mx-auto">
      <nav
        className="flex items-center justify-between p-10 lg:px-20"
        aria-label="Global"
      >
        <div className="flex me-14">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Blogr</span>
            <img className="h-8 w-auto" src={logo} alt="Blogr logo" />
          </a>
        </div>
        {!mobileMenuOpen && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className=" inline-flex items-center justify-center rounded-md  text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        )}

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, i) => (
            <div key={i} className="relative inline-block text-left">
              <a
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:underline"
                onClick={() => handleOnClick(i)}
              >
                {item.name}
                <img
                  src={arrowLight}
                  alt="arrow icon"
                  className={`inline ${
                    openIndex === i ? "rotate-180 pe-4" : "ps-4"
                  }`}
                />
              </a>
              {openIndex === i && (
                <div className="py-4 origin-top-right absolute -left-6 mt-2 w-32 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
                  {item.items.map((subItem, j) => (
                    <a
                      key={j}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:font-bold"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white hover:underline"
          >
            Login
          </a>
        </div>
        <div className="hidden lg:flex lg:justify-end ms-6">
          <button className="white-btn font-bold">Sign Up</button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed z-50" />
        <button
          type="button"
          className="fixed top-6 right-6 z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-8 w-8" aria-hidden="true" />
        </button>
        <div className="absolute inset-0 flex mt-24 items-start justify-center sm:justify-end sm:me-8 mx-10">
          <Dialog.Panel className="rounded-md z-50 bg-white w-[326px] text-center drop-shadow-lg">
            <div className="w-full p-6">
              <div className="-my-6 divide-y divide-slate-500/30">
                <div className="space-y-2 py-6">
                  {navigation.map((item, navIndex) => (
                    <div key={navIndex}>
                      <a
                        href={item.href}
                        className="flex justify-center items-center rounded-lg  py-2 text-base font-semibold text-slate-600 gap-2"
                        onClick={() => handleOnClick(navIndex)}
                      >
                        {item.name}
                        <img
                          src={arrowDark}
                          alt="arrow icon"
                          className={`inline ${
                            openIndex === navIndex ? "rotate-180" : "ps-0"
                          }`}
                        />
                      </a>
                      {openIndex === navIndex && (
                        <div className="text-center font-ubuntu font-medium bg-slate-100 rounded-lg mt-2 py-4 mb-6">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={item.href}
                              className="block py-2 text-base text-gray-500 hover:text-gray-800"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <hr class=" h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                  <div className="gap-5 grid font-ubuntu">
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-lg font-medium leading-6 text-slate-500"
                      >
                        Login
                      </a>
                    </div>
                    <div>
                      <button className="sign-up-btn font-bold">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default Navbar;
