import React from "react";
import illustrationEditor from "../assets/images/illustration-editor-desktop.svg";
import illustrationPhones from "../assets/images/illustration-phones.svg";
import illustrationLaptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import illustrationLaptopMobile from "../assets/images/illustration-laptop-mobile.svg";
import illustrationEditorMobile from "../assets/images/illustration-editor-mobile.svg";

function Main() {
  return (
    <main>
      <section className="my-16 relative">
        <div className="">
          <div>
            <h2 className="font-ubuntu font-normal text-blue-950 text-[1.6rem] lg:text-4xl py-10 lg:py-20">
              Designed for the future{" "}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="lg:hidden">
              <img
                src={illustrationEditorMobile}
                alt="illustration Editor"
                className=""
              />
            </div>
            <div className="text-center lg:text-start font-overpass text-sm  leading-6 z-10 pt-2 px-12 lg:px-20">
              <h3 className="px-10 lg:p-0">
                Introducing an extensible editor{" "}
              </h3>
              <p className="pb-7">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
              <h3 className="px-10 lg:p-0">Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.{" "}
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src={illustrationEditor}
                alt="illustration Editor"
                className="absolute top-0 -right-[17rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="blue-section mt-[370px] rounded-tr-[100px] rounded-bl-[100px] relative h-[626px] lg:h-[400px] lg:mb-72">
        <div className="bg-pattern-section absolute">
          <div className="lg:px-20 h-[626px] lg:h-[400px] flex">
            <div className="grid lg:grid-cols-2 lg:content-center ">
              <div className="relative ">
                <img
                  className="absolute -top-52 lg:-top-[12rem] lg:-left-10"
                  src={illustrationPhones}
                  alt="Illustration Phones"
                />
              </div>
              <div className="text-center lg:text-start font-overpass text-white mt-20 lg:mt-0">
                <h4 className="px-10 lg:p-0">
                  State of the Art Infrastructure{" "}
                </h4>
                <p className="text-white px-12 lg:p-0 text-sm leading-6">
                  With reliability and speed in mind, worldwide data centers
                  provide the backbone for ultra-fast connectivity. This ensures
                  your site will load instantly, no matter where your readers
                  are, keeping your site competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="">
          <div className="lg:flex lg:flex-row lg:justify-end lg:relative">
            <div className="lg:hidden">
              <img
                src={illustrationLaptopMobile}
                alt="illustration Laptop"
                className=""
              />
            </div>
            <img
              src={illustrationLaptopDesktop}
              alt="illustration Editor"
              className="absolute -top-40 -left-[17rem] hidden lg:block"
            />
            <div className="lg:basis-1/2 font-overpass z-10 pt-2 text-center lg:text-start px-12 lg:pe-20 lg:p-0">
              <h3>Free, open, simple </h3>
              <p className="pb-7">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              <h3>Powerful tooling</h3>
              <p>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
