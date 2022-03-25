import React from "react";
import { render } from "@testing-library/react";

import MarkDown from "components/MarkDown";

describe("<Markdown />", () => {
  it("should render without crash", () => {
    const { asFragment } = render(<MarkDown>Test</MarkDown>);

    expect(asFragment()).toMatchSnapshot();
  });
});
