import NavBar from "./components/ui/NavBar";
import Banner from "./components/ui/Banner";
// import SecaoGaleria from "./components/ui/SecaoGaleria"; // Gallery hidden temporarily
import SecaoProjetos from "./components/ui/SecaoProjetos";
import EducationExperience from "./components/ui/EducationExperience";
import AboutMe from "./components/ui/AboutMe";
import ContactMe from "./components/ui/ContactMe";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <>
      <main className="w-full m-0 p-0">
        <div
          id="home"
          className="flex flex-col pt-20 h-screen w-full bg-[url('/background.jpeg')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/20 z-0" />
          <NavBar />
          <Banner />
        </div>
        <AboutMe />
        {/* <SecaoGaleria /> */} {/* Gallery hidden temporarily */}
        <SecaoProjetos />
        <EducationExperience />
        <ContactMe />
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
