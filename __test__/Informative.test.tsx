import React from "react";

import { render } from "./utils";

import Informative from "sections/Informative";
import type { InformativeProps } from "sections/Informative";

const defaultProps: InformativeProps = {
  title: "title test",
  description: "description test",
  title_white: "title white test",
  description_white: "description white test",
};

describe("<Informative />", () => {
  it("Should render", () => {
    const { asFragment } = render(<Informative {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render title in red section", () => {
    const { getByText } = render(<Informative {...defaultProps} />);

    expect(getByText(defaultProps.title)).toBeInTheDocument();
  });
  it("Should render description in red section", () => {
    const { getByText } = render(<Informative {...defaultProps} />);

    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });
  it("Should render title in white section", () => {
    const { getByText } = render(<Informative {...defaultProps} />);

    expect(getByText(defaultProps.title_white)).toBeInTheDocument();
  });
  it("Should render description in white section", () => {
    const { getByText } = render(<Informative {...defaultProps} />);

    expect(getByText(defaultProps.description_white)).toBeInTheDocument();
  });
});
