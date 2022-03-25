import React from "react";

import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Media, SidebarData } from "services/Cms/types";
import type { Image as ImageType } from "services/Cms/types";
import Footer from "sections/Footer";

interface MainProps {
  sidebarData: SidebarData[];
  defaultImage: ImageType;
  darkImage: ImageType;
  media?: Media;
  logo_andreani: ImageType;
  logo_fundacion: ImageType;
}

const Main: React.FC<MainProps> = ({
  children,
  sidebarData,
  media,
  logo_andreani,
  logo_fundacion,
  ...images
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <>
      <Navbar {...images} onClickButton={handleClick} />
      <Sidebar data={sidebarData} media={media} open={open} onClose={() => setOpen(false)} />
      {children}
      <Footer logoAndreani={logo_andreani} logoFundacion={logo_fundacion} />
    </>
  );
};

export default Main;
