import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create a user
export const createUser = createAsyncThunk(
  "site/createUser",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formdata
      );
      return response.data; // Return the response data on success
    } catch (error) {
      // Use rejectWithValue to return custom error message
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// async thunk logd in user

export const logdinuser = createAsyncThunk(
  "user/logdinuser",
  async (formdata, { rejectWithValue }) => {
    console.log(formdata);

    try {
      const response = await axios.post(
        "http://localhost:5000/signin",
        formdata
      );

      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "site",
  initialState: {
    isAuthenticated: false,
    user: null,
    status: "idle", // Can be "idle", "loading", "succeeded", or "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // Set the user data when the request is successful
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Set error message when request fails
      })
      .addCase(logdinuser.pending, (state, action) => {
        state.status = "loadibg";
        state.error = action.payload;
      })
      .addCase(logdinuser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(logdinuser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
