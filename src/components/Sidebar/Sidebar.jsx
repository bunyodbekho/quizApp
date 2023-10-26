import { Heading, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <DrawerCloseButton />
          <Flex flexDirection={"column"}>
            <Link to="/tests" onClick={onClose}>
              Tests
            </Link>
            <Link to="/groups" onClick={onClose}>
              Groups
            </Link>
            <Link to="/exam" onClick={onClose}>
              Exam
            </Link>
            <Link to="/users" onClick={onClose}>
              Users
            </Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
