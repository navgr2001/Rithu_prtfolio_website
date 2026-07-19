import { useEffect, useMemo, useState } from "react";
import { Header } from "./sections/Header";
import { IntroScreen } from "./sections/IntroScreen";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { BackToTopButton } from "./components/BackToTopButton";
import { normalizeSinglePageUrl } from "./utils/sectionNavigation";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }

  return "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    normalizeSinglePageUrl();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // localStorage can fail in some privacy modes.
    }
  }, [theme]);

  useEffect(() => {
    const protectedSelector = [
      "img",
      ".theme-brand",
      ".theme-hero-card",
      ".project-gallery-main",
      ".project-thumbnail",
      ".project-lightbox-stage",
      ".project-lightbox-thumbnails",
    ].join(",");

    const isProtectedTarget = (target: EventTarget | null): boolean =>
      target instanceof Element && Boolean(target.closest(protectedSelector));

    const handleContextMenu = (event: MouseEvent): void => {
      if (isProtectedTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (event: DragEvent): void => {
      if (isProtectedTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleSelectStart = (event: Event): void => {
      if (isProtectedTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    document.addEventListener("selectstart", handleSelectStart, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("selectstart", handleSelectStart, true);
    };
  }, []);

  const isLightMode = useMemo(() => theme === "light", [theme]);

  const handleGetStarted = (): void => {
    setShowIntro(false);
    normalizeSinglePageUrl();

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });
  };

  const handleToggleTheme = (): void => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  if (showIntro) {
    return <IntroScreen onGetStarted={handleGetStarted} />;
  }

  return (
    <div className="theme-shell min-h-screen">
      <Header isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
