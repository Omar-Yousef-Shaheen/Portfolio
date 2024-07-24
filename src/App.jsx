import "./App.css";
import ButtonToUp from "./Components/ButtonToUp/ButtonToUp";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div id="header" className="container">
      <Header />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      <ButtonToUp />
    </div>
  );
}

export default App;
