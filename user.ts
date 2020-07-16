import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { UserPermissions } from "./permissions.ts";

export interface User {
    id: string;
    name: string;
    permission: Permissions;
}

export class UserIAM {
    public id: string;
    public permissions: UserPermissions;
    constructor(public name: string) {
        this.id = v4.generate();
        this.permissions = new UserPermissions(`{}`)
    }

    public setPermissions(permissions: UserPermissions): void {
        this.permissions = permissions;
    }

}




