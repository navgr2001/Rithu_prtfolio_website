import type { MouseEvent } from "react";
import { Container } from "../components/Container";
import { designer, navItems } from "../data/content";
import { navigateToSection } from "../utils/sectionNavigation";

export function Footer() {
  const handleSectionClick =
    (targetId: string) =>
    (event: MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
      navigateToSection(targetId);
    };

  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center gap-5 text-center text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:text-left">
        <p>© 2026 {designer.name}. All rights reserved.</p>

        <nav
          className="flex flex-wrap justify-center gap-4 md:justify-end"
          aria-label="Footer navigation"
        >
          <a
            href="/"
            onClick={handleSectionClick("home")}
            className="transition hover:text-white"
          >
            Home
          </a>

          {navItems.map((item) => (
            <a
              key={item.targetId}
              href="/"
              onClick={handleSectionClick(item.targetId)}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
