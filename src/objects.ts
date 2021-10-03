// We can mention type to the object using type keyword 
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'Anbarasan'
}

// Type Assertion : we can change one type to another type
let id1: any = 1;
let userId = id1 as string;
userId = 'user-1';


// functions
let sum = (a: number, b: number): number => {
    return a + b;
}

type Message = string | number;
let log = (message: Message): void => {
    console.log(message);
}

// Interface
// Type can be used for both union and object but interface only work with object 
// In case of Interface, all properties must be used by implementing object or class
// we can make properties readonly or optional in interface
interface UserInterface {
    id: number,
    name: string,
    readonly age?: number
}

let user1: UserInterface = {
    id: 1,
    name: 'Anbu'
}