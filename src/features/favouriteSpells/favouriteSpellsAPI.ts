import { APIReference as Spell } from "../../api/dnd-api-slice";

// A mock function to mimic making an async request for data
export function fetchFavouriteSpells(
  spells = [
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    },
  ]
) {
  return new Promise<{ data: Spell[] }>((resolve) =>
    setTimeout(() => resolve({ data: spells }), 500)
  );
}
