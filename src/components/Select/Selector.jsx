import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getUsers } from "../../service/user.service";

export default function Selector({ setCurUserId, setUserData, clearData }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setOptions(
          res?.data.map((user) => ({
            value: user?.id,
            label: `${user.firstName} ${user.lastName}`,
          }))
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <Select
      name="colors"
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: "300px",
        }),
      }}
      onChange={(curId) => {
        setCurUserId(curId.value);
        setUserData("");
      }}
    />
  );
}
