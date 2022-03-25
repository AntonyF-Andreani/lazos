import React from "react";

import { act, render } from "./utils";

import Steps, { StepsProps } from "sections/Steps";

const defaultProps: StepsProps = {
  title: "test",
  data: [
    {
      title: "title-test",
      description: "description-test",
      image: {
        filename: "/imagetest.jpg",
      },
      second_image: {
        filename: "/secondimagetest.jpg",
      },
    },
  ],
  terms: {
    filename: "/test.pdf",
  },
};

describe("<Steps />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  it("should render", () => {
    const { asFragment } = render(<Steps {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render second image", () => {
    const { getByAltText } = render(<Steps {...defaultProps} />);

    const secondImage = getByAltText("Avatar-second");

    expect(secondImage).toBeInTheDocument();
  });
  it("should't render secondImage if is not present", () => {
    const { getAllByRole } = render(
      <Steps
        data={defaultProps.data.map((item) => ({ ...item, second_image: undefined }))}
        terms={defaultProps.terms}
        title={defaultProps.title}
      />
    );

    const onlyFirstImage = getAllByRole("img");

    expect(onlyFirstImage).toHaveLength(1);
  });

  it("should have terms in href", () => {
    const { getByRole } = render(<Steps {...defaultProps} />);

    const terms = getByRole("link");

    expect(terms.hasAttribute("href")).toBeTruthy();
    expect(terms.getAttribute("href")).toBe(defaultProps.terms.filename);
  });

  it("should render with specific class", async () => {
    const { getByTestId } = render(
      <Steps
        data={[
          ...defaultProps.data,
          ...defaultProps.data,
          ...defaultProps.data,
          ...defaultProps.data,
        ]}
        terms={defaultProps.terms}
        title={defaultProps.title}
      />
    );

    act(() => {
      jest.advanceTimersByTime(5000);
      jest.clearAllTimers();
    });

    expect(getByTestId("flipCard3")).toHaveClass("flipNow");
  });
});
