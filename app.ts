interface Transaction {
    id: number;
    item: string;
    cost: number;
}


const myExpenses: Transaction[] = [
    { "id": 1, "item": "Coffee", "cost": 5 },
    { "id": 2, "item": "Pizza", "cost": 20 },
    { "id": 3, "item": "Salary", "cost": -100 }
];

const total = myExpenses.reduce((sum, current) => sum + current.cost, 0);

console.log("--- My Finance Report ---");
console.log(`Total Balance: $${total}`);
if (total < 0) {
    console.log("Status: You made money! 💰");
} else {
    console.log("Status: You spent money! 💸");
}