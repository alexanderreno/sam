export interface Permissions {
    permission: string
}

export class UserPermissions {
    constructor(public permissions: string) {} 
}