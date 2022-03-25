import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Testimonials, { TestimonialsProps } from "sections/Testimonials";

const defaultProps: TestimonialsProps = {
  title: "Title test",
  image: { filename: `background-image`, alt: "test" },
  data: [
    {
      _uid: "1",
      comentario: "comentario test",
      autor: "autor test",
      lugar: "test",
    },
    {
      _uid: "2",
      comentario: "comentario test",
      autor: "autor test",
      lugar: "test",
    },
    {
      _uid: "3",
      comentario: "comentario test",
      autor: "autor test",
      lugar: "test",
    },
  ],
};

describe("<Testimonials />", () => {
  it("should render without crash", () => {
    const { asFragment } = render(<Testimonials {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have title", () => {
    const { getByText } = render(<Testimonials {...defaultProps} />);
    const element = getByText(defaultProps.title as string);

    expect(element).toBeInTheDocument();
  });

  it("should have the comentaries", () => {
    const { getAllByText } = render(<Testimonials {...defaultProps} />);

    const elements = getAllByText("comentario test");

    elements.map((el) => {
      return expect(el).toBeInTheDocument;
    });
  });
  it("should have the correct image", () => {
    const { getAllByRole } = render(<Testimonials {...defaultProps} />);

    const elements = getAllByRole("img");

    // loop property Swiper duplicate each logo img
    elements.map((el) => {
      return expect(el.getAttribute("src")).toBe(defaultProps.image.filename);
    });
  });
});
