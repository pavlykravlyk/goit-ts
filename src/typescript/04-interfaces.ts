interface PluginConfig {
    readonly selector: string,
    perPage: number,
    startIndex?: number,
    draggable: boolean,
}

const config: PluginConfig = {
    selector: "#plugin-1",
    perPage: 2,
    startIndex: 0,
    draggable: true,
}

// config.selector = "plugin-6";

interface Employees {
    [key: string]: number;
}

const employees: Employees = {
    mango: 5,
    apple: 100,
    kiwi: 20,
    banana: 15,
}

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeIndex = 0;

entries.forEach(([key, value]) => {
    if (value > bestEmployeeIndex) {
        bestEmployeeName = key;
        bestEmployeeIndex = value;
    }
});

// for (const [key, value] of entries) {
//     if (value > bestEmployeeIndex) {
//         bestEmployeeName = key;
//         bestEmployeeIndex = value;
//     }
// }

console.log(config, employees, bestEmployeeName);
export { }