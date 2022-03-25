import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./index.module.scss";

import type { ClientLogo } from "services/Cms/types";
import { joinClasses } from "utils";

export interface LogosProps {
  title: string;
  data: ClientLogo[];
}

SwiperCore.use([Autoplay]);

const Logos = ({ data, title }: LogosProps) => {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  function getAmountOfLogos() {
    if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 3;
    }

    return 5;
  }

  return (
    <Grid className={styles.root} component="section">
      <Typography className={styles.title} color="secondary" variant="h2">
        {title}
      </Typography>
      <SwiperComponent
        lazy
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        className={styles.container}
        effect="fade"
        slidesPerView={getAmountOfLogos()}
      >
        {data &&
          data.length !== 0 &&
          data.map((item, index) => {
            const { logo, _uid } = item;

            return (
              <SwiperSlide key={_uid} className={styles.slide}>
                {({ isActive }) => (
                  <LazyLoadImage
                    alt={logo.alt ? logo.alt : `Logo cliente ${index}`}
                    className={joinClasses(styles.image, styles.selectDisable)}
                    data-isactive={isActive}
                    effect="blur"
                    src={logo.filename}
                  />
                )}
              </SwiperSlide>
            );
          })}
      </SwiperComponent>
    </Grid>
  );
};

export default Logos;
