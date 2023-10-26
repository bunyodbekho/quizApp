import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function DisplayTable({ userData }) {
  return (
    <TableContainer bg={"#282c34"} color={"#fff"}>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Th>Id</Th>
            <Td>{userData.id}</Td>
          </Tr>
          <Tr>
            <Th>First Name</Th>
            <Td>{userData.firstName}</Td>
          </Tr>
          <Tr>
            <Th>Last Name</Th>
            <Td>{userData.lastName}</Td>
          </Tr>
          <Tr>
            <Th>Email</Th>
            <Td>{userData.email}</Td>
          </Tr>
          <Tr>
            <Th>Password</Th>
            <Td>{userData.password}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
