import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">home 이동</Link>
      <Link href="/performance">performance 이동</Link>
      <Link href="/reliability">rel 이동</Link>
      <Link href="/scale">scale 이동</Link>
    </div>
  );
}
