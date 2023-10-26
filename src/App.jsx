import Header from "./components/Header/Header";
import Router from "./router/router";
import { Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BrowserRouter>
      <Flex flexDirection={"column"}>
        <Header onOpen={onOpen} />
        <Router isOpen={isOpen} onClose={onClose} />
      </Flex>
    </BrowserRouter>
  );
}
