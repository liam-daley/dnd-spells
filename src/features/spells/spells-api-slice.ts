import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface APIReferenceList<T> {
  count: number;
  results: T[];
}

export interface Spell {
  index: string;
  name: string;
  url: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.dnd5eapi.co/api/",
  }),
  endpoints: (builder) => ({
    fetchSpells: builder.query<APIReferenceList<Spell>, number | void>({
      query: () => "/spells", //(level = 0) => `/spells?level=${level}`,
    }),
  }),
});

export const { useFetchSpellsQuery } = apiSlice;
