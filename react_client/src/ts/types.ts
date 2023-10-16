// Dodgy rule
// eslint-disable-next-line no-unused-vars
export type ExtraClassToggleHandler = (display: boolean) => void;

export type ItemCategory =
    | "weapons"
    | "armor"
    | "accessories"
    | "buffs"
    | "mounts"
    | "lights";

export type Role =
    | "melee"
    | "ranged"
    | "magic"
    | "summoner"
    | "mixed"
    | "healer"
    | "tank"
    | undefined;

export type items = ReadonlyArray<item>;
export interface item {
    name: string;
    role: Role;
    url: string;
    imgPath: string;
    category: ItemCategory;
    gameStageAvailable: number;
}
