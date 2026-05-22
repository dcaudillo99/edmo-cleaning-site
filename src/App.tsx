import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import CallBand from "./components/CallBand";
import Clients from "./components/Clients";
import Difference from "./components/Difference";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <CallBand />
        <Clients />
        <Difference />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
