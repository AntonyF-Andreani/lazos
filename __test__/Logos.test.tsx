import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { prepareViewport } from "../src/utils";

import Logos, { LogosProps } from "sections/Logos";

const defaultProps: LogosProps = {
  title: "test",
  data: [
    {
      _uid: "1",
      logo: {
        filename: `image-logo`,
        alt: "test",
      },
    },
    {
      _uid: "2",
      logo: {
        filename: `image-logo`,
        alt: "test",
      },
    },
    {
      _uid: "3",
      logo: {
        filename: `image-logo`,
        alt: "test",
      },
    },
  ],
};

describe("<Logos />", () => {
  beforeAll(() => {
    // Desktop viewport
    prepareViewport("(min-width:1200px)");
  });

  it("should render without crash", () => {
    const { asFragment } = render(<Logos {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have title", () => {
    const { getByText } = render(<Logos {...defaultProps} />);
    const element = getByText(defaultProps.title as string);

    expect(element).toBeInTheDocument();
  });

  it("should have the correct logo image", () => {
    const { getAllByRole } = render(<Logos {...defaultProps} />);

    const elements = getAllByRole("img");

    // loop property Swiper duplicate each logo img
    elements.map((el, index) => {
      return expect(el.getAttribute("src")).toBe(
        defaultProps.data[index]?.logo?.src ? defaultProps.data[index].logo.src : `image-logo`
      );
    });
  });

  it("should have the correct logo alt of image", () => {
    const { getAllByRole } = render(<Logos {...defaultProps} />);

    const elements = getAllByRole("img");

    // loop property Swiper duplicate each logo img
    elements.map((el, index) =>
      expect(el.getAttribute("alt")).toBe(
        defaultProps.data[index] ? defaultProps.data[index].logo.alt : `test`
      )
    );
  });

  it("should have the correct logo alt of image", () => {
    const { getAllByRole } = render(
      <Logos
        data={[
          {
            _uid: "1",
            logo: {
              filename: `image-logo`,
            },
          },
        ]}
        title={defaultProps.title}
      />
    );

    const elements = getAllByRole("img");

    // loop property Swiper duplicate each logo img
    elements.map((el) => {
      expect(el.getAttribute("alt")).toBe(`Logo cliente 0`);
    });
  });
});
