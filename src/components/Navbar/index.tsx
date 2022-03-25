import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import Image from "next/image";

import styles from "./index.module.scss";

import { StoryBlockImageURL, StoryBlockLoader } from "utils";
import type { Image as ImageType } from "services/Cms/types";

export interface NavbarProps {
  onClickButton?: () => void;
  onClickLogo?: () => void;
  defaultImage: ImageType;
  darkImage: ImageType;
}

const Navbar = ({ onClickButton, onClickLogo, defaultImage, darkImage }: NavbarProps) => {
  const [light, setLight] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setLight(window.scrollY > 31.5);
  }, [setLight]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AppBar className={[styles.appBar, light ? styles.appBarLight : ""].join(" ")}>
      <Toolbar>
        <IconButton
          disableRipple
          aria-label="menu"
          color="inherit"
          edge="start"
          onClick={onClickButton}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Box className={styles.logoContainer}>
          <Image
            alt={light ? defaultImage.alt : darkImage.alt}
            blurDataURL={StoryBlockImageURL({
              src: light ? defaultImage.filename : darkImage.filename,
              height: 40,
              width: 82,
              quality: 10,
            })}
            height={40}
            loader={StoryBlockLoader}
            src={light ? defaultImage.filename : darkImage.filename}
            width={82}
            onClick={onClickLogo}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
