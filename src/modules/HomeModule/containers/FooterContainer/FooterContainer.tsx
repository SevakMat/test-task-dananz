import { FC, useMemo, useState } from "react";

import { MainLayout } from "@shared/layouts";
import FooterLogoIcon from "@assets/home/footerLogo.svg?react";
import { Input } from "@shared/components";
import FacebookIcon from "@assets/home/facebook.svg?react";
import InstagramIcon from "@assets/home/instagram.svg?react";
import TikTokIcon from "@assets/home/tiktok.svg?react";
import YouTubeIcon from "@assets/home/youtube.svg?react";

import cl from "./FooterContainer.module.css";

const FooterContainer: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const socItems = [FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon];

  const Label = useMemo(
    () => (
      <div className={cl.Label}>
        <div />
        <p>Enter your email to get the laterst news</p>
      </div>
    ),
    []
  );

  return (
    <div className={cl.FooterContainer}>
      <div className={cl.DiscussContainer}>
        <MainLayout>
          <div className={cl.DiscussContainerWrapper}>
            <p>let&apos;s discuss making your interior like a dream place!</p>
            <div className={cl.DiscussContainerRight}>
              <p>Contact us below to work together to build your amazing interior</p>
              <button>Contact Us</button>
            </div>
          </div>
        </MainLayout>
      </div>
      <MainLayout>
        <div className={cl.BottomContainer}>
          <div className={cl.BottomContainerLeft}>
            <FooterLogoIcon />
            <p>One of the best furniture agency.</p>
          </div>
          <div className={cl.BottomContainerRight}>
            <Input hasIcon placeholder={"Email Address"} value={inputValue} onChange={setInputValue} label={Label} />
            <div className={cl.DiscussContainerRightSoc}>
              <p>Follow us On</p>
              <div>
                {socItems.map(Icon => (
                  <div key={Icon.displayName} className={cl.DiscussContainerRightSocItems}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default FooterContainer;
