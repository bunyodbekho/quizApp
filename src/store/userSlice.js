import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userId: "",
  firstName: "",
  lastName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = "Bunyodbek";
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { setName, setUserId, setFirstName, setLastName } =
  userSlice.actions;

export default userSlice.reducer;
