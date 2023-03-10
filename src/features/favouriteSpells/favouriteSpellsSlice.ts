import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { APIReference as Spell } from "../../api/dnd-api-slice";
import { fetchFavouriteSpells } from "./favouriteSpellsAPI";

export interface FavouriteSpellsState {
  value: Spell[];
  status: "idle" | "loading" | "failed";
}

const initialState: FavouriteSpellsState = {
  value: [
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    },
  ],
  status: "idle",
};

export const updateFavouriteSpellsAsync = createAsyncThunk(
  "spell/fetchFavouriteSpells",
  async (favouriteSpells: Spell[]) => {
    const response = await fetchFavouriteSpells(favouriteSpells);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const favouriteSpellsSlice = createSlice({
  name: "favouriteSpells",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateFavouriteSpells: (state, action: PayloadAction<Spell>) => {
      state.value.push(action.payload);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(updateFavouriteSpellsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateFavouriteSpellsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload[0]);
      })
      .addCase(updateFavouriteSpellsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { updateFavouriteSpells } = favouriteSpellsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.spell.value)`
export const favouriteSpells = (state: RootState) =>
  state.favouriteSpells.value;

export default favouriteSpellsSlice.reducer;
