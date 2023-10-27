import { useForm } from "react-hook-form";
import { Flex, Input } from "@chakra-ui/react";
import { updateUserData } from "../../service/user.service";
import { color } from "framer-motion";

const labelStyles = {
  fontSize: "20px",
};
const inputStyles = {
  padding: "5px",
  fontSize: "14px",
  border: "1px solid gray",
};

export default function DisplayTable({ data, curUserId }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      id: data?.id,
      email: data?.email,
      password: data?.password,
    },
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit((data) => updateUserData(curUserId, data))}>
      <Flex flexDirection={"column"} gap={"10px"}>
        <label style={labelStyles} htmlFor="id">
          Id:
        </label>
        <Input
          required
          style={inputStyles}
          {...register("id")}
          placeholder="Id"
          id="id"
          disabled
        />
        <label style={labelStyles} htmlFor="firstName">
          First Name:
        </label>
        <Input
          required
          style={inputStyles}
          {...register("firstName")}
          placeholder="First Name"
          id="firstName"
        />
        <label style={labelStyles} htmlFor="lastName">
          Last Name:
        </label>
        <Input
          required
          style={inputStyles}
          {...register("lastName")}
          placeholder="Last Name"
          id="lastName"
        />
        <label style={labelStyles} htmlFor="email">
          Email:
        </label>
        <Input
          required
          {...register("email")}
          style={inputStyles}
          placeholder="Email"
          id="email"
        />
        <label style={labelStyles} htmlFor="password">
          Password:
        </label>
        <Input
          required
          style={inputStyles}
          {...register("password", {
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Password"
          id="password"
        />

        <Input type="submit" cursor={"pointer"} />
      </Flex>
    </form>
  );
}
