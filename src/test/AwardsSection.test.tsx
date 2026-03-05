import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AwardsSection } from "@/components/sections/AwardsSection";
import awardsContent from "@/content/awards.json";

describe("AwardsSection", () => {
  it("renders the section heading", () => {
    render(<AwardsSection />);
    expect(screen.getByText(awardsContent.heading)).toBeInTheDocument();
  });

  it("renders all award titles", () => {
    render(<AwardsSection />);
    for (const award of awardsContent.items) {
      expect(screen.getByText(award.title)).toBeInTheDocument();
    }
  });

  it("renders award organizations", () => {
    render(<AwardsSection />);
    for (const award of awardsContent.items) {
      expect(screen.getByText(award.organization)).toBeInTheDocument();
    }
  });
});
