import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("routing", () => {
  it("renders the home page on root URL", async () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.queryByText("Oops! Page not found")).not.toBeInTheDocument();
  });
});
