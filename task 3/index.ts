// EXERCISE 48:
let priceSet1=[60000,9000,50000]
let priceSet2=[95000,68000,40000]
let combinePrices=[...priceSet1 , ...priceSet2].sort((a,b)=>a-b);
console.log(combinePrices);