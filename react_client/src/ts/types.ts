export type RoleChangeHandler = (role: Role) => void;
export type GameStageChangeHandler = (index: number) => void;
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
