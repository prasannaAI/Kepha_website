import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
  return (
    <div className="sm:py-4 lg:py-8 relative overflow-hidden">
      <div className="wrap wrap-px">
        {/* Appear First */}
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <section
            class="relative bg-no-repeat bg-cover bg-center bg-orange-400 w-full h-full rounded-md shadow-lg"
            style={{
              backgroundImage: "url('/Background.png')",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <div class="relative mx-auto max-w-screen-xl px-4 py-36 sm:px-6 md:px-8 lg:flex lg:items-center lg:px-16">
              <div class="max-w-xl sm:text-left text-white">
                <div class="text-3xl text-white font-extrabold sm:text-4xl">
                  Grow Your Business
                </div>

                <div class="mt-2 max-w-lg  text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <ButtonGroup className=" md:block">
                    <a
                      role="button"
                      href=""
                      className="btn bg-[#e7e8ee]  block w-full rounded-lg  px-12 py-3"
                    >
                      Our Services
                    </a>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </section>
        </MotionBTTContainer>
      </div>
    </div>
  );
};

// sm:w-[1180px] h-[502px]

/* <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
  <BadgeGroup alignment="center">
    <BadgeMessage>Discover NutriTrack!</BadgeMessage>
    <BadgeIcon icon="game-icons:meal" />
  </BadgeGroup>
</MotionBTTContainer>;
{
  /* Appear Second */
// }
// <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
//   <PageTitle className="text-center mx-auto" type="heavy">
//     The effortless way to plan your meals with the power of Notion.
//   </PageTitle>
// </MotionBTTContainer>;
// {
//   /* Appear Third */
// }
// <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
//   <Content className="text-center" alignment="center">
//     <p>
//       Streamline your nutrition journey and achieve your health goals with ease.{" "}
//     </p>
//   </Content>
//   <div className="mt-6 mb-16 text-center">
//     <ButtonGroup alignment="center">
//       <Button href="#features">Features</Button>
//       <a
//         role="button"
//         href="https://github.com/christian-luntok/nutritrack"
//         className="btn btn--secondary"
//       >
//         Get Template
//         <Icon icon="material-symbols:arrow-forward-rounded" />
//       </a>
//     </ButtonGroup>
//   </div>
// </MotionBTTContainer>;
// {
//   /* Appear Fourth */
// }
// <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
//   <div className="page-banner--image">
//     <Image
//       src="/nutritrack-hero-banner.png"
//       width={1024}
//       height={680}
//       alt="Page Banner"
//       objectFit="cover"
//       className="mx-auto"
//     />
//   </div>
// </MotionBTTContainer>;
