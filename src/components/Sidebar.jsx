import { Heading, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        gap="30px"
        padding="30px"
        w="20%"
        height="100vh"
        bgColor="#15202b"
        color="white"
      >
        <Box>
          <Heading as="h2" size="md">
            quizApp
          </Heading>
        </Box>
        <Box>
          <Flex flexDirection="column" alignItems="center" gap="20px">
            <Link to={"/"}>Main Page</Link>
            <Link to={"/tests"}>Tests</Link>
            <Link to={"/groups"}>Groups</Link>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
