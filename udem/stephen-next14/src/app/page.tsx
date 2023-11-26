import Hero from "@/components/hero";
import homeImg from "public/img/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    ></Hero>
  );
}
