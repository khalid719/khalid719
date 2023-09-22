const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "Flash", "Batman"]


// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);


// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);


const all_new_heros = [...marvel_heroes, ...dc_heroes] //spread

// console.log(all_new_heros);

const complex_array = [1, 2, 3, [4, 5, 6], 7,[8, 9,[1, 2, 3]]]


const real_complex_array = complex_array.flat(Infinity)

// console.log(real_complex_array);

// console.log(Array.isArray("khalid"));
// console.log(Array.from("khalid"));
// console.log(Array.from({name :"khalid"}));    // confused JS


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));