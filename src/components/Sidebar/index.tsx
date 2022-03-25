import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Drawer, Link, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import SidebarItem, { SidebarItemAdapter } from "../SidebarItem";

import styles from "./index.module.scss";

import { joinClasses } from "utils";
import { Media, SidebarData } from "services/Cms/types";

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
  data: SidebarData[];
  media?: Media;
}

const Sidebar = ({ open, onClose, data, media }: SidebarProps) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box className={styles.listContainer} role="presentation">
        <List>
          <ListItem>
            <ListItemIcon onClick={onClose}>
              <FontAwesomeIcon cursor={"pointer"} icon={faTimes} size="2x" />
            </ListItemIcon>
          </ListItem>

          {data.length !== 0 &&
            data.map((item, i) => (
              <SidebarItem
                key={item._uid}
                data-testid={`sidebar-item-${item._uid}`}
                divider={i !== data.length - 1}
                {...SidebarItemAdapter(item)}
              />
            ))}
        </List>
      </Box>
      <Box className={styles.mediaContainer}>
        {media && (
          <Box className={styles.media}>
            {media.facebook && (
              <Link
                className={joinClasses(styles.mediaIcon, styles.facebook)}
                color="inherit"
                data-testid="sidebar-facebook"
                href={media.facebook}
              >
                <FontAwesomeIcon icon={faFacebookF} size="sm" />
              </Link>
            )}
            {media.twitter && (
              <Link
                className={joinClasses(styles.mediaIcon, styles.twitter)}
                color="inherit"
                data-testid="sidebar-twitter"
                href={media.twitter}
              >
                <FontAwesomeIcon icon={faTwitter} size="sm" />
              </Link>
            )}
            {media.linkedin && (
              <Link
                className={joinClasses(styles.mediaIcon, styles.linkedin)}
                color="inherit"
                data-testid="sidebar-linkedin"
                href={media.linkedin}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
              </Link>
            )}
            {media.youtube && (
              <Link
                className={joinClasses(styles.mediaIcon, styles.youtube)}
                color="inherit"
                data-testid="sidebar-youtube"
                href={media.youtube}
              >
                <FontAwesomeIcon icon={faYoutube} size="sm" />
              </Link>
            )}
          </Box>
        )}
        <Typography>© {new Date().getFullYear()} Lazos</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
