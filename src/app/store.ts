import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import spellsReducer from "../features/spells/spellsSlice";
import { apiSlice } from "../features/spells/spells-api-slice";

export const store = configureStore({
  reducer: {
    spells: spellsReducer,
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
