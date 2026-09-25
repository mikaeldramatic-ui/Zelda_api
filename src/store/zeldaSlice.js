import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: true,
  error: null,
  favorites: [],
};

const zeldaSlice = createSlice({
  name: "zelda",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id,
      );
    },
  },
});

export const { setItems, setLoading, setError, addFavorite, removeFavorite } =
  zeldaSlice.actions;
export default zeldaSlice.reducer;
