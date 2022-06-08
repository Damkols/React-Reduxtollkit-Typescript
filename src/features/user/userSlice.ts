import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  user: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  user: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", (state) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.error = "");
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.user = []),
        (state.error = action.error.message || "Something went wrong");
    });
  },
});

export default userSlice.reducer;
