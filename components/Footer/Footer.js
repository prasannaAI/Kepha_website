import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import { SocialMedia } from "./SocialMedia";

const DATA = [
  {
    title: "Quick Links",
    items: [
      {
        label: "Home",
        href: "#home",
      },
      {
        label: "Services",
        href: "#services",
      },
      {
        label: "Testimonials",
        href: "#testimonials",
      },
      {
        label: "About Us",
        href: "#aboutus",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },
  {
    title: "Contact Us",
    items: [
      {
        label: "operations@kephauae.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-primary_color"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
        value: "operations@kephauae.com",
        href: "mailto:operations@kephauae.com",
      },
      {
        label: "+971 4 593 5874",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-primary_color"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        ),
        value: "0123456789",
        href: "tel:+0123456789",
      },
      {
        label: "Al Khaima Building 2, Al Qusais, P.O. Box 47888, Dubai, U.A.E",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-primary_color"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ),
        value: "213 Lane, London, United Kingdom",
      },
    ],
  },
];

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="bg-secondary_background bg-primary-50">
      {/* Footer Links */}
      <SectionContainer className="footer--container wrap wrap-px relative z-10">
        <div className="footer--content-container py-16">
          <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-6">
              <div className="footer--logo grid gap-8">
                <Link href="/">
                  <Image
                    src="/nutritrack.svg"
                    alt="logo"
                    className="h-10 w-auto"
                    height="25"
                    width="100"
                    priority
                  />
                </Link>
                {/* Get Template button; remove if not used */}
                <div className=" max-w-md leading-relaxed sm:max-w-xs sm:text-left text-primary_color/70 text-justify">
                  KEPHA Technical Services is a company that stands at the
                  intersection of innovation and reliability, Our comprehensive
                  range of services, commitment to quality, and client-focused
                  approach set us apart in the industry.
                </div>
                <SocialMedia />
              </div>
            </div>
            <div className="col-span-6">
              <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                {DATA.map((footerLinks) => (
                  <div
                    key={footerLinks.title}
                    className="footer-menu--container col-span-1 md:col-span-4"
                  >
                    <h3 className="font-bold text-base mb-2 text-primary_color/70">
                      {footerLinks.title}
                    </h3>
                    <ul className="footer-menu--list">
                      {footerLinks.items.map((footerItem) => (
                        <li
                          key={footerItem.label}
                          className="footer-menu--list-item gap-2 flex items-center "
                        >
                          <div className="flex items-start mb-1">
                            {footerItem.icon && (
                              <span className="mr-2 mt-1">
                                {footerItem.icon}
                              </span>
                            )}
                            <a
                              className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline text-white"
                              href={footerItem.href}
                              target={footerItem.target}
                            >
                              {footerItem.label}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Footer Credits */}
      <SectionContainer className="footer-credits relative z-10">
        <div className="wrap wrap-px py-6">
          <p className="my-0">
            © {year} Nutritrack. All rights reserved{" - "}
            <span className="font-normal">
              A template by{" "}
              <Link
                className="transition-colors duration-300 hover:underline"
                href="https://chrstnl.com"
                target="_blank"
              >
                chrstnl.
              </Link>
            </span>
          </p>
        </div>
      </SectionContainer>
      <div className="footer--background"></div>
    </footer>
  );
};
