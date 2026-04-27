import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Grandvillia Adaletey" },
  { id: "1", name: "Irene Dzigbordzi" },
  { id: "2", name: "Seraphine Enam Kattah" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
