import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h3>About us</h3>
      <ul>
        <li>
          <Link href="/about/contact">contact</Link>
        </li>
        <li>
          <Link href="/about/team">team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
