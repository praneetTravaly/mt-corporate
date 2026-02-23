import Ceo from "./components/layout/Ceo";
import Ecosystem from "./components/layout/Ecosystem";
import Hero from "./components/layout/Hero";
import Standby from "./components/layout/Standby";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Ecosystem />
      <Ceo />
      <Standby />
    </div>
  );
}
