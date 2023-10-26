import { Heading, Flex } from "@chakra-ui/react";

export default function Header({ onOpen }) {
  return (
    <Flex bgColor="#1d2a35" color="white" padding="10px">
      <Heading>
        <button onClick={onOpen}>open</button>
      </Heading>
    </Flex>
  );
}
