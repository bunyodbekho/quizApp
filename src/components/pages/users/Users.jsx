import { Flex, Button, Spinner } from "@chakra-ui/react";
import Selector from "../../Select/Selector";
import { Link, Outlet } from "react-router-dom";
import DisplayTable from "../../DisplayTable/DisplayTable";
import { useState } from "react";
import { useEffect } from "react";
import { getUserByID } from "../../../service/user.service";

export default function Users({
  isOutlet,
  setIsOultlet,
  curUserId,
  setCurUserId,
}) {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [clearData, setClearData] = useState(false);

  useEffect(() => {
    if (!curUserId) return;
    setIsLoading(true);
    getUserByID(curUserId)
      .then((res) => {
        setUserData({
          id: res.data.id,
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          password: res.data.password,
        });
      })
      .catch((err) => {
        console.log("err", err); // log
      })
      .finally(() => {
        setIsLoading(false);
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
      {!isOutlet ? (
        <>
          <Flex gap={"20px"}>
            <Selector
              setCurUserId={setCurUserId}
              setUserData={setUserData}
              clearData={clearData}
            />
            <Link to="/users/create-user">
              <Button
                colorScheme="blue"
                color={"#fff"}
                onClick={() => setIsOultlet((cur) => !cur)}
              >
                +
              </Button>
            </Link>
          </Flex>

          {!isLoading ? (
            curUserId &&
            userData && (
              <DisplayTable
                data={userData}
                curUserId={curUserId}
                setCurUserId={setCurUserId}
                setClearData={setClearData}
              />
            )
          ) : (
            <Spinner />
          )}
        </>
      ) : (
        <Outlet />
      )}
    </Flex>
  );
}
