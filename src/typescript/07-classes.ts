interface Params {
    name: string;
    size: PizzaSize
    toppings: string[]
}

enum PizzaSize {
    small = "small",
    medium = "medium",
    large = "large"
}

interface IPizza {
    size: PizzaSize
    addTopping(topping: string): void;
}

class Pizza implements IPizza {
    public size: PizzaSize = PizzaSize.medium;
    public name: string;
    private toppings: string[];

    constructor({name, toppings=[]}: Params) {
        this.name = name;
        this.toppings = toppings;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza: IPizza = new Pizza({
    name: "Pepperoni",
    size: PizzaSize.small,
    toppings: ["pepperoni"]
});
    
// pizza.name = 'Margherita';
console.log(pizza);
export {}