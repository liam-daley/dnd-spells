import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import spellReducer from "../features/spell/spellSlice";
import favouriteSpellReducer from "../features/favouriteSpells/favouriteSpellsSlice";
import { apiSlice } from "../api/dnd-api-slice";

export const store = configureStore({
  reducer: {
    spell: spellReducer,
    favouriteSpells: favouriteSpellReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware); //TODO: track cache lifetimes
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
