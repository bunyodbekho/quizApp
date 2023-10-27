import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react";

export default function MainLayout({ isOpen, onClose, onOpen }) {
  return (
    <Flex flexDirection={"column"}>
      <Sidebar isOpen={isOpen} onClose={onClose} />

      <Header onOpen={onOpen} />

      <Center flex={1}>
        <Outlet />
      </Center>
    </Flex>
  );
}
