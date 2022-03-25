import React from "react";
import { Grid, Typography, Box, Grow } from "@mui/material";
import Image from "next/image";

import styles from "./index.module.scss";

import Markdown from "components/MarkDown";
import { joinClasses } from "utils";

export interface InformativeProps {
  title: string;
  description: string;
  title_white: string;
  description_white: string;
}

const Informative = ({ title, description, title_white, description_white }: InformativeProps) => {
  return (
    <Grid className={styles.root} id="programa">
      <Grid className={styles.redSection}>
        <Box className={styles.container}>
          <Grow in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 4000 }}>
            <Typography className={styles.title} color="secondary" variant="h2">
              {title}
            </Typography>
          </Grow>
          <Grow in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 4000 }}>
            <Typography className={styles.description} color="secondary" component="div">
              <Markdown>{description}</Markdown>
            </Typography>
          </Grow>
        </Box>
      </Grid>
      <Grid className={styles.whiteSection}>
        <Box className={joinClasses(styles.container, styles.flexContainer)}>
          <Grid className={styles.image}>
            <Image
              alt="Envíos solidarios"
              height={175}
              layout="responsive"
              src={"https://a.storyblok.com/f/63950/1063x466/ed67e1913c/map.jpg"}
              width={400}
            />
          </Grid>
          <Grid>
            <Grid>
              <Typography className={styles.titleWhite} color="secondary" variant="h2">
                <Markdown>{title_white}</Markdown>
              </Typography>
            </Grid>
            <Grid>
              <Typography className={styles.descWhite} color="secondary" component="div">
                <Markdown>{description_white}</Markdown>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Informative;
