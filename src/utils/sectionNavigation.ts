const DEFAULT_HEADER_OFFSET = 92;

export function normalizeSinglePageUrl(): void {
  if (typeof window === "undefined") {
    return;
  }

  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    window.history.replaceState({}, "", "/");
  }
}

export function scrollToSectionById(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
): void {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const headerElement = document.querySelector<HTMLElement>(".theme-header");

  const headerOffset = headerElement
    ? headerElement.offsetHeight + 12
    : DEFAULT_HEADER_OFFSET;

  const sectionTop =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(sectionTop, 0),
    behavior,
  });
}

export function navigateToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
): void {
  normalizeSinglePageUrl();

  window.requestAnimationFrame(() => {
    scrollToSectionById(sectionId, behavior);
  });
}
