// function reverse<T>(array: T[]): T[] {
//     return [...array].reverse();
// }

// console.log(reverse<number>([1, 2, 3, 4, 5]));
// console.log(reverse(["poly", "kiwi", "banana"]));
// console.log(reverse([{ name: "poly", age: 3 }, { name: "kiwi", age: 2 }, { name: "banana", age: 1 }]));

// const isEqual = <T, V>(a: T, b: V): boolean => {
//     return Object.is(a, b);
// }

// console.log(isEqual<number, number>(1, 1));
// console.log(isEqual(1, "1"));

// const makeArray = <T, U>(a: T, b: U): [T, U] => {
//     return [a, b];
// }

// console.log(makeArray(1, 2));
// console.log(makeArray("poly", "kiwi"));
// console.log(makeArray({ name: "poly", age: 3 }, { name: "kiwi", age: 2 }));
// console.log(makeArray(1, "2"));

// const foo = <T, X>(multi: T, ...rest: X[]) => {}

// console.log(foo(1, [2, 3, 4, 5]));
// console.log(foo(1, ["2", 3, 4, 5]));

// ////////////////////////////////////////////////////
// interface ILength {length: number}

// const logLength = <T extends ILength>(arg: T) => {
//     console.log(arg.length);    
//     }

// console.log(logLength([1, 2, 3, 4, 5]));
// console.log(logLength("poly"));
// ////////////////////////////////////////////////////

// interface IPerson {firstName: string, lastName: string}

// const addFullName = <P extends IPerson> (person: P) => {
//     return {
//         ...person, fullName: `${person.firstName} ${person.lastName}`
//     };
// }

// console.log(addFullName({ firstName: "poly", lastName: "kiwi" }));
// console.log(addFullName({ firstName: "poly", lastName: "kiwi", age: 3 }));
// ////////////////////////////////////////////////////

// interface User <T> {
//     id: T;
// }

// const mango: User <number> = { id: 24 }
// const poly: User <string> = { id: "string" }

// console.log(mango, poly);
// ////////////////////////////////////////////////////

// interface Tab <T> {
//     id: string;
//     position: number;
//     active: boolean;
//     content: T;
// }

// const tab1: Tab <string> = {
//     id: "tab1",
//     position: 1,
//     active: true,
//     content: "content"
// }

// const tab2: Tab <string[]> = {
//     id: "tab2",
//     position: 2,
//     active: false,
//     content: ["content", "content"]
// }

// console.log(tab1, tab2);
// ////////////////////////////////////////////////////

// type TAnimationState = "playing" | "paused" | "stopped";
// type THttpState = "loading" | "success" | "error";

// const makeState = <S>(initialState: S) => {
//     let state = initialState;

//     return {
//         getState: () => state,
//         setState: (newState: S) => {
//             state = newState;
//         }
//     }
// }

// const animationState = makeState<TAnimationState>("playing");
// animationState.setState("paused");
// animationState.setState("stopped");

// const httpState = makeState<THttpState>("loading");
// httpState.setState("success");
// httpState.setState("error");
// /////////////////////////////////////////////////////////////

// type TAnimationState = "playing" | "paused" | "stopped";
// type THttpState = "loading" | "success" | "error";

// class State<S> {
//     private state: S;

//     constructor(initialState: S) {
//         this.state = initialState;
//     }

//     getState(): S {
//         return this.state;
//     }

//     setState(newState: S) {
//         this.state = newState;
//     }
// }


// const animationState = new State<TAnimationState>("playing");
// animationState.setState("paused");
// animationState.setState("stopped");

// const httpState = new State<THttpState>("loading"); 
// httpState.setState("success");
// httpState.setState("error");

/////////////////////////////////////////////////////////////

export { }