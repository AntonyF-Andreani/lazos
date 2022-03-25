import { faDotCircle, faEnvelope } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./index.module.scss";

import type { Image } from "services/Cms/types";

export interface FooterProps {
  logoFundacion: Image;
  logoAndreani: Image;
}

const Footer = ({ logoFundacion, logoAndreani }: FooterProps) => {
  return (
    <div>
      <Divider variant="fullWidth" />
      <Grid container className={styles.root} direction="column">
        <Grid container item className={styles.datos}>
          <List className={styles.wrapper}>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a href="https://forms.gle/qffkPw5A57u3DKK77" rel="noreferrer" target="_blank">
                  {"Formulario de inscripción y traslado"}
                </a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a href="https://forms.gle/oWLgZmRJDo8reMBC9" rel="noreferrer" target="_blank">
                  {"Formulario de nuevo traslado"}
                </a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a
                  href="https://andreanionline.com/hacer-un-envio"
                  rel="noreferrer"
                  target="_blank"
                >
                  {"Andreani Online"}
                </a>
              </Typography>
            </ListItem>
          </List>
          <List className={styles.wrapper}>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a href="#" target="_blank" title="Descarga PDF">
                  {"Términos y condiciones"}
                </a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a href="#" target="_blank" title="Simil a sitio web de Andreani?">
                  {"Politica de privacidad"}
                </a>
              </Typography>
            </ListItem>
          </List>
          <List className={styles.wrapper}>
            <ListItem>
              <FontAwesomeIcon className={styles.icon} icon={faDotCircle} />
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                {"Av. Don Pedro de Mendoza 1973, CABA"}
              </Typography>
            </ListItem>
            <ListItem>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                <a href="mailto:lazos@fundacionandreani.org.ar" title="Falta tramitar">
                  {" lazos@fundacionandreani.org.ar"}
                </a>
              </Typography>
            </ListItem>
          </List>
          <List className={styles.wrapper}>
            <ListItem>
              <Typography className={styles.label} color="secondary" component="span" variant="h6">
                {"Copyright © 2021 Fundación Andreani. Todos los derechos reservados"}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Divider variant="middle" />
        <Grid className={styles.logos}>
          <LazyLoadImage
            alt={logoFundacion.alt ? logoFundacion.alt : "Logo Fundacion"}
            className={styles.logoFundacion}
            effect="blur"
            src={logoFundacion.filename}
          />
          <LazyLoadImage
            alt={logoAndreani.alt ? logoAndreani.alt : "Logo Andreani"}
            className={styles.logoAndreani}
            effect="blur"
            src={logoAndreani.filename}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
