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
})({"functions.js":[function(require,module,exports) {
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var bookings = [];
var createbooking = function createbooking(flightNum) {
  var numPassengers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var price = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 199 * numPassengers;
  //ES5
  // numPassengers = numPassengers || 1;
  //   price = price || 199;
  var booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price
  };
  console.log(booking);
  bookings.push(booking);
};
createbooking("A123");
createbooking("A123", 10, 800);
createbooking("A123", 20, 1000);
createbooking("A123");

// funtion accepting call function
var oneWord = function oneWord(str) {
  return str.replace(/ /g, "").toLowerCase();
};

// upper first word
var upperFirstWord = function upperFirstWord(str) {
  var _str$split = str.split(" "),
    _str$split2 = _toArray(_str$split),
    first = _str$split2[0],
    other = _str$split2.slice(1);
  return [first.toUpperCase()].concat(_toConsumableArray(other)).join(" ");
};
var transformer = function transformer(str, fn) {
  console.log("Original : ".concat(str));
  console.log("transformed: ".concat(fn(str)));
  console.log("transformed by: ".concat(fn.name));
};
transformer("lone wolf", upperFirstWord); // LONE wolf
transformer("lone wolf", oneWord);

// Higher order function returnign a function

function greet(msg) {
  return function (personName) {
    console.log("".concat(msg, " ").concat(personName));
  };
}
var greetArrow = function greetArrow(msg) {
  return function (personName) {
    return console.log("".concat(msg, " ").concat(personName));
  };
};
var greeter = greet("Good morning");
greeter("Vinod");
greet("Good night")("Vikki");
greetArrow("Hello")("Vinod");

//=========================== / Call bind / ====================================

var lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book: function book(flightNum, name) {
    console.log("".concat(name, " booked a seat on ").concat(this.airline, " flight\n            ").concat(this.iataCode).concat(flightNum));
    this.bookings.push({
      flight: "".concat(this.iataCode).concat(flightNum),
      name: name
    });
  }
};
var book = lufthansa.book; // store function in another variable.

// lufthansa.book(239, "Vinod Lohana");
// lufthansa.book(635, "Beena .");

var eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: []
};
var swiss = {
  airline: "Swiss Air lines",
  iataCode: "LX",
  bookings: []
};

// eurowings.book(112, "Shreya Dasgupta");
// eurowings.book(111, "Sunil Khilani");

// Does not work; as the `this` keyword is not pointing to any of the object we get undefinded for `this.prop`
// book(123, "Ravi Lohana"); // Out: Ravi Lohana booked a seat on `undefined` flight `undefined123`

// To fix we can use apply| call functions
// Output: Ravi Lohana booked a seat on Eurowings flight EW123
book.call(swiss, 123, "Ravi Lohana");
book.call(swiss, 4321, "Rekha Lohana");
book.call(swiss, 123, "Reena Lohana");
book.call(lufthansa, 786, "VINOD LOHANA");
book.call(lufthansa, 786, "Beena .");
book.call(lufthansa, 786, "Roopomal Lohana");
book.call(eurowings, 11231, "John Doe");

// apply do not recives list of argument but rather Array of argument
var flightData = [435, "John Doe"];
var flightData2 = [2135, "John Cena"];
book.apply(eurowings, flightData);
book.call.apply(book, [eurowings].concat(flightData2));

// ================================== /bind function/ ===================================================

// eurowings.book(1123, "Tony Stark");
// bind returns new function with the this implied
var bookEw = book.bind(eurowings);
var bookLh = book.bind(lufthansa);
var bookSw = book.bind(swiss);
bookEw(1192, "Vikki Lohana");

// bind function also allows to present the arguments
var book123 = book.bind(eurowings, 123);
book123("Satish Chachwani");
book123("Barkha Chachwani");
book123("Komal Chachwani");
book123("Gobind Chachwani");

//with Eventlisteners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log("this: ", this);
  this.planes++;
  console.log("planes: ".concat(this.planes));
};

//By default the `this` keyword in eventlistener is attached
// to the element for which eventlistener is called.
// `this`--> button-buyplane
// document
//   .querySelector(".btn--buy-plane")
//   .addEventListener("click", lufthansa.buyPlane);// buttn in this case

document.querySelector(".btn--buy-plane").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (present arguments using bind)
var addTax = function addTax(rate, value) {
  return value + value * rate;
};
console.log("calculate tax....", addTax(0.1, 200));
var addVAT = addTax.bind(null, 0.23); // as `this` is not required in this
console.log(addVAT(100));
console.log(addVAT(23));
var calcTax = function calcTax() {
  var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.23;
  return function (value) {
    return value + value * rate;
  };
};
var calVat = calcTax(0.23);
console.log("calc vat.....", calcTax()(100));
console.log(calcTax()(23));
console.log("calc vat.....", calVat(100));
console.log(calVat(23));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54198" + '/');
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
},{}]},{},["../../../../../.nvm/versions/node/v14.18.3/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","functions.js"], null)
//# sourceMappingURL=/functions.0c1b446b.js.map