import type { Role } from "./roles";

export type Items = ReadonlyArray<Item>;
export interface Item {
    name: string;
    role: Role;
    url: string;
    imgPath: string;
    category: string;
    gameStageAvailable: number;
}
