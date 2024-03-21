import { Navigation } from "./Navigation";

export default function TheHeader() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
}
