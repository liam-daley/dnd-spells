import { Spell } from "./spells-api-slice";

// A mock function to mimic making an async request for data
export function fetchSpell(spell = {} as Spell) {
  return new Promise<{ data: Spell }>((resolve) =>
    setTimeout(() => resolve({ data: spell }), 500)
  );
}
