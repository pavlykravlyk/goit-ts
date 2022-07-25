type AddFn = (a:number, b:number) => number;
const addExpression: AddFn = function (a, b) {
    return a + b;
}

interface IAddFn {
    (a:number, b:number):number
}
const addArrow: IAddFn = (a, b) => a + b;

enum PizzaSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

interface IPizza {
    size: PizzaSize;
    toppings: string[];
    getPrice?(): number;
    getDescription?(): string;
    getSize(): string;
    getToppings?(): string;
}

const pizza: IPizza = {
    size: PizzaSize.Small,
    toppings: ["pepperoni", "mushrooms", "extra cheese"],
    getSize() {
        return this.size
    },
}

console.log(addExpression(1, 2), addArrow(1, 2), pizza);
export { }