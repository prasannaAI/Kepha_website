import { Icon } from "@iconify/react";
import React from "react";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { v4 as uuid } from "uuid";

export default function ServiceHome() {
  const Data = [
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Signage and Digital Signs",
      content:
        " WE specialize in creating impactful signage solutions that leave a lasting impression.",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Civil and MEP Works",
      content:
        "Our Civil and MEP Works division is committed to delivering topnotch engineering solutions.",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Fitout",
      content:
        "We excel in creating functional and aesthetically pleasing interiors through our fitout services.",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Infrastructure Solutions",
      content:
        "Our infrastructure solutions cover a wide range of projects, from basic utilities to complex infrastructure development",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Steel and Metal Works",
      content:
        "With a state-of-the-art facility and a team of skilled craftsmen, We specialize in precision steel and metal works",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Roofing Solutions",
      content:
        "KEPHA's roofing solutions are designed to withstand the harshest weather conditions while providing aesthetic appeal.",
      link: "",
    },
    {
      id: uuid(),
      icon: "mingcute:service-line",
      title: "Fabric Printing and Stitching Works",
      content:
        "Our fabric printing and stitching works division brings creativity to life.",
      link: "",
    },
  ];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 px-8 sm:px-16">
        <div className="h-56 rounded-lg p-6 flex flex-col justify-center">
          <BadgeGroup alignment="center">
            <BadgeMessage className="text-text_primary">Services</BadgeMessage>
            <BadgeIcon icon="twemoji:waving-hand" />
          </BadgeGroup>
          <div className="lg:text-base font-light text-justify">
            KEPHA Technical Services takes pride in its diverse portfolio of
            successful projects.
          </div>
        </div>
        {Data.map((item) => (
          <div
            className="h-auto rounded-md bg-[#FCFCFC] flex flex-col justify-start p-4 shadow-sm hover:shadow-md "
            id={item.id}
          >
            <Icon icon={item.icon} className="w-8 h-8 text-secondary-500 " />
            <div className="text-text_primary font-light pt-3 text-base">
              {item.title}
            </div>
            <div className="font-light text-sm pt-3">{item.content}</div>
            <div className="underline cursor-pointer pt-3 text-text_primary text-xs font-light">
              Read More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
