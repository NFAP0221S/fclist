import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">performance 이동</Link>
        <Link href="/reliability">rel 이동</Link>
        <Link href="/scale">scale 이동</Link>
      </div>
      Home Page
    </div>
  );
}
