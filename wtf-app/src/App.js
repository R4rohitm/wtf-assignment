import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
