import { UserIAM } from "./user.ts"
import { UserGroup } from "./group.ts";

const { args } = Deno




function parse(a: string[]): void {
    if (a.length < 2) {
        console.log("not enough arguments provided\nsam --help")
        return
    }
    switch(a[0]) {
        case "create-user":
            let user = new UserIAM(a[1])
            console.log(user);

        case "create-group":
            let group = new UserGroup(a[1])
            console.log(group)
        
        
    }
    
}


parse(args)