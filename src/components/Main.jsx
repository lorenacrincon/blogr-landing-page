import React from "react";
import illustrationEditor from "../assets/images/illustration-editor-desktop.svg";
import illustrationPhones from "../assets/images/illustration-phones.svg";
import illustrationLaptopDesktop from "../assets/images/illustration-laptop-desktop.svg";

function Main() {
  return (
    <main>
      <section className="my-16 relative">
        <div className="container px-20">
          <div>
            <h2 className="font-ubuntu font-normal text-blue-950 text-4xl py-20">
              Designed for the future{" "}
            </h2>
          </div>
          <div className="flex flex-row gap-10">
            <div className="basis-1/2 font-ubuntu z-10 pt-2">
              <h3>Introducing an extensible editor </h3>
              <p className="pb-7">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
              <h3>Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.{" "}
              </p>
            </div>
            <div>
              <img
                src={illustrationEditor}
                alt="illustration Editor"
                className="absolute z-0 top-0 -right-[17rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="blue-section mt-72 rounded-tr-[100px] rounded-bl-[100px] relative h-[400px] mb-72">
        <div className="bg-pattern-section absolute f-full w-full">
          <div className="container px-20 h-[400px] flex">
            <div className="grid grid-cols-2 content-center ">
              <div className="relative">
                <img
                  className="absolute -top-[10rem] -left-10"
                  src={illustrationPhones}
                  alt="Illustration Phones"
                />
              </div>
              <div className="font-ubuntu text-white text-start basis-1/2">
                <h4>State of the Art Infrastructure </h4>
                <p className="text-white">
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
      <section className="my-16 relative ">
        <div className="container px-20">
          <div className="flex flex-row justify-end">
            <img
              src={illustrationLaptopDesktop}
              alt="illustration Editor"
              className="absolute z-0 -top-40 -left-[17rem]"
            />

            <div className="basis-1/2 font-ubuntu z-10 pt-2">
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
