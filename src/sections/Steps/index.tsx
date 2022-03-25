import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./index.module.scss";

import { joinClasses } from "utils";
import { Step, File } from "services/Cms/types";

export interface StepsProps {
  title: string;
  data: Step[];
  terms: File;
}

const Steps = ({ data, title, terms }: StepsProps) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFlip((prevFlip) => !prevFlip), 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.section}>
      <Grid className={styles.container}>
        <Typography className={styles.sectionTitle}>{title}</Typography>
        <div className={styles.stepsMiscellaneous} />
        <Grid className={styles.stepsContainer}>
          {data.map(({ title, description, image, second_image }, i) => (
            <Grid key={i} className={styles.step} data-key={i}>
              <div
                className={joinClasses(
                  styles.flipCard,
                  flip && i == 3 ? styles.flipNow : undefined
                )}
                data-key={i}
                data-testid={"flipCard" + i}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Image
                      alt="Avatar"
                      className={styles.stepImage}
                      data-key={i}
                      layout="fill"
                      src={image.filename}
                    />
                  </div>
                  {second_image && second_image.filename ? (
                    <div className={styles.flipCardBack}>
                      <Image
                        alt="Avatar-second"
                        className={styles.stepImage}
                        data-key={i}
                        layout="fill"
                        src={second_image.filename}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <Typography className={styles.stepTitle} data-key={i}>
                {title}
              </Typography>
              <Typography className={styles.stepSubtitle}>{description}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid>
          <Typography className={styles.termsAndConditions}>
            Conocé los{" "}
            <a href={terms.filename} rel="noreferrer" target="_blank">
              términos y condiciones
            </a>{" "}
            para acceder a la Plataforma de Gestión Logística de Donaciones.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Steps;
