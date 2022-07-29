import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import Informative from "sections/Informative";
import { Content } from "services/Cms/types";
import { CmsService } from "services/Cms";
import Main from "layout/Main";
import Logos from "sections/Logos";
import MainBanner from "sections/MainBanner";
import Steps from "sections/Steps";
import InfoSection from "sections/Info";
import Testimonials from "sections/Testimonials";
import { logger } from "utils";

export const getStaticProps: GetStaticProps<Content> = async () => {
  const { data } = await CmsService.getContentFetch();

  const {
    data: {
      LazoscontentItem: { content },
    },
  } = data;

  logger("Home Generated")

  return {
    props: content,
    revalidate: 300, //5min
  };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    sidebar,
    logo_navbar,
    logo_navbar_dark,
    banner_image,
    title_logos,
    logos,
    program_information_title,
    program_information_description,
    program_information_title_w,
    program_information_description_w,
    title_steps,
    steps,
    information_section: [{ link, description, button_text }],
    media,
    logo_fundacion,
    logo_andreani,
    title_testimonials,
    testimonials_image,
    testimonials,
    terms,
  } = props;

  return (
    <Main
      darkImage={logo_navbar_dark}
      defaultImage={logo_navbar}
      logo_andreani={logo_andreani}
      logo_fundacion={logo_fundacion}
      media={media ? media[0] : undefined}
      sidebarData={sidebar}
    >
      <MainBanner image={banner_image} />
      <InfoSection button_link={link.url} button_text={button_text} text={description} />
      <Steps data={steps} terms={terms} title={title_steps} />
      <Informative
        description={program_information_description}
        description_white={program_information_description_w}
        title={program_information_title}
        title_white={program_information_title_w}
      />
      <Logos data={logos} title={title_logos} />
      <Testimonials data={testimonials} image={testimonials_image} title={title_testimonials} />
    </Main>
  );
};

export default Home;
