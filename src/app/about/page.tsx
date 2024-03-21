import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: " by About next app",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About
    </main>
  );
}
