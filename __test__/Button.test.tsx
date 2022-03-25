import React from "react";

import { render } from "./utils";

import Button, { ButtonProps } from "components/Button";

const defaultProps: ButtonProps = {
  text: "test",
};

describe("<Button />", () => {
  it("Should render", () => {
    const { asFragment } = render(<Button {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render items", () => {
    const { getByText } = render(<Button {...defaultProps} />);

    expect(getByText("test")).toBeInTheDocument();
  });
});
