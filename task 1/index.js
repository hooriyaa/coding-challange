// EXERCISE 46:
let laptop = {
    make: 'SAMSUNG',
    model: "I7 GEN 7",
    year: 2020,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model} `);
    }
};
laptop.describe();
// EXERCISE 47:
let laptops = [
    { make: 'SAMSUNG', model: "I7 GEN 7", year: 2020 },
    { make: 'Hp', model: "GEN 8", year: 2021 },
    { make: 'apple', model: "Macbook pro 14", year: 2023 },
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
// EXERCISE 48:
let priceSet1 = [60000, 9000, 50000];
let priceSet2 = [95000, 68000, 40000];
let combinePrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrices);
export {};
