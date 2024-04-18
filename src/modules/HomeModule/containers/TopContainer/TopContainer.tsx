import { FC } from "react";

import TopImage from "@assets/home/image1.jpg";

import cl from "./TopContainer.module.css";

const TopContainer: FC = () => (
  <div className={cl.TopContainer}>
    <h1>Minimalist Room</h1>
    <p>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout.
    </p>
    <img src={TopImage} alt='TopImage' />
  </div>
);

export default TopContainer;
