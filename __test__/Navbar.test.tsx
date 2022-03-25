import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "./utils";

import NavBar from "components/Navbar";

describe("<Navbar />", () => {
  it("Should renders", () => {
    const { asFragment } = render(
      <NavBar
        darkImage={{ filename: "darkImageSrc", alt: "darkImage" }}
        defaultImage={{ filename: "defaultImageSrc", alt: "defaultImage" }}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have className on scroll", () => {
    const { getByRole } = render(
      <NavBar
        darkImage={{ filename: "darkImageSrc", alt: "darkImage" }}
        defaultImage={{ filename: "defaultImageSrc", alt: "defaultImage" }}
      />
    );

    expect(getByRole("banner")).toHaveClass("appBar");

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(getByRole("banner")).toHaveClass("appBarLight");
  });
  it("should not add light class on scroll minor to 31.5", () => {
    const { getByRole } = render(
      <NavBar
        darkImage={{ filename: "darkImageSrc", alt: "darkImage" }}
        defaultImage={{ filename: "defaultImageSrc", alt: "defaultImage" }}
      />
    );

    expect(getByRole("banner")).toHaveClass("appBar");

    fireEvent.scroll(window, { target: { scrollY: 30.5 } });

    expect(getByRole("banner")).not.toHaveClass("appBarLight");
  });
});
