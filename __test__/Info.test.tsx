import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import InfoSection, { InfoSectionProps } from "sections/Info";

const defaultProps: InfoSectionProps = {
  button_link: "url",
  button_text: "text",
  text: "description",
};

describe("<InfoSection />", () => {
  it("should render without crash", () => {
    const { asFragment } = render(<InfoSection {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the correct props rendered", () => {
    const { getByRole, container } = render(<InfoSection {...defaultProps} />);

    const button = getByRole("link");

    expect(button.hasAttribute("href")).toBeTruthy();
    expect(button.getAttribute("href")).toBe(defaultProps.button_link);

    expect(container).toHaveTextContent("text");
    expect(container).toHaveTextContent("description");
  });
});
