import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createUserData } from "../../../service/user.service";

const labelStyles = {
  fontSize: "20px",
};
const inputStyles = {
  padding: "5px",
  fontSize: "14px",
  border: "1px solid gray",
};

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => createUserData(data))}>
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
        <input
          style={inputStyles}
          {...register("firstName")}
          placeholder="First Name"
          id="firstName"
        />
        <label style={labelStyles} htmlFor="lastName">
          Last Name:
        </label>
        <input
          style={inputStyles}
          {...register("lastName")}
          placeholder="Last Name"
          id="lastName"
        />
        <label style={labelStyles} htmlFor="email">
          Email:
        </label>
        <input
          {...register("email")}
          style={inputStyles}
          placeholder="Email"
          id="email"
        />
        <label style={labelStyles} htmlFor="password">
          Password:
        </label>
        <input
          style={inputStyles}
          {...register("password", {
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Password"
          id="password"
        />
        <input type="submit" />
      </Flex>
    </form>
  );
}
