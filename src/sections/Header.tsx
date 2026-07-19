import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { HiMenuAlt3, HiMoon, HiSun, HiX } from "react-icons/hi";
import { Container } from "../components/Container";
import { navItems } from "../data/content";
import { navigateToSection } from "../utils/sectionNavigation";

type HeaderProps = {
  isLightMode: boolean;
  onToggleTheme: () => void;
};

export function Header({ isLightMode, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = (): void => {
    setIsOpen(false);
  };

  const handleSectionClick =
    (targetId: string) =>
    (event: MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
      closeMobileMenu();
      navigateToSection(targetId);
    };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="theme-header fixed inset-x-0 top-0 z-[9999] w-full backdrop-blur-xl"
    >
      <Container className="relative z-[10002] flex min-h-20 items-center justify-between gap-4">
        <a
          href="/"
          onClick={handleSectionClick("home")}
          className="theme-brand"
          aria-label="Go to home"
        >
          <img
            src={
              isLightMode
                ? "/images/lightmodelogo.png"
                : "/images/darkmodelogo.png"
            }
            alt="Rithu Savindaya interior design logo"
            className="theme-brand-image"
          />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.targetId}
              href="/"
              onClick={handleSectionClick(item.targetId)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle inline-flex h-11 items-center rounded-full px-1.5"
            aria-label={
              isLightMode ? "Switch to dark mode" : "Switch to light mode"
            }
            title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span
              className={`theme-toggle-icon px-2.5 ${
                isLightMode ? "theme-toggle-icon--active-light" : ""
              }`}
            >
              <HiSun size={16} />
            </span>

            <span
              className={`theme-toggle-icon px-2.5 ${
                !isLightMode ? "theme-toggle-icon--active-dark" : ""
              }`}
            >
              <HiMoon size={16} />
            </span>

            <motion.span
              layout
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 26,
              }}
              className={`theme-toggle-thumb ${
                isLightMode
                  ? "theme-toggle-thumb--light translate-x-0"
                  : "translate-x-[2.1rem]"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((currentState) => !currentState)}
            className="theme-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <button
          type="button"
          className="theme-mobile-menu-backdrop md:hidden"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />
      )}

      {isOpen && (
        <div
          id="mobile-navigation"
          className="theme-mobile-menu relative z-[10002] md:hidden"
        >
          <Container className="flex flex-col py-5">
            {navItems.map((item) => (
              <a
                key={item.targetId}
                href="/"
                className="theme-mobile-link border-b py-4 text-sm uppercase tracking-[0.3em] last:border-b-0"
                onClick={handleSectionClick(item.targetId)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </motion.header>
  );
}
