import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer, { FooterProps } from "../src/sections/Footer";

const defaultProps: FooterProps = {
  logoFundacion: {
    filename: `fundacion`,
    alt: "fundacion",
  },
  logoAndreani: {
    filename: `andreani`,
    alt: "andreani",
  },
};

describe("<Footer />", () => {
  it("should render without crash", () => {
    const { asFragment } = render(<Footer {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the correct image", () => {
    const { getByAltText } = render(<Footer {...defaultProps} />);

    const logoFundacion = getByAltText("fundacion");
    const logoAndreani = getByAltText("andreani");

    expect(logoFundacion.getAttribute("src")).toBe(defaultProps.logoFundacion.filename);
    expect(logoAndreani.getAttribute("src")).toBe(defaultProps.logoAndreani.filename);
  });
});
