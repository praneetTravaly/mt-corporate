import Ceo from "./components/layout/Ceo";
import Credibility from "./components/layout/Credebility";
import Ecosystem from "./components/layout/Ecosystem";
import Footer from "./components/layout/Footer";
import ForTheHosts from "./components/layout/ForTheHosts";
import GetInTouch from "./components/layout/GetInTouch";
import HealthCheck from "./components/layout/HealthCheck";
import Hero from "./components/layout/Hero";
import Members from "./components/layout/Members";
import OnTheMove from "./components/layout/OnTheMove";
import Record from "./components/layout/Record";
import Standby from "./components/layout/Standby";
import Success from "./components/layout/Success";
import TheNumbers from "./components/layout/TheNumbers";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <section id="brands">
        <Ecosystem />
      </section>

      <section>
        <Ceo />
      </section>

      <section>
        <Standby />
      </section>

      <section>
        <Credibility />
      </section>

      <section id="investors">
        <TheNumbers />
      </section>

      <section id="travellers">
        <OnTheMove />
      </section>

      <section id="hoteliers">
        <ForTheHosts />
      </section>

      <section>
        <Success />
      </section>

      <section>
        <HealthCheck />
      </section>

      <section>
        <Members />
      </section>

      <section id="newsroom">
        <Record />
      </section>

      <section id="contact">
        <GetInTouch />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
