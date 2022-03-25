import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "./utils";

import SidebarItem, { SidebarItemAdapter } from "components/SidebarItem";
import { SidebarData } from "services/Cms/types";

describe("<SidebarItem />", () => {
  it("should render", () => {
    const { asFragment } = render(<SidebarItem />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render children", () => {
    const { getByTestId, getByText } = render(
      <SidebarItem subItems={[{ listItemTextProps: { primary: "test" } }]} />
    );

    const text = getByText("test");
    const subItemsIcon = getByTestId("sidebar-item-icon");
    const listSubItems = getByTestId("sidebar-subitems-list");

    expect(text).toBeInTheDocument();
    expect(subItemsIcon).toBeInTheDocument();
    expect(listSubItems).toBeInTheDocument();
  });
  it("should render with classNames", () => {
    const { getByTestId } = render(
      <SidebarItem
        listItemTextProps={{
          primary: "test",
          primaryTypographyProps: { className: "testClass" },
        }}
      />
    );

    const text = getByTestId("sidebar-item-text");

    expect(text.firstChild).toHaveClass("testClass");
    expect(text.firstChild).toHaveClass("listItemText");
  });
  it("should render children with idGenerated", () => {
    const { getByTestId } = render(
      <SidebarItem subItems={[{ listItemTextProps: { primary: "test" } }]} />
    );
    const testIdGenerated = getByTestId("SidebarSubItem-0-test");

    expect(testIdGenerated).toBeInTheDocument();
  });
  it("should render children with idGenerated and without text", () => {
    const { getByTestId } = render(<SidebarItem subItems={[{}]} />);
    const testIdGenerated = getByTestId("SidebarSubItem-0-");

    expect(testIdGenerated).toBeInTheDocument();
  });
  it("should not render arrow and list with empty data", () => {
    const wrapper = render(<SidebarItem subItems={[]} />);

    const { queryAllByTestId } = wrapper;
    const subItemsIcon = queryAllByTestId("sidebar-item-icon");
    const listSubItems = queryAllByTestId("sidebar-subitems-list");

    expect(subItemsIcon).toHaveLength(0);
    expect(listSubItems).toHaveLength(0);
  });
  it("should not render arrow and list with undefined subItems", () => {
    const wrapper = render(<SidebarItem />);

    const { queryAllByTestId } = wrapper;
    const subItemsIcon = queryAllByTestId("sidebar-item-icon");
    const listSubItems = queryAllByTestId("sidebar-subitems-list");

    expect(subItemsIcon).toHaveLength(0);
    expect(listSubItems).toHaveLength(0);
  });

  it("Should url be undefined if is not in props", () => {
    const { getByTestId } = render(<SidebarItem />);

    const element = getByTestId("sidebar-item-url");

    expect(element.getAttribute("href")).toBeNull();
  });

  it("Should url be undefined if is an empty string", () => {
    const { getByTestId } = render(<SidebarItem url="" />);

    const element = getByTestId("sidebar-item-url");

    expect(element.getAttribute("href")).toBeNull();
  });

  it("Should url be url", () => {
    const url = "url";
    const { getByTestId } = render(<SidebarItem url={url} />);

    const element = getByTestId("sidebar-item-url");

    expect(element.getAttribute("href")).toBe(url);
  });

  it("Should have icon when is passed by prop", () => {
    const url = "url";
    const { getByTestId } = render(
      <SidebarItem
        listItemIconStartProps={{
          children: <div data-testid="icon-test" />,
        }}
        url={url}
      />
    );

    const startIcon = getByTestId("icon-test");

    expect(startIcon).toBeInTheDocument();
  });
  it("Should have styles  on open", () => {
    const { getByTestId } = render(
      <SidebarItem subItems={[{ listItemTextProps: { primary: "test" } }]} />
    );
    const sidebarItemIcon = getByTestId("sidebar-item-icon");

    fireEvent.click(sidebarItemIcon);

    expect(sidebarItemIcon.firstChild).toHaveStyle("transform: rotate(90deg)");
    expect(sidebarItemIcon).toHaveStyle("margin-right: -8px");
  });
  it("Should have styles  on hover", () => {
    const { getByTestId } = render(
      <SidebarItem
        data-testid="sidebarItem"
        subItems={[{ listItemTextProps: { primary: "test" } }]}
      />
    );
    const sidebarItemIcon = getByTestId("sidebar-item-icon");
    const sidebarItem = getByTestId("sidebarItem");

    fireEvent.mouseEnter(sidebarItem);

    expect(sidebarItemIcon).toHaveStyle("margin-right: -8px");
    fireEvent.mouseLeave(sidebarItem);

    expect(sidebarItemIcon).toHaveStyle("margin-right: 0px");
  });
});

describe("SidebarItemAdapter()", () => {
  it("Shold return basic object", () => {
    const sidebarData: SidebarData = {
      text: "text",
      _uid: "uid",
    };

    const result = SidebarItemAdapter(sidebarData);

    expect(result).toEqual({
      listItemTextProps: {
        primary: "text",
      },
    });
  });
  it("Should return url property when exists", () => {
    const sidebarData: SidebarData = {
      text: "text",
      _uid: "uid",
      link: {
        url: "url",
      },
    };

    const result = SidebarItemAdapter(sidebarData);

    expect(result).toEqual({
      listItemTextProps: {
        primary: "text",
      },
      url: "url",
    });
  });
  it("Should return children", () => {
    const sidebarData: SidebarData = {
      text: "text",
      _uid: "uid",
      children: [
        {
          _uid: "casea",
          text: "child1",
        },
      ],
    };

    const result = SidebarItemAdapter(sidebarData);

    expect(result).toEqual({
      listItemTextProps: {
        primary: "text",
      },
      subItems: [
        {
          listItemTextProps: {
            primary: "child1",
          },
        },
      ],
    });
  });
});
