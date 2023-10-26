import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getUsers } from "../../service/user.service";
// import { setUserId } from "../../store/userSlice";

export default function Selector({ setCurUserId }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setOptions(
          res?.data.map((user) => ({ value: user?.id, label: user?.userName }))
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const styles = {
    width: "100%",
    padding: "30px",
    background: "black",
  };

  return (
    <Select
      name="colors"
      options={options}
      style={styles}
      width={300}
      onChange={(curId) => setCurUserId(curId.value)}
    />
  );
}
