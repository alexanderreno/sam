import { User } from "./user.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export interface Group {
    id: string;
    name: string;
    users: User
}

export class UserGroup {
    public id: string;
    public users: string[] = []
    constructor(public name: string) {
        this.id = v4.generate()
    }

    addUser(user: User): boolean {
        return true;
    }
}