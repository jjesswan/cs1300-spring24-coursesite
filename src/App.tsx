import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Navigation />
        <Home />
      </BrowserRouter>
    </ChakraProvider>
  );
}
