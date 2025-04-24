let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com','.net','.us','.io']

let randomPronoun = Math.floor(Math.random() * pronoun.length);
let randomAdj = Math.floor(Math.random() * adj.length);
let randomNoun = Math.floor(Math.random() * noun.length);
let randomDomain = Math.floor(Math.random() * domain.length);

console.log(`${pronoun[randomPronoun]}${adj[randomAdj]}${noun[randomNoun]}${domain[randomDomain]}`)