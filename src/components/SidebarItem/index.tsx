import { faChevronRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemIconProps,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  ListProps,
} from "@mui/material";
import React from "react";

import styles from "./index.module.scss";

import { joinClasses } from "utils";
import { SidebarData } from "services/Cms/types";

export const SidebarItemAdapter = (sidebarData: SidebarData): SidebarItemProps => {
  return {
    listItemTextProps: {
      primary: sidebarData.text,
    },
    url: sidebarData.link?.url,
    subItems: sidebarData.children?.map(SidebarItemAdapter),
  };
};

export interface SidebarItemProps extends ListItemProps {
  listItemTextProps?: ListItemTextProps;
  listItemIconStartProps?: ListItemIconProps;
  subItems?: SidebarItemProps[];
  listProps?: ListProps;
  url?: string;
}

const SidebarItem = ({
  listItemTextProps,
  listItemIconStartProps,
  subItems,
  listProps,
  url,
  ...props
}: SidebarItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEnter, setIsEnter] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Link
        color="inherit"
        data-testid="sidebar-item-url"
        href={url !== "" ? url : undefined}
        underline="none"
      >
        <ListItem
          className={joinClasses(styles.listItem, props.className)}
          onClick={subItems ? handleToggle : undefined}
          onMouseEnter={() => setIsEnter(true)}
          onMouseLeave={() => setIsEnter(false)}
          {...props}
        >
          {listItemIconStartProps && <ListItemIcon {...listItemIconStartProps} />}
          {listItemTextProps && (
            <ListItemText
              color="inherit"
              {...listItemTextProps}
              data-testid="sidebar-item-text"
              primaryTypographyProps={{
                className: joinClasses(
                  styles.listItemText,
                  listItemTextProps.primaryTypographyProps?.className
                ),
              }}
            />
          )}
          {subItems && subItems.length > 0 && (
            <ListItemIcon
              className={styles.listItemIcon}
              data-testid="sidebar-item-icon"
              data-toright={isEnter || isOpen}
              sx={{
                marginRight: isEnter || isOpen ? "-8px" : 0,
              }}
            >
              <FontAwesomeIcon
                color="inherit"
                icon={faChevronRight}
                style={{
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </ListItemIcon>
          )}
        </ListItem>
      </Link>
      {subItems && subItems.length > 0 && (
        <Collapse in={isOpen}>
          <List className={styles.list} data-testid="sidebar-subitems-list" {...listProps}>
            {subItems.map((subItem, i) => (
              <SidebarItem
                key={`SidebarSubItem-${i}-${subItem.listItemTextProps?.primary ?? ""}`}
                className={joinClasses(styles.sidebarItemChild, subItem.className)}
                data-testid={`SidebarSubItem-${i}-${subItem.listItemTextProps?.primary ?? ""}`}
                {...subItem}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
