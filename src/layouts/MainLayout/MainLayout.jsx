import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react";

export default function MainLayout({ isOpen, onClose }) {
  return (
    <Flex flexDirection={"column"}>
      <Sidebar isOpen={isOpen} onClose={onClose} />

      <Center flex={1}>
        <Outlet />
      </Center>
    </Flex>
  );
}
