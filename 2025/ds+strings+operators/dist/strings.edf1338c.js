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
})({"strings.js":[function(require,module,exports) {
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  }
};

// DESTRUCTING Array

//======================================================/Arrays/============================================================

var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[3];
var x = arr[0],
  y = arr[1],
  z = arr[2];
console.log(x, y, z);

// const [first, second] = restaurant.categories; // first and second element from arr
var _restaurant$categorie = _slicedToArray(restaurant.categories, 3),
  first = _restaurant$categorie[0],
  second = _restaurant$categorie[2]; // first and third (skipping second)
console.log(first, "&", second);

// switching variables (swapping values)
var _restaurant$categorie2 = _slicedToArray(restaurant.categories, 2),
  main = _restaurant$categorie2[0],
  secondary = _restaurant$categorie2[1];
console.log("main: ", main, "secondary: ", secondary);
console.log("after switch");
var _ref = [secondary, main];
main = _ref[0];
secondary = _ref[1];
console.log("main: ", main, "secondary: ", secondary);
console.log(restaurant.order(1, 1)); // one item from each startmenu.veg and maincourse
var _restaurant$order = restaurant.order(0, 2),
  _restaurant$order2 = _slicedToArray(_restaurant$order, 2),
  starter = _restaurant$order2[0],
  maincourse = _restaurant$order2[1];
console.log("starter: ", starter, " maincourse: ", maincourse);

// nested array
var nested = [1, 2, [3, 4, 5]];
// const [i, , j] = nested; // get nested array (1, and [3,4,5])
var i = nested[0],
  _nested$ = _slicedToArray(nested[2], 3),
  j = _nested$[0],
  k = _nested$[2]; // destructuring inside the nested [1,3,5]
console.log(i, j, k);

// destructing with default values
// const [p, q, r] = [8, 9]; // gives output : p:8 , q: 9 , r: undefined
var _ref2 = [8, 9],
  _ref2$ = _ref2[0],
  p = _ref2$ === void 0 ? 1 : _ref2$,
  _ref2$2 = _ref2[1],
  q = _ref2$2 === void 0 ? 1 : _ref2$2,
  _ref2$3 = _ref2[2],
  r = _ref2$3 === void 0 ? 1 : _ref2$3; // gives output : p:8 , q: 9 , r: 1
console.log(p, q, r);

//======================================================//============================================================
var rest = {
  name: "Aoo ji Khao ji ",
  location: "Bangalore, koramangala",
  categories: ["Desi", "Vegeterian", "swadisht"],
  startMenu: {
    veg: ["allo tikka with papad", "paneer tikka with chips", "samosa with chole", "sakth kurkuri bhindi", "dumdaar shakarkandi khate pani k sath", "lassan papdi te khumb achari", "chatpatta bhutta nimbu mirch mar k"],
    nonveg: ["desi kukkad bhuna", "mastani machali tikka", "jinge shringar", "kukkad balle balle tangdi", "machali angara basanti", "jinga chatpata achari"]
  },
  mainMenu: ["Biryani", "aloo paratha", "poori bhajji"],
  openingHours: {
    thu: {
      open: 12,
      close: 20
    },
    fri: {
      open: 10,
      close: 22
    },
    sat: {
      open: 0,
      close: 24 // open 24 hours
    }
  },
  order: function order(startIndex, endIndex) {
    return [this.startMenu.veg[startIndex], this.mainMenu[endIndex]];
  },
  orderDelivery: function orderDelivery(_ref3) {
    var _ref3$startIndex = _ref3.startIndex,
      startIndex = _ref3$startIndex === void 0 ? 1 : _ref3$startIndex,
      _ref3$mainIndex = _ref3.mainIndex,
      mainIndex = _ref3$mainIndex === void 0 ? 0 : _ref3$mainIndex,
      _ref3$time = _ref3.time,
      time = _ref3$time === void 0 ? "22:00" : _ref3$time,
      address = _ref3.address;
    console.log("Order recieved: ".concat(time, "\n       starter: ").concat(this.startMenu.nonveg[startIndex], " \n       maincourse: ").concat(this.mainMenu[mainIndex], "\n       delivery address: ").concat(address, "\n       "));
  }
};
rest.orderDelivery({
  time: "22:00",
  mainIndex: 1,
  startIndex: 2,
  address: "Bangalore koramangala 560034"
});
rest.orderDelivery({
  address: "Bangalore HSR 560034"
});

// const { mainMenu, openingHours, categories } = rest;  // destructuring by specifying same property/key name to fetch
// console.log(mainMenu, openingHours, categories);

// different variable from
var restaurantName = rest.name,
  hours = rest.openingHours,
  tags = rest.categories;
console.log(restaurantName, hours, tags);

// default values in case of objects.
var _rest$menu = rest.menu,
  menu = _rest$menu === void 0 ? [] : _rest$menu,
  _rest$sweetMenu = rest.sweetMenu,
  deserts = _rest$sweetMenu === void 0 ? [] : _rest$sweetMenu,
  mains = rest.mainMenu; // default value for menu and starters
console.log(menu, deserts, mains);

// mututing variables
var a1 = 111;
var b1 = 222;
console.log("befor mutate a1: ", a1, "b1: ", b1);
var obj = {
  a1: 13,
  b1: 17
};
console.log("obj: ", obj);
// update values of a to 13 and b1 = 17 from obj
a1 = obj.a1;
b1 = obj.b1;
console.log("after mutate a1: ", a1, "b1: ", b1);
console.log("post obj: ", obj);

// nested objects
var fri = hours.fri; //{open: 10, close: 22}
console.log(fri);
var _hours$fri = hours.fri,
  open = _hours$fri.open,
  close = _hours$fri.close; //{open: 10, close: 22}
console.log("open: ", open, "close: ", close); //open:  10 close:  22
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63681" + '/');
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
},{}]},{},["../../../../../.nvm/versions/node/v14.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","strings.js"], null)
//# sourceMappingURL=/strings.edf1338c.js.map