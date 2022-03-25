import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./index.module.scss";

import Button from "components/Button";
import type { Image } from "services/Cms/types";
export interface BannerProps {
  image: Image;
}

const MainBanner = ({ image }: BannerProps) => {
  return (
    <Grid container className={styles.root} id="inicio">
      <Box className={styles.mainBanner}>
        <LazyLoadImage
          alt={image.alt ? image.alt : "Background Image"}
          className={styles.image}
          effect="blur"
          src={image.filename}
        />
      </Box>
      <Grid container className={styles.container}>
        <Grid item>
          <Box>
            <LazyLoadImage
              alt={image.alt ? image.alt : "alt image"}
              className={styles.subtitleSlide}
              effect="blur"
              height="10px"
              src={"//a.storyblok.com/f/63950/37x10/a4291ce360/slide-title-border.png"}
              width="37px"
            />
            <Typography className={styles.secondaryText} variant="h3">
              CONECTANDO OPORTUNIDADES
            </Typography>
            <LazyLoadImage
              alt={image.alt ? image.alt : "alt image"}
              className={styles.subtitleSlide}
              effect="blur"
              height="10px"
              src={"//a.storyblok.com/f/63950/37x10/a4291ce360/slide-title-border.png"}
              width="37px"
            />
          </Box>
          <Typography className={styles.primaryText} variant="h2">
            Nueva Plataforma de Gestión Logística Social
          </Typography>
          <Typography className={styles.subtitle} variant="subtitle1">
            Presentanos tu solicitud de envío para llegar juntos a quienes más lo necesitan.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={styles.button}
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeHD6pa0cJ4AO8tgEWJsW3egaZ1VSOCPoioWW7g2Hfb2ZLr8Q/viewform"
            }
            text={"Quiero hacer mi primer traslado"}
            variant="contained"
          />
          <Button
            className={styles.button}
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSdyQtOoU6odC_hyt-88Z0m1YQPAKa3KofWo3blJvp_G41bRYA/viewform"
            }
            text={"Quiero volver a trasladar"}
            variant="contained"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBanner;
