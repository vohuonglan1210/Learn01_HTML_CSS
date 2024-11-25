const friend1 = "AAAA";
const friend2 = "BBBB";
const friend3 = "CCCC";

const friends = ['AAAA', 'BBBB', 'CCCC'];
console.log(friends);

const years = new Array(1991, 1992, 1993);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'DDDD';
console.log(friends);

const firstName = 'EEEE';
const jonas = ['EEEE', 'VietNam', 2037-1991, friends];
console.log(jonas);

const age = function(bithYear){
    return 2037 - bithYear;
}
//const years = [1990, 1967, 2002, 2010, 2018];

const age1 = age(years[2]);
console.log(age1);

const ages = [age(years[0]), age(years[2])];
console.log(ages);
