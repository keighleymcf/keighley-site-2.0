import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import highlightsContent from "@/content/highlights.json";

describe("AchievementsSection", () => {
  it("renders all achievement cards", () => {
    render(<AchievementsSection />);
    for (const card of highlightsContent.cards) {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    }
  });

  it("renders card subtitles", () => {
    render(<AchievementsSection />);
    for (const card of highlightsContent.cards) {
      expect(screen.getAllByText(card.subtitle).length).toBeGreaterThan(0);
    }
  });
});
