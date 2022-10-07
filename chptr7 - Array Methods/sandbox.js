//filter methos
const scores = [10, 30, 15, 25, 50, 40, 5];

/*const highScores = scores.filter(score => {
    return score > 20;
});
console.log(highScores);*/

const highScores = scores.filter(score => score > 20);
console.log(highScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

/*const premiumUsers1 = users.filter(user => {
    return user.premium});
console.log(premiumUsers1);
below is shorter way to write*/
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);

//Map method - in array instead of iterating for each element to work on use this
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

const saleProducts = products.map(product => {
  if(product.price > 30){
    return {name: product.name, price: product.price / 2}
    /* we dont do:
    product.price = product.price/2; because this will change the values in products array also 
    */
  } else {
    return product;
  }
});

console.log(products, saleProducts);

//reduce method - in an array when you want to return one value based on some funtional calculation

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if(curr > 50){
//     acc++;
//   }
//   return acc;
// }, 0); //zero fiven here to iitalise acc=0 first time this is called

// console.log(result);

const scores1 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];
  
  const marioTotal = scores1.reduce((acc, curr) => {
    if(curr.player === 'mario'){
      acc += curr.score;
    }
    return acc;
  }, 0); 
  
  console.log(marioTotal);

//Sort method in array - will osrt string wise

//to reverse sort need to use sort and then reverse or vice versa
// for nuermical comparison and sorting as per value you need to compare and re-assign position
// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
names.reverse();
console.log(names);

// example 2 - sorting numbers
const scores2 = [10, 50, 20, 5, 35, 70, 45];

// scores2.sort();
scores2.reverse();
console.log(scores2+" only reverses order"); 

scores2.sort();
scores2.reverse();
console.log(scores2+" '5' is in an incorect place"); //5 wont come in beginning

// example 3 - sorting objects
const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

players.sort((a,b) => b.score - a.score);

console.log(players);

//going back to example 2, can re-write:
scores2.sort((a,b) => b - a);
console.log(scores2);//ascending
scores2.sort((a,b) => a - b);
console.log(scores2);//deascending

//Changing Array methods

const newproducts = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];
  
  // const filtered = newproducts.filter(product => product.price > 20);
  
  // const promos = filtered.map(product => {
  //   return `the ${product.name} is ${product.price / 2} pounds`;
  // });
  //doing the above filtering and mapping at the same time in 2 lines:
  
  const promos = newproducts
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);
  
  console.log(promos);