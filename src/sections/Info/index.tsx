import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./index.module.scss";

import Button from "components/Button";

export interface InfoSectionProps {
  text: string;
  button_text: string;
  button_link: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ text, button_text, button_link }) => {
  return (
    <Box component="section">
      <Box className={styles.containerInfoSection} max-maxWidth={"1000px"}>
        <Typography>{text}</Typography>
        <Button href={button_link} size="small" text={button_text} />
      </Box>
    </Box>
  );
};

export default InfoSection;
