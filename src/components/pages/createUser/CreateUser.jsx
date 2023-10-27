import { Flex, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createUserData } from "../../../service/user.service";
import { Link } from "react-router-dom";

const labelStyles = {
  fontSize: "20px",
};
const inputStyles = {
  padding: "5px",
  fontSize: "14px",
  border: "1px solid gray",
};

export default function CreateUser({ setIsOultlet }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        createUserData(data);
      })}
    >
      <Flex
        flexDirection={"column"}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"30px"}
      >
        <label style={labelStyles} htmlFor="firstName">
          First Name:
        </label>
        <Input
          style={inputStyles}
          {...register("firstName")}
          placeholder="First Name"
          id="firstName"
          required
        />
        <label style={labelStyles} htmlFor="lastName">
          Last Name:
        </label>
        <Input
          style={inputStyles}
          {...register("lastName")}
          placeholder="Last Name"
          id="lastName"
          required
        />
        <label style={labelStyles} htmlFor="email">
          Email:
        </label>
        <Input
          {...register("email")}
          style={inputStyles}
          placeholder="Email"
          id="email"
          required
        />
        <label style={labelStyles} htmlFor="password">
          Password:
        </label>
        <Input
          style={inputStyles}
          {...register("password", {
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Password"
          id="password"
          required
        />
        <Link to="/users" onClick={() => setIsOultlet((cur) => !cur)}>
          <Input type="submit" cursor={"pointer"} />
          {/* <Button type="submit">Save</Button> */}
        </Link>
      </Flex>
    </form>
  );
}
