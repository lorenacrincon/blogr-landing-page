import React from "react";
import illustrationEditor from "../assets/images/illustration-editor-desktop.svg";

function Main() {
  return (
    <main className="container px-20">
      <section className="my-16 relative">
        <div>
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
                className="absolute z-0 top-0 -right-[27rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
