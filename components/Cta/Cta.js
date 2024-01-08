import React from "react";
import { Button, ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

export default function Cta() {
  return (
    <div>
      <section className="py-6 bg-[#B3B8CA] text-black rounded-md">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between ">
          <div className="text-xl font-light  text-center max-w-3xl  lg:text-left">
            KEPHA Technical Services stands out for its client-centric approach,
            We believe in building lasting relationships with our clients by
            understanding their unique needs and delivering tailored solutions
          </div>
          <ButtonGroup className=" md:block">
            <a role="button" href="" className="btn bg-[#e7e8ee] ml-4">
              Contact Us
              <Icon icon="material-symbols:arrow-forward-rounded" />
            </a>
          </ButtonGroup>
        </div>
      </section>
    </div>
  );
}
