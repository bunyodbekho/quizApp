import { Flex, Button } from "@chakra-ui/react";
import Selector from "../../Select/Selector";
import { Link } from "react-router-dom";
import DisplayTable from "../../DisplayTable/DisplayTable";
import { useState } from "react";
import { getUsers } from "../../../service/user.service";
import { useEffect } from "react";
import { getUserByID } from "../../../service/user.service";

export default function Users() {
  const [curUserId, setCurUserId] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!curUserId) return;

    getUserByID(curUserId).then((res) => {
      setUserData({
        id: res.data.id,
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        password: res.data.password,
      });
    });
  }, [curUserId]);

  return (
    <Flex
      h={"600px"}
      flexDirection="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Selector setCurUserId={setCurUserId} />
      {curUserId && <DisplayTable userData={userData} />}
      <Link to="/create-user">
        <Button colorScheme="blue" color={"#fff"}>
          Create user
        </Button>
      </Link>
    </Flex>
  );
}
