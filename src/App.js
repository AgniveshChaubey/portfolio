import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { extendTheme } from "@chakra-ui/react";
import Banner from "./components/Banner";

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Share Tech Mono', monospace`,
      body: `'Ubuntu Mono', monospace`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main className="font-link">
          <Header />
          {/* <Banner /> */}
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
