
var evens =[2,4,6,8];
var odds =[1,3,5,7,];
var primes=[2,3,5,7,11];
var newarr =[...primes,...evens,...odds];
var newprimes =[...primes];
console.log(evens);
console.log(odds);
console.log(primes);
console.log(newarr);
console.log(newprimes);

console.log('       Destructuring   ');

var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
}

var {first,last, country,city,twitter}=jamesBond;
console.log(jamesBond);

 console.log("first :"+ first);
 console.log("last :"+ last);
 console.log("country :"+country);
 console.log("city :"+city);
 console.log("twitter :"+ twitter);

var players = ['paul', 'andy', 'darrell', 'jim'];
console.log(players);

// Destructuring 
var [player1,player2,player3 , player4] = players;

console.log("player1 :" + player1);
console.log("player2 :" + player2);
console.log("player3 :" + player3);
console.log("player4 :" + player4);
