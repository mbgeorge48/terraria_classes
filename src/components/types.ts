export type RoleChangeHandler = (role: Role) => void;
export type GameStageChangeHandler = (index: number) => void;

export type ItemCategory= "weapons"
| "armor"
| "accessories"
| "buffs/potions"
| "mounts"
| "lights";

export type Role= "melee"|"ranged"|"magic"|"summoner" | "mixed" | undefined

export type items = ReadonlyArray<item>
export interface item {
    name:string;
    role:Role;
    url:string;
    imgPath:string;
    category:ItemCategory;
    gameStageAvailable:number;
}