import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "./components/header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";
import Skills from "./components/skills";
import ContactForm from "./components/ContactForm";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import your global CSS
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Project />
        <Skills />
        <ContactForm />
        {/* <ImageSlider /> */}
      </main>
      
      <Footer />
    </>
  );
}

export default App;