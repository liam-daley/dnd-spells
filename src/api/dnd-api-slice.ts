import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Spell } from "../features/spell/spell.interface";

export interface APIReference {
  index: string;
  name: string;
  url: string;
}

interface APIReferenceList {
  count: number;
  results: APIReference[];
}

interface SpellQueryParams {
  levels: number[];
  schools: MagicSchool[];
}

enum MagicSchool {
  ABJURATION = "abjuration",
  CONJURATION = "conjuration",
  DIVINATION = "divination",
  ENCHANTMENT = "enchantment",
  EVOCATION = "evocation",
  ILLUSION = "illusion",
  NECROMANCY = "necromancy",
  TRANSMUTATION = "transmutation",
}

function paramsToString(params: SpellQueryParams | void) {
  if (!params) return "";
  let urlParams = "?";

  params.levels.forEach((level) => {
    urlParams += `level=${level}&`;
  });
  params.schools.forEach((school) => {
    urlParams += `school=${school}&`;
  });
  return urlParams;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.dnd5eapi.co/api/",
  }),
  endpoints: (builder) => ({
    fetchSpells: builder.query<APIReferenceList, SpellQueryParams | void>({
      query: (
        params = {
          levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          schools: Object.values(MagicSchool),
        }
      ) => `/spells${paramsToString(params)}`,
    }),
    fetchSpell: builder.query<Spell, string | void>({
      query: (index = "") => `/spells/${index}`,
    }),
  }),
});

export const { useFetchSpellsQuery, useFetchSpellQuery } = apiSlice;
