// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"spreadoperator.js":[function(require,module,exports) {
var _console, _rest2$openingHours$t;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var books = [{
  title: "Algorithms",
  author: ["Robert Sedgewick", "Kevin Wayne"],
  publisher: "Addison-Wesley Professional",
  publicationDate: "2011-03-24",
  edition: 4,
  keywords: ["computer science", "programming", "algorithms", "data structures", "java", "math", "software", "engineering"],
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
      oneStarRatingCount: 13
    }
  },
  highlighted: true
}, {
  title: "Structure and Interpretation of Computer Programs",
  author: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman (Contributor)"],
  publisher: "The MIT Press",
  publicationDate: "2022-04-12",
  edition: 2,
  keywords: ["computer science", "programming", "javascript", "software", "engineering"],
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
      oneStarRatingCount: 0
    }
  },
  highlighted: true
}, {
  title: "Computer Systems: A Programmer's Perspective",
  author: ["Randal E. Bryant", "David Richard O'Hallaron"],
  publisher: "Prentice Hall",
  publicationDate: "2002-01-01",
  edition: 1,
  keywords: ["computer science", "computer systems", "programming", "software", "C", "engineering"],
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
      oneStarRatingCount: 16
    }
  },
  highlighted: true
}, {
  title: "Operating System Concepts",
  author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
  publisher: "John Wiley & Sons",
  publicationDate: "2004-12-14",
  edition: 10,
  keywords: ["computer science", "operating systems", "programming", "software", "C", "Java", "engineering"],
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
      oneStarRatingCount: 65
    }
  }
}, {
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
      oneStarRatingCount: 6
    }
  },
  highlighted: true
}, {
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
      oneStarRatingCount: 1090
    }
  }
}, {
  title: "Crafting Interpreters",
  author: "Robert Nystrom",
  publisher: "Genever Benning",
  publicationDate: "2021-07-28",
  keywords: ["computer science", "compilers", "engineering", "interpreters", "software", "engineering"],
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
      oneStarRatingCount: 0
    }
  }
}, {
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
      oneStarRatingCount: 1808
    }
  },
  highlighted: true
}];
var restaurant = {
  name: "Aoo ji Khao ji ",
  location: "Bangalore, koramangala",
  categories: ["Desi", "Vegeterian", "swadisht"],
  startMenu: {
    veg: ["allo tikka with papad", "paneer tikka with chips", "samosa with chole", "sakth kurkuri bhindi", "dumdaar shakarkandi khate pani k sath", "lassan papdi te khumb achari", "chatpatta bhutta nimbu mirch mar k"],
    nonveg: ["desi kukkad bhuna", "mastani machali tikka", "jinge shringar", "kukkad balle balle tangdi", "machali angara basanti", "jinga chatpata achari"]
  },
  mainMenu: ["Biryani", "aloo paratha", "poori bhajji"],
  order: function order(startIndex, endIndex) {
    return [this.startMenu.veg[startIndex], this.mainMenu[endIndex]];
  },
  orderPasta: function orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  }
};
console.log("spread operators ...");

//==========================/Spread operator: Arrays/=========================
var arr = [7, 8, 9];
var badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // append element at begining of the arr
console.log(badNewArr); //out : [1, 2, 7,8, 9]
var goodNewArr = [1, 2].concat(arr);
console.log(badNewArr); //out : [1, 2, 7,8, 9]

(_console = console).log.apply(_console, _toConsumableArray(goodNewArr)); // logs individual array values out : 1, 2, 7,8, 9

var newMenu = [].concat(_toConsumableArray(restaurant.mainMenu), ["maindish1"]);
console.log(newMenu);
var menu = [].concat(_toConsumableArray(restaurant.startMenu.nonveg), _toConsumableArray(restaurant.startMenu.nonveg), _toConsumableArray(restaurant.mainMenu));
console.log(menu);
var ingredients = [
  // prompt("fist item"),
  // prompt("second item"),
  // prompt("third item"),
];
// console.log(ingredients)
restaurant.orderPasta.apply(restaurant, ingredients);

//=========================/Spread operator: Objects/=========================

var newRest = _objectSpread(_objectSpread({
  foundedIn: 1988
}, restaurant), {}, {
  founder: "founder1"
});
console.log(newRest);

//=========================/for of/=========================
var _iterator = _createForOfIteratorHelper(menu),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    item = _step.value;
    console.log("item-> ", item);
  }

  // for (item of menu.entries()) console.log(`${(item[0] + 1)}: ${item[1]}`);

  // destructuring
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(menu.entries()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _step2$value = _slicedToArray(_step2.value, 2);
    i = _step2$value[0];
    el = _step2$value[1];
    console.log("".concat(i, ": ").concat(el));
  }

  //=========================/Object literal/=========================
  // ES6 advanced feature
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var openingHours = _defineProperty(_defineProperty(_defineProperty({}, weekdays[0], {
  open: 12,
  close: 20
}), weekdays[2], {
  open: 10,
  close: 22
}), "day-".concat(2 + 4), {
  open: 0,
  close: 24 // open 24 hours
});
var rest2 = {
  name: "Aoo ji Khao ji ",
  location: "Bangalore, koramangala",
  categories: ["Desi", "Vegeterian", "swadisht"],
  startMenu: ["allo tikka with papad", "paneer tikka with chips", "samosa with chole", "sakth kurkuri bhindi", "dumdaar shakarkandi khate pani k sath", "lassan papdi te khumb achari", "chatpatta bhutta nimbu mirch mar k", "desi kukkad bhuna", "mastani machali tikka", "jinge shringar", "kukkad balle balle tangdi", "machali angara basanti", "jinga chatpata achari"],
  mainMenu: ["Biryani", "aloo paratha", "poori bhajji"],
  // openingHours: openingHours,// old way
  openingHours: openingHours,
  // Es6 directly this will create a nested obj with same key,
  // directly writing the function
  order: function order(starIdx, endIdx) {
    console.log([this.startMenu[starIdx], this.mainMenu[t = endIdx]]);
  }
};
console.log(rest2);
rest2.order(0, 1);
console.log((_rest2$openingHours$t = rest2.openingHours.tues) === null || _rest2$openingHours$t === void 0 ? void 0 : _rest2$openingHours$t.open);

//=========================/SETS/=========================

var orderSet = new Set(["pasta", "pizza", "pizza", "rissoto", "pasta"]);
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
var _iterator3 = _createForOfIteratorHelper(orderSet),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var order = _step3.value;
    console.log("order: ", order);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var staff = new Set(["waiter", "chef", "manager", "chef", "manager", "waiter"]);
console.log(staff.size);
console.log(new Set("vikkilohandasdasdaadadaskgmsdlmslma").size);
var italianFood = new Set(["pasta", "gnochhi", "tomotoes", "olive oil", "garlic", "basil"]);
var mexicanFood = new Set(["tomotoes", "tortiila", "beans", "rice", "avacado", "garlic"]);

// intersection common between both return both A& B
var commoonfood = italianFood.intersection(mexicanFood);
console.log("intersection common items betwwen ", commoonfood);
console.log(_toConsumableArray(commoonfood));

// Union all items including both A& B
var italianmexican = italianFood.union(mexicanFood);
console.log("UNION: ", italianmexican);
//this can also be a achieved as
console.log("combined", new Set(_toConsumableArray(italianFood), _toConsumableArray(mexicanFood)));

// A diff B : return all Unique A
var uniqueItalianFoods = italianFood.difference(mexicanFood);
// B diff A : return all Unique B
var uniqueMexicanFoods = mexicanFood.difference(italianFood);
console.log("unique Italian between 2 foods", uniqueItalianFoods);
console.log("unique Mexican between 2 foods", uniqueMexicanFoods);
//
var uniqueItalianMexicanFoods = italianFood.symmetricDifference(mexicanFood);
console.log("distinct in both italian and Mexicant", uniqueItalianMexicanFoods);

//=========================/MAPS/=========================

var rest = new Map();
rest.set("name", "Vikki da dhaba");
rest.set(1, "Banagalore India");
rest.set(2, "Haldwani India");
rest.set("categories", ["Desi", "Vegeterian", "swadisht"]).set(open, 11).set(close, 23).set(true, "we are open :D").set(false, "we are close :(").set("starter", {
  veg: ["pakora", "sandwich"],
  nonVeg: ["murg tikka", "murg kadhai"]
});
console.log(rest);
console.log("access number location ", rest.get(1));
console.log("access boolean ", rest.get(true));
console.log("access ", rest.get("starter"));
console.log("access ", rest.get("starter")["veg"]);
console.log("".concat(_typeof(rest.get(close)), ", ").concat(rest.get(open)));
var time = 11;
console.log(rest.get(time >= rest.get(open) && time < rest.get(close)));
console.log("check if map has key", rest.has("categories"));
rest.delete(2); // not recomended
console.log("post deleting key: 2 from map", rest);
console.log("size of map", rest.size);

// set array object as key
var arrkey = [1, 2, 3];
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

var question = new Map([["question", "Best anime of 2024 as per me"], [1, "Jujutsu kaisen"], [2, "Demon Slayer"], [3, "Attack on Titan"], [4, "Ippo"], ["correct", 2], [true, "Correct 🥳🎉🥳🎉🥳🎉"], [false, "Try again ❌"]]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
var hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// convert map to array
// console.log([...question])

var answer = 2;
console.log(question.get("question"));
var _iterator4 = _createForOfIteratorHelper(question),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      key = _step4$value[0],
      value = _step4$value[1];
    if (_typeof(key) === Number) {
      console.log("Answers ".concat(key, ": ").concat(value));
    }
  }
  // const answer = Number(prompt("Your answer"));
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
console.log(answer);
console.log(question.get(answer === question.get("correct")));

// convert map to array
console.log(_toConsumableArray(question));
// console.log(question.entries());
console.log(_toConsumableArray(question.keys()));
console.log(_toConsumableArray(question.values()));
},{}],"../../../../../.nvm/versions/node/v14.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62842" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../.nvm/versions/node/v14.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","spreadoperator.js"], null)
//# sourceMappingURL=/spreadoperator.05bec564.js.map