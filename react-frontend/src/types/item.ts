import type { Role } from "./roles";

export interface Item {
    name: string;
    role: Role;
    url: string;
    imgPath: string;
    category: string;
    gameStageAvailable: number;
}
