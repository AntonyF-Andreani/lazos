import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Box, Grid, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./index.module.scss";

import type { Image, ClientTestimonials } from "services/Cms/types";
import Markdown from "components/MarkDown";

export interface TestimonialsProps {
  title: string;
  image: Image;
  data: ClientTestimonials[];
}

SwiperCore.use([Autoplay, Pagination]);

const Testimonials = ({ title, image, data }: TestimonialsProps) => {
  return (
    <Grid className={styles.root} component="section">
      <Box className={styles.mainBanner}>
        <LazyLoadImage
          alt={image.alt ? image.alt : "Testimonials image"}
          className={styles.image}
          effect="blur"
          src={image.filename}
        />
      </Box>
      <Grid container className={styles.container}>
        <Box className={styles.comentarioContainer}>
          <Typography className={styles.title} variant="h2">
            {title}
          </Typography>
          <Grid container>
            <SwiperComponent
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              className={styles.swiperContainer}
              pagination={{
                clickable: true,
                type: "bullets",
                bulletClass: styles.bullet,
                bulletActiveClass: styles.bulletActive,
              }}
              slidesPerView={1}
            >
              {data &&
                data.length !== 0 &&
                data.map((item, index) => {
                  const { comentario, autor, lugar } = item;

                  return (
                    <SwiperSlide key={index} className={styles.slide}>
                      <Grid item className={styles.comentario}>
                        <Typography
                          className={styles.comentarioText}
                          color="secondary"
                          component="h4"
                          variant="h4"
                        >
                          <Markdown>{comentario}</Markdown>
                        </Typography>
                      </Grid>
                      <Typography className={styles.autor} variant="h2">
                        {autor}
                      </Typography>
                      <Typography className={styles.lugar} variant="h2">
                        {lugar}
                      </Typography>
                    </SwiperSlide>
                  );
                })}
            </SwiperComponent>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
