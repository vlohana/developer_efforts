const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const restaurant = {
  name: "Aoo ji Khao ji ",
  location: "Bangalore, koramangala",
  categories: ["Desi", "Vegeterian", "swadisht"],
  startMenu: {
    veg: [
      "allo tikka with papad",
      "paneer tikka with chips",
      "samosa with chole",
      "sakth kurkuri bhindi",
      "dumdaar shakarkandi khate pani k sath",
      "lassan papdi te khumb achari",
      "chatpatta bhutta nimbu mirch mar k",
    ],
    nonveg: [
      "desi kukkad bhuna",
      "mastani machali tikka",
      "jinge shringar",
      "kukkad balle balle tangdi",
      "machali angara basanti",
      "jinga chatpata achari",
    ],
  },
  mainMenu: ["Biryani", "aloo paratha", "poori bhajji"],
  order: function (startIndex, endIndex) {
    return [this.startMenu.veg[startIndex], this.mainMenu[endIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

console.log("spread operators ...");

//==========================/Spread operator: Arrays/=========================
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // append element at begining of the arr
console.log(badNewArr); //out : [1, 2, 7,8, 9]
const goodNewArr = [1, 2, ...arr];
console.log(badNewArr); //out : [1, 2, 7,8, 9]

console.log(...goodNewArr); // logs individual array values out : 1, 2, 7,8, 9

const newMenu = [...restaurant.mainMenu, "maindish1"];
console.log(newMenu);

const menu = [
  ...restaurant.startMenu.nonveg,
  ...restaurant.startMenu.nonveg,
  ...restaurant.mainMenu,
];
console.log(menu);

const ingredients = [
  // prompt("fist item"),
  // prompt("second item"),
  // prompt("third item"),
];
// console.log(ingredients)
restaurant.orderPasta(...ingredients);

//=========================/Spread operator: Objects/=========================

const newRest = { foundedIn: 1988, ...restaurant, founder: "founder1" };
console.log(newRest);

//=========================/for of/=========================

for (item of menu) console.log("item-> ", item);

// for (item of menu.entries()) console.log(`${(item[0] + 1)}: ${item[1]}`);

// destructuring
for ([i, el] of menu.entries()) console.log(`${i}: ${el}`);

//=========================/Object literal/=========================
// ES6 advanced feature

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  // thu: {
  //   open: 12,
  //   close: 20,
  // },
  // fri: {
  //   open: 10,
  //   close: 22,
  // },
  // sat: {
  //   open: 0,
  //   close: 24, // open 24 hours
  // },
  [weekdays[0]]: {
    open: 12,
    close: 20,
  },
  [weekdays[2]]: {
    open: 10,
    close: 22,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24, // open 24 hours
  },
};

const rest2 = {
  name: "Aoo ji Khao ji ",
  location: "Bangalore, koramangala",
  categories: ["Desi", "Vegeterian", "swadisht"],
  startMenu: [
    "allo tikka with papad",
    "paneer tikka with chips",
    "samosa with chole",
    "sakth kurkuri bhindi",
    "dumdaar shakarkandi khate pani k sath",
    "lassan papdi te khumb achari",
    "chatpatta bhutta nimbu mirch mar k",
    "desi kukkad bhuna",
    "mastani machali tikka",
    "jinge shringar",
    "kukkad balle balle tangdi",
    "machali angara basanti",
    "jinga chatpata achari",
  ],
  mainMenu: ["Biryani", "aloo paratha", "poori bhajji"],
  // openingHours: openingHours,// old way
  openingHours, // Es6 directly this will create a nested obj with same key,
  // directly writing the function
  order(starIdx, endIdx) {
    console.log([this.startMenu[starIdx], this.mainMenu[(t = endIdx)]]);
  },
};
console.log(rest2);
rest2.order(0, 1);

console.log(rest2.openingHours.tues?.open);

//=========================/SETS/=========================

const orderSet = new Set(["pasta", "pizza", "pizza", "rissoto", "pasta"]);
console.log(orderSet);

console.log(new Set("vikki")); // v, i, k

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread")); // boolean
console.log(orderSet.add("bread"));
console.log(orderSet.add("risotto")); //new Set
console.log(orderSet.delete("breads")); //true/false
// orderSet.clear(); //empties the set
// console.log(orderSet);
for (const order of orderSet) {
  console.log("order: ", order);
}
const staff = new Set([
  "waiter",
  "chef",
  "manager",
  "chef",
  "manager",
  "waiter",
]);
console.log(staff.size);
console.log(new Set("vikkilohandasdasdaadadaskgmsdlmslma").size);

const italianFood = new Set([
  "pasta",
  "gnochhi",
  "tomotoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFood = new Set([
  "tomotoes",
  "tortiila",
  "beans",
  "rice",
  "avacado",
  "garlic",
]);

// intersection common between both return both A& B
const commoonfood = italianFood.intersection(mexicanFood);
console.log("intersection common items betwwen ", commoonfood);
console.log([...commoonfood]);

// Union all items including both A& B
const italianmexican = italianFood.union(mexicanFood);
console.log("UNION: ", italianmexican);
//this can also be a achieved as
console.log("combined", new Set([...italianFood], [...mexicanFood]));

// A diff B : return all Unique A
const uniqueItalianFoods = italianFood.difference(mexicanFood);
// B diff A : return all Unique B
const uniqueMexicanFoods = mexicanFood.difference(italianFood);
console.log("unique Italian between 2 foods", uniqueItalianFoods);
console.log("unique Mexican between 2 foods", uniqueMexicanFoods);
//
const uniqueItalianMexicanFoods = italianFood.symmetricDifference(mexicanFood);
console.log("distinct in both italian and Mexicant", uniqueItalianMexicanFoods);

//=========================/MAPS/=========================

const rest = new Map();
rest.set("name", "Vikki da dhaba");
rest.set(1, "Banagalore India");
rest.set(2, "Haldwani India");

rest
  .set("categories", ["Desi", "Vegeterian", "swadisht"])
  .set(open, 11)
  .set(close, 23)
  .set(true, "we are open :D")
  .set(false, "we are close :(")
  .set("starter", {
    veg: ["pakora", "sandwich"],
    nonVeg: ["murg tikka", "murg kadhai"],
  });

console.log(rest);
console.log("access number location ", rest.get(1));
console.log("access boolean ", rest.get(true));
console.log("access ", rest.get("starter"));
console.log("access ", rest.get("starter")["veg"]);
console.log(`${typeof rest.get(close)}, ${rest.get(open)}`);
const time = 11;
console.log(rest.get(time >= rest.get(open) && time < rest.get(close)));

console.log("check if map has key", rest.has("categories"));
rest.delete(2); // not recomended
console.log("post deleting key: 2 from map", rest);
console.log("size of map", rest.size);

// set array object as key
const arrkey = [1, 2, 3];
rest.set(arrkey, "Test");
// rest.set([1, 2, 3], "Test"); //directly setting array object
// this returns undefined as both array object refer to different
// memory in the heap and therefore are different
// console.log("accessign arr obj", rest.get([1, 2])); // undefined
console.log("accessign arr obj:: ", rest.get(arrkey)); // Test

rest.set(document.querySelector("h1"), "Heading");

// rest.clear();
// console.log("removed/cleared map", rest.size);

// ==============/ Map Iterator / ============

const question = new Map([
  ["question", "Best anime of 2024 as per me"],
  [1, "Jujutsu kaisen"],
  [2, "Demon Slayer"],
  [3, "Attack on Titan"],
  [4, "Ippo"],
  ["correct", 2],
  [true, "Correct 🥳🎉🥳🎉🥳🎉"],
  [false, "Try again ❌"],
]);

console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// convert map to array
// console.log([...question])

const answer = 2;
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === Number) {
    console.log(`Answers ${key}: ${value}`);
  }
}
// const answer = Number(prompt("Your answer"));
console.log(answer);
console.log(question.get(answer === question.get("correct")));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
