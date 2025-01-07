import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice"; // Import your slice
import { MODE_ENV } from "src/constants"; // Import your environment variable

// Combine all slices (reducers)
const allReducers = combineReducers({
  users: UsersSlice, // Add more slices here if needed
});

// Optional: Handle HYDRATE-like functionality
const masterReducer = (state, action) => {
  if (action.type === "HYDRATE") {
    // Manually merge server-side state if needed
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return allReducers(state, action);
  }
};

// Configure the Redux store
const store = configureStore({
  reducer: masterReducer, // Use the root reducer
  devTools: MODE_ENV === "development", // Enable Redux DevTools in development mode
});

export default store;
