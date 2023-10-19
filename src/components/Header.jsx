import { Heading, Flex } from "@chakra-ui/react";

export default function Header({ children }) {
  return (
    <div className="header">
      <Flex bgColor="#1d2a35" color="white">
        <Heading>{children}</Heading>
      </Flex>
    </div>
  );
}
