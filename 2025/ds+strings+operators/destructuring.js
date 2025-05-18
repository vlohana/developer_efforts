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
};

// DESTRUCTING Array

//======================================================/Arrays/============================================================

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories; // first and second element from arr
const [first, , second] = restaurant.categories; // first and third (skipping second)
console.log(first, "&", second);

// switching variables (swapping values)
let [main, secondary] = restaurant.categories;
console.log("main: ", main, "secondary: ", secondary);
console.log("after switch");
[main, secondary] = [secondary, main];
console.log("main: ", main, "secondary: ", secondary);

console.log(restaurant.order(1, 1)); // one item from each startmenu.veg and maincourse
const [starter, maincourse] = restaurant.order(0, 2);
console.log("starter: ", starter, " maincourse: ", maincourse);

// nested array
const nested = [1, 2, [3, 4, 5]];
// const [i, , j] = nested; // get nested array (1, and [3,4,5])
const [i, , [j, , k]] = nested; // destructuring inside the nested [1,3,5]
console.log(i, j, k);

// destructing with default values
// const [p, q, r] = [8, 9]; // gives output : p:8 , q: 9 , r: undefined
const [p = 1, q = 1, r = 1] = [8, 9]; // gives output : p:8 , q: 9 , r: 1
console.log(p, q, r);

//======================================================//============================================================
const rest = {
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
  openingHours: {
    thu: {
      open: 12,
      close: 20,
    },
    fri: {
      open: 10,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24, // open 24 hours
    },
  },
  order: function (startIndex, endIndex) {
    return [this.startMenu.veg[startIndex], this.mainMenu[endIndex]];
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order recieved: ${time}
       starter: ${this.startMenu.nonveg[startIndex]} 
       maincourse: ${this.mainMenu[mainIndex]}
       delivery address: ${address}
       `
    );
  },
};

rest.orderDelivery({
  time: "22:00",
  mainIndex: 1,
  startIndex: 2,
  address: "Bangalore koramangala 560034",
});
rest.orderDelivery({
    address: "Bangalore HSR 560034",
  });

// const { mainMenu, openingHours, categories } = rest;  // destructuring by specifying same property/key name to fetch
// console.log(mainMenu, openingHours, categories);

// different variable from
const { name: restaurantName, openingHours: hours, categories: tags } = rest;
console.log(restaurantName, hours, tags);

// default values in case of objects.
const { menu = [], sweetMenu: deserts = [], mainMenu: mains } = rest; // default value for menu and starters
console.log(menu, deserts, mains);

// mututing variables
let a1 = 111;
let b1 = 222;
console.log("befor mutate a1: ", a1, "b1: ", b1);

const obj = { a1: 13, b1: 17 };
console.log("obj: ", obj);
// update values of a to 13 and b1 = 17 from obj
({ a1, b1 } = obj);
console.log("after mutate a1: ", a1, "b1: ", b1);
console.log("post obj: ", obj);

// nested objects
const { fri } = hours; //{open: 10, close: 22}
console.log(fri);
const {
  fri: { open, close },
} = hours; //{open: 10, close: 22}
console.log("open: ", open, "close: ", close); //open:  10 close:  22
