import React from "react";
import { getByText, render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  test("Hero component is visible", () => {
    const { getByText } = render(<Hero
      backgroundimage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ctaLink="#"
      ctaText="Learn More"
      subtitle="Full Stack Web Developer"
      title="Meet Nicole..."
    />);
    const heroComponent = getByText("Meet Nicole...");
    expect(heroComponent).toBeVisible();
  });

  test("Hero component change background color when disabled and cursor is not allowed", () => {
    const { getByText, container } = render(<Hero
      backgroundimage="https://via.placeholder.com/1200x400"
      ctaLink="#"
      ctaText="Learn More"
      disabled
      subtitle="Full Stack Web Developer"
      title="Meet Nicole..."
    />);
    const HeroElement = getByText("Meet Nicole...");
    expect(HeroElement).toBeVisible();
    const heroContainer =container.firstChild;
    expect(heroContainer).toHaveStyle("cursor: not-allowed");
    expect(heroContainer).toHaveStyle("background-color: #e0e0e0");
  });

});
