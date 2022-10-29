import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [
      { id: 1, name: "персонаж" },
      { id: 2, name: "персонажперсонажперсонаж" },
      {
        id: 3,
        name: "персонажперсонажперсонаж персонажперсонажперсонаж персонажперсонажперсонаж персонажперсонажперсонажперсонажперсонажперсонаж",
      },
    ],
  },
  reducers: {},
});

export default charactersSlice.reducer;
