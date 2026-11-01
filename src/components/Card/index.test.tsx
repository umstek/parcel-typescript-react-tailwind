import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from "./index";

describe("Card", () => {
  it("renders the title, description and tags", () => {
    render(
      <Card
        title="Smoke test title"
        description="Smoke test description"
        tags={["#parcel", "#react"]}
      />,
    );

    expect(screen.getByText("Smoke test title")).toBeTruthy();
    expect(screen.getByText("Smoke test description")).toBeTruthy();
    expect(screen.getByText("#parcel")).toBeTruthy();
    expect(screen.getByText("#react")).toBeTruthy();
  });

  it("omits the image when none is provided", () => {
    const { container } = render(<Card title="No image" />);

    expect(container.querySelector("img")).toBeNull();
  });
});
