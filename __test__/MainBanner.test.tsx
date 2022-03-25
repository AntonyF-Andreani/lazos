import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MainBanner, { BannerProps } from "sections/MainBanner";

const defaultProps: BannerProps = {
  image: {
    filename: `banner`,
    alt: "test",
  },
};

describe("<MainBanner />", () => {
  it("should render without crash", () => {
    const { asFragment } = render(<MainBanner {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the correct image", () => {
    const { getAllByRole } = render(<MainBanner {...defaultProps} />);

    const images = getAllByRole("img");

    expect(images[0].getAttribute("src")).toBe(defaultProps.image.filename);
  });

  it("should have the correct alt of image", () => {
    const { getAllByRole } = render(<MainBanner {...defaultProps} />);

    const images = getAllByRole("img");

    expect(images[0].getAttribute("alt")).toBe(defaultProps.image.alt);
  });
});
