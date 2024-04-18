import { FC } from "react";

import imageGroup1 from "@assets/home/imageGroup1.jpg";
import imageGroup4 from "@assets/home/imageGroup4.jpg";
import imageGroup5 from "@assets/home/imageGroup5.jpg";
import imageGroup3 from "@assets/home/imageGroup3.jpg";
import imageGroup2 from "@assets/home/imageGroup2.jpg";

import cl from "./DescContainer.module.css";

const DescContainer: FC = () => (
  <div className={cl.DescContainerWrapper}>
    <div className={cl.DescContainer}>
      <div className={cl.DescContainerItems}>
        <h4>Project Overview</h4>
        <p>
          Online learning with us does not interfere with your daily life. because learning can be done anytime and
          anywhere. Online learning with us does not interfere with your daily life. because learning can be done
          anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be
          done anytime and anywhere.
        </p>
        <div className={cl.DescContainerItemsTime}>
          <p>July 22 - 2022</p>
          <p>Interior Design - Furnitur</p>
        </div>
      </div>
      <div className={cl.DescContainerItems}>
        <h4>Design Process</h4>
        <p>
          Online learning with us does not interfere with your daily life. because learning can be done anytime and
          anywhere. Online learning with us does not interfere with your daily life. because learning can be done
          anytime and anywhere.
          <br />
          <br />
          Online learning with us does not interfere with your daily life. because learning can be done anytime and
          anywhere. Online learning with us does not interfere with your daily life. because learning can be done
          anytime and anywhere.
        </p>
      </div>
    </div>
    <div className={cl.ImageContainer}>
      <div className={cl.ImageContainerDouble}>
        <div>
          <img src={imageGroup1} alt='imageGroup1' />
        </div>
        <div>
          <img src={imageGroup4} alt='imageGroup2' />
        </div>
      </div>
      <img src={imageGroup5} alt='imageGroup3' />
      <div className={cl.ImageContainerDouble}>
        <div>
          <img src={imageGroup3} alt='imageGroup4' />
        </div>
        <div>
          <img src={imageGroup2} alt='imageGroup5' />
        </div>
      </div>
    </div>
  </div>
);

export default DescContainer;
