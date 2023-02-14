import { APIReference } from "../../api/dnd-api-slice";

enum SpellEffectType {
  SPHERE = "sphere",
  CONE = "cone",
  CYLINDER = "cylinder",
  LINE = "line",
  CUBE = "cube",
}

type SpellDamage =
  | {
      damage_at_character_level: any;
      damage_type: APIReference;
    }
  | {
      damage_at_slot_level: any;
      damage_type: APIReference;
    };

export interface Spell {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  area_of_effect: {
    size: number;
    type: SpellEffectType;
  };
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: SpellDamage;
  school: APIReference;
  classes: APIReference[];
  subclasses: APIReference[];
}
