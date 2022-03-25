import React from "react";

import { render } from "./utils";

import Sidebar, { SidebarProps } from "components/Sidebar";

const defaultProps: SidebarProps = {
  open: true,
  onClose: () => {},
  data: [],
};

describe("<Sidebar />", () => {
  it("Should render", () => {
    const { asFragment } = render(<Sidebar {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render items", () => {
    const { getByTestId } = render(
      <Sidebar {...defaultProps} data={[{ _uid: "test", text: "text-test" }]} />
    );

    expect(getByTestId("sidebar-item-test")).toBeInTheDocument();
  });

  it("Should render media items", () => {
    const { getByTestId } = render(
      <Sidebar
        {...defaultProps}
        data={[{ _uid: "test", text: "text-test" }]}
        media={{
          linkedin: "linkedin",
          twitter: "twitter",
          facebook: "facebook",
          youtube: "youtube",
        }}
      />
    );

    expect(getByTestId("sidebar-linkedin")).toBeInTheDocument();
    expect(getByTestId("sidebar-twitter")).toBeInTheDocument();
    expect(getByTestId("sidebar-facebook")).toBeInTheDocument();
    expect(getByTestId("sidebar-youtube")).toBeInTheDocument();
  });
});
