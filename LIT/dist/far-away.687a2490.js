// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"75Toe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0f6b4d4e687a2490";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kTanD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("./registry/index");
parcelHelpers.exportAll(_index, exports);
var _index1 = require("./components/index");
parcelHelpers.exportAll(_index1, exports);

},{"./registry/index":"299Wz","./components/index":"btU4q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"299Wz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _myLogo = require("./my-logo");
parcelHelpers.exportAll(_myLogo, exports);
var _myApp = require("./my-app");
parcelHelpers.exportAll(_myApp, exports);
var _itemForm = require("./item-form");
parcelHelpers.exportAll(_itemForm, exports);
var _itemsList = require("./items-list");
parcelHelpers.exportAll(_itemsList, exports);

},{"./my-logo":"65ZbR","./my-app":"7EEZW","./item-form":"39X0a","./items-list":"8ANnx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65ZbR":[function(require,module,exports) {
var _logo = require("../components/Logo");
const TAG_NAME = "app-logo";
if (!customElements.get(TAG_NAME)) customElements.define(TAG_NAME, (0, _logo.Logo));

},{"../components/Logo":"5wAlp"}],"5wAlp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Logo", ()=>Logo);
var _lit = require("lit");
var _logoPageCss = require("../css/logo-page.css");
class Logo extends (0, _lit.LitElement) {
    renderHeading() {
        return (0, _lit.html)`
                <slot name="app-heading"/>
        `;
    }
    render() {
        return (0, _lit.html)`
            <div>
            ${this.renderHeading()}
            </div>
        `;
    }
}
Object.defineProperty(Logo, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        (0, _logoPageCss.logo_page_css)
    ]
});

},{"lit":"4antt","../css/logo-page.css":"1tAwY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>b);
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: r, getOwnPropertyNames: h, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), y = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class b extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? y;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...h(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
}, b[d("elementProperties")] = new Map, b[d("finalized")] = new Map, p?.({
    ReactiveElement: b
}), (a.reactiveElementVersions ??= []).push("2.0.4");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>si);
parcelHelpers.export(exports, "html", ()=>ke);
parcelHelpers.export(exports, "mathml", ()=>Se);
parcelHelpers.export(exports, "noChange", ()=>R);
parcelHelpers.export(exports, "nothing", ()=>D);
parcelHelpers.export(exports, "render", ()=>Q);
parcelHelpers.export(exports, "svg", ()=>Oe);
const n = globalThis, c = n.trustedTypes, h = c ? c.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, f = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, m = "?" + v, _ = `<${m}>`, w = document, lt = ()=>w.createComment(""), st = (t)=>null === t || "object" != typeof t && "function" != typeof t, g = Array.isArray, $ = (t)=>g(t) || "function" == typeof t?.[Symbol.iterator], x = "[ 	\n\f\r]", T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, E = /-->/g, k = />/g, O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), S = /'/g, j = /"/g, M = /^(?:script|style|textarea|title)$/i, P = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), ke = P(1), Oe = P(2), Se = P(3), R = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), V = new WeakMap, I = w.createTreeWalker(w, 129);
function N(t, i) {
    if (!g(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== h ? h.createHTML(i) : i;
}
const U = (t, i)=>{
    const s = t.length - 1, e = [];
    let h, o = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", n = T;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let r, l, c = -1, a = 0;
        for(; a < s.length && (n.lastIndex = a, l = n.exec(s), null !== l);)a = n.lastIndex, n === T ? "!--" === l[1] ? n = E : void 0 !== l[1] ? n = k : void 0 !== l[2] ? (M.test(l[2]) && (h = RegExp("</" + l[2], "g")), n = O) : void 0 !== l[3] && (n = O) : n === O ? ">" === l[0] ? (n = h ?? T, c = -1) : void 0 === l[1] ? c = -2 : (c = n.lastIndex - l[2].length, r = l[1], n = void 0 === l[3] ? O : '"' === l[3] ? j : S) : n === j || n === S ? n = O : n === E || n === k ? n = T : (n = O, h = void 0);
        const u = n === O && t[i + 1].startsWith("/>") ? " " : "";
        o += n === T ? s + _ : c >= 0 ? (e.push(r), s.slice(0, c) + f + s.slice(c) + v + u) : s + v + (-2 === c ? i : u);
    }
    return [
        N(t, o + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class B {
    constructor({ strings: t, _$litType$: i }, s){
        let e;
        this.parts = [];
        let h = 0, o = 0;
        const n = t.length - 1, r = this.parts, [l, a] = U(t, i);
        if (this.el = B.createElement(l, s), I.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (e = I.nextNode()) && r.length < n;){
            if (1 === e.nodeType) {
                if (e.hasAttributes()) for (const t of e.getAttributeNames())if (t.endsWith(f)) {
                    const i = a[o++], s = e.getAttribute(t).split(v), n = /([.?@])?(.*)/.exec(i);
                    r.push({
                        type: 1,
                        index: h,
                        name: n[2],
                        strings: s,
                        ctor: "." === n[1] ? Y : "?" === n[1] ? Z : "@" === n[1] ? q : G
                    }), e.removeAttribute(t);
                } else t.startsWith(v) && (r.push({
                    type: 6,
                    index: h
                }), e.removeAttribute(t));
                if (M.test(e.tagName)) {
                    const t = e.textContent.split(v), i = t.length - 1;
                    if (i > 0) {
                        e.textContent = c ? c.emptyScript : "";
                        for(let s = 0; s < i; s++)e.append(t[s], lt()), I.nextNode(), r.push({
                            type: 2,
                            index: ++h
                        });
                        e.append(t[i], lt());
                    }
                }
            } else if (8 === e.nodeType) {
                if (e.data === m) r.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = e.data.indexOf(v, t + 1));)r.push({
                        type: 7,
                        index: h
                    }), t += v.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = w.createElement("template");
        return s.innerHTML = t, s;
    }
}
function z(t, i, s = t, e) {
    if (i === R) return i;
    let h = void 0 !== e ? s.o?.[e] : s.l;
    const o = st(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s.o ??= [])[e] = h : s.l = h), void 0 !== h && (i = z(t, h._$AS(t, i.values), h, e)), i;
}
class F {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? w).importNode(i, !0);
        I.currentNode = e;
        let h = I.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new et(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new K(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = I.nextNode(), o++);
        }
        return I.currentNode = w, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class et {
    get _$AU() {
        return this._$AM?._$AU ?? this.v;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this.v = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = z(this, t, i), st(t) ? t === D || null == t || "" === t ? (this._$AH !== D && this._$AR(), this._$AH = D) : t !== this._$AH && t !== R && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(w.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = B.createElement(N(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new F(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = V.get(t.strings);
        return void 0 === i && V.set(t.strings, i = new B(t)), i;
    }
    k(t) {
        g(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new et(this.O(lt()), this.O(lt()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this.v = t, this._$AP?.(t));
    }
}
class G {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = D;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = z(this, t, i, 0), o = !st(t) || t !== this._$AH && t !== R, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = z(this, e[s + n], i, n), r === R && (r = this._$AH[n]), o ||= !st(r) || r !== this._$AH[n], r === D ? t = D : t !== D && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class Y extends G {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === D ? void 0 : t;
    }
}
class Z extends G {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== D);
    }
}
class q extends G {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = z(this, t, i, 0) ?? D) === R) return;
        const s = this._$AH, e = t === D && s !== D || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== D && (s === D || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class K {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        z(this, t);
    }
}
const si = {
    M: f,
    P: v,
    A: m,
    C: 1,
    L: U,
    R: F,
    D: $,
    V: z,
    I: et,
    H: G,
    N: Z,
    U: q,
    B: Y,
    F: K
}, Re = n.litHtmlPolyfillSupport;
Re?.(B, et), (n.litHtmlVersions ??= []).push("3.2.0");
const Q = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new et(i.insertBefore(lt(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>h);
parcelHelpers.export(exports, "_$LE", ()=>x);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class h extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this.o = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = (0, _litHtml.render)(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this.o?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.o?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
h._$litElement$ = !0, h["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: h
});
const f = globalThis.litElementPolyfillSupport;
f?.({
    LitElement: h
});
const x = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.0");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>co);
const co = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tAwY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logo_page_css", ()=>logo_page_css);
var _lit = require("lit");
const logo_page_css = (0, _lit.css)`
    slot[name="app-heading"]{
        border: 1px solid black;
        color:red;
        text-align: center;
    }

`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EEZW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAG_NAME", ()=>TAG_NAME);
var _app = require("../components/App");
const TAG_NAME = "my-app";
if (!customElements.get(TAG_NAME)) customElements.define(TAG_NAME, (0, _app.App));

},{"../components/App":"f1hze","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1hze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _lit = require("lit");
var _appCssCss = require("../css/app-css.css");
class App extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`
        <div class="app">
            <app-logo>
                <h1 slot="app-heading">🏝️ Far Away 🧳</h1>
            </app-logo>
            <item-form>
                <span slot="item-list-text"> What do you need for your 😍 Trip!</span>
                <span slot="input-field-text"></item>
            </item-form>
            <items-list>
            </items-list>
            <app-footer>
                ... to-do
            </app-footer>
        </div>
        
        `;
    }
}
Object.defineProperty(App, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        (0, _appCssCss.app_css)
    ]
});

},{"lit":"4antt","../css/app-css.css":"hiPTb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiPTb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "app_css", ()=>app_css);
var _lit = require("lit");
const app_css = (0, _lit.css)`

   * {
      margin:0;
      box-sizing:border-box;
   }
   .app {
    font-family: "sans,Times New roman";
    font-size: 4.5rem;
    font-weight: 500;
    word-spacing:3px;
    letter spacing: -5px;
   }
   .app h1{
      // border:5px solid red;
      background-color:hsl(53, 94%, 49%);
      marging: -1em 0;
      padding:0.5em;
   }

`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39X0a":[function(require,module,exports) {
var _index = require("../components/index");
const TAG_NAME = "item-form";
if (!customElements.get(TAG_NAME)) customElements.define(TAG_NAME, (0, _index.Form));

},{"../components/index":"btU4q"}],"btU4q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("./App");
parcelHelpers.exportAll(_app, exports);
var _logo = require("./Logo");
parcelHelpers.exportAll(_logo, exports);
var _form = require("./Form");
parcelHelpers.exportAll(_form, exports);
var _packingList = require("./PackingList");
parcelHelpers.exportAll(_packingList, exports);

},{"./App":"f1hze","./Logo":"5wAlp","./Form":"egAnz","./PackingList":"4C6Ru","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egAnz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form);
var _litMobx = require("@adobe/lit-mobx");
var _lit = require("lit");
var _formStore = require("../store/FormStore");
var _itemStore = require("../store/ItemStore");
var _decorators = require("lit/decorators");
var _formPageCss = require("../css/form-page.css");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Form extends (0, _litMobx.MobxLitElement) {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "quantity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "handleItemCountChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e)=>{
                const itemCount = e.target;
                (0, _formStore.formStore).setItemCount(Number(itemCount.value));
                this.quantity = (0, _formStore.formStore).itemCount;
            }
        });
        Object.defineProperty(this, "onInputChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e)=>{
                const input = e.target;
                (0, _formStore.formStore).setItemInputValue(input.value);
                this.description = (0, _formStore.formStore).itemValue;
            }
        });
    }
    renderItemList() {
        return (0, _lit.html)`
            <span>
               <select 
               value="${this.quantity}"
               class="item-count-selector"
               @change=${this.handleItemCountChange}
               >
                ${Array.from({
            length: 10
        }, (_, i)=>i + 1).map((n)=>(0, _lit.html)`
                    <option value="${n}">${n}</option>`)}
               </select>
            </span>

        `;
    }
    renderItemInputField() {
        return (0, _lit.html)`
            <span>
                <input name="input-item" value="${this.description}" placeholder="Enter item ..."
                @input=${this.onInputChange}
                ></input>
            </span>
        `;
    }
    render() {
        return (0, _lit.html)`
            <form class="form"
            @submit=${this.onFormSubmit}
            >
                <slot name="item-list-text" class="item-count"></slot>
                ${this.renderItemList()}
                <slot name="input-field-text"></slot>
                ${this.renderItemInputField()}
                <button>Add</button>
            </form>
            `;
    }
    onFormSubmit(event) {
        event.preventDefault(); //do not render by default on submit
        if (this.description === "") return;
        const newItem = {
            id: Date.now(),
            description: this.description,
            quantity: this.quantity,
            packed: false
        };
        console.log("added new item", newItem);
        (0, _itemStore.itemStore).addItemsToList(newItem);
        console.log((0, _itemStore.itemStore).itemList);
    }
}
Object.defineProperty(Form, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        (0, _formPageCss.form_css)
    ]
});
__decorate([
    (0, _decorators.property)({
        type: Number
    }),
    __metadata("design:type", Object)
], Form.prototype, "quantity", void 0);
__decorate([
    (0, _decorators.property)({
        type: String
    }),
    __metadata("design:type", Object)
], Form.prototype, "description", void 0);

},{"@adobe/lit-mobx":"8SIpA","lit":"4antt","../store/FormStore":"4FYBK","../store/ItemStore":"e98ks","lit/decorators":"bCPKi","../css/form-page.css":"g4zR6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SIpA":[function(require,module,exports) {
/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A LitElement derived class which uses the MobxReactionUpdate mixin to create a mobx
 * reactive implementation of LitElement.
 *
 * Any observables used in the render template of the element will be tracked by a reaction
 * and cause an update of the element upon change.
 */ parcelHelpers.export(exports, "MobxLitElement", ()=>MobxLitElement);
var _mixinJs = require("./lib/mixin.js");
var _lit = require("lit");
parcelHelpers.exportAll(_mixinJs, exports);
class MobxLitElement extends (0, _mixinJs.MobxReactionUpdate)((0, _lit.LitElement)) {
}

},{"./lib/mixin.js":"5pv6y","lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pv6y":[function(require,module,exports) {
/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A class mixin which can be applied to lit-element's
 * [ReactiveElement](https://lit.dev/docs/api/ReactiveElement/)
 * derived classes. This mixin adds a mobx reaction which tracks the update method of ReactiveElement.
 *
 * Any observables used in the render template of the element will be tracked by a reaction
 * and cause an update of the element upon change.
 *
 * @param constructor the constructor to extend from to add the mobx reaction, must be derived from ReactiveElement.
 */ parcelHelpers.export(exports, "MobxReactionUpdate", ()=>MobxReactionUpdate);
var _mixinCustomJs = require("./mixin-custom.js");
var _mobx = require("mobx");
function MobxReactionUpdate(constructor) {
    return (0, _mixinCustomJs.MobxReactionUpdateCustom)(constructor, (0, _mobx.Reaction));
}

},{"./mixin-custom.js":"jOYoZ","mobx":"coRKn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOYoZ":[function(require,module,exports) {
/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A class mixin which can be applied to lit-element's
 * [ReactiveElement](https://lit.dev/docs/api/ReactiveElement/)
 * derived classes. This mixin adds a mobx reaction which tracks the update method of ReactiveElement.
 *
 * Any observables used in the render template of the element will be tracked by a reaction
 * and cause an update of the element upon change.
 *
 * @param constructor the constructor to extend from to add the mobx reaction, must be derived from ReactiveElement.
 * @param reaction a constructor for the Reaction implementation from mobx, used to provide custom Reactions and
 * makes it easier to handle multiple versions of mobx within a single application.
 */ parcelHelpers.export(exports, "MobxReactionUpdateCustom", ()=>MobxReactionUpdateCustom);
const reaction = Symbol("LitMobxRenderReaction");
const cachedRequestUpdate = Symbol("LitMobxRequestUpdate");
function MobxReactionUpdateCustom(constructor, ReactionConstructor) {
    var _a, _b;
    return _b = class MobxReactingElement extends constructor {
        constructor(){
            super(...arguments);
            this[_a] = ()=>{
                this.requestUpdate();
            };
        }
        connectedCallback() {
            super.connectedCallback();
            const name = this.constructor.name /* c8 ignore next */  || this.nodeName;
            this[reaction] = new ReactionConstructor(`${name}.update()`, this[cachedRequestUpdate]);
            if (this.hasUpdated) this.requestUpdate();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this[reaction]) {
                this[reaction].dispose();
                this[reaction] = undefined;
            }
        }
        update(changedProperties) {
            if (this[reaction]) this[reaction].track(super.update.bind(this, changedProperties));
            else // this should never happen, but just in case
            super.update(changedProperties);
        }
    }, _a = cachedRequestUpdate, _b;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coRKn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$mobx", ()=>$mobx);
parcelHelpers.export(exports, "FlowCancellationError", ()=>FlowCancellationError);
parcelHelpers.export(exports, "ObservableMap", ()=>ObservableMap);
parcelHelpers.export(exports, "ObservableSet", ()=>ObservableSet);
parcelHelpers.export(exports, "Reaction", ()=>Reaction);
parcelHelpers.export(exports, "_allowStateChanges", ()=>allowStateChanges);
parcelHelpers.export(exports, "_allowStateChangesInsideComputed", ()=>runInAction);
parcelHelpers.export(exports, "_allowStateReadsEnd", ()=>allowStateReadsEnd);
parcelHelpers.export(exports, "_allowStateReadsStart", ()=>allowStateReadsStart);
parcelHelpers.export(exports, "_autoAction", ()=>autoAction);
parcelHelpers.export(exports, "_endAction", ()=>_endAction);
parcelHelpers.export(exports, "_getAdministration", ()=>getAdministration);
parcelHelpers.export(exports, "_getGlobalState", ()=>getGlobalState);
parcelHelpers.export(exports, "_interceptReads", ()=>interceptReads);
parcelHelpers.export(exports, "_isComputingDerivation", ()=>isComputingDerivation);
parcelHelpers.export(exports, "_resetGlobalState", ()=>resetGlobalState);
parcelHelpers.export(exports, "_startAction", ()=>_startAction);
parcelHelpers.export(exports, "action", ()=>action);
parcelHelpers.export(exports, "autorun", ()=>autorun);
parcelHelpers.export(exports, "comparer", ()=>comparer);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "configure", ()=>configure);
parcelHelpers.export(exports, "createAtom", ()=>createAtom);
parcelHelpers.export(exports, "defineProperty", ()=>apiDefineProperty);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "extendObservable", ()=>extendObservable);
parcelHelpers.export(exports, "flow", ()=>flow);
parcelHelpers.export(exports, "flowResult", ()=>flowResult);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getAtom", ()=>getAtom);
parcelHelpers.export(exports, "getDebugName", ()=>getDebugName);
parcelHelpers.export(exports, "getDependencyTree", ()=>getDependencyTree);
parcelHelpers.export(exports, "getObserverTree", ()=>getObserverTree);
parcelHelpers.export(exports, "has", ()=>has);
parcelHelpers.export(exports, "intercept", ()=>intercept);
parcelHelpers.export(exports, "isAction", ()=>isAction);
parcelHelpers.export(exports, "isBoxedObservable", ()=>isObservableValue);
parcelHelpers.export(exports, "isComputed", ()=>isComputed);
parcelHelpers.export(exports, "isComputedProp", ()=>isComputedProp);
parcelHelpers.export(exports, "isFlow", ()=>isFlow);
parcelHelpers.export(exports, "isFlowCancellationError", ()=>isFlowCancellationError);
parcelHelpers.export(exports, "isObservable", ()=>isObservable);
parcelHelpers.export(exports, "isObservableArray", ()=>isObservableArray);
parcelHelpers.export(exports, "isObservableMap", ()=>isObservableMap);
parcelHelpers.export(exports, "isObservableObject", ()=>isObservableObject);
parcelHelpers.export(exports, "isObservableProp", ()=>isObservableProp);
parcelHelpers.export(exports, "isObservableSet", ()=>isObservableSet);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "makeAutoObservable", ()=>makeAutoObservable);
parcelHelpers.export(exports, "makeObservable", ()=>makeObservable);
parcelHelpers.export(exports, "observable", ()=>observable);
parcelHelpers.export(exports, "observe", ()=>observe);
parcelHelpers.export(exports, "onBecomeObserved", ()=>onBecomeObserved);
parcelHelpers.export(exports, "onBecomeUnobserved", ()=>onBecomeUnobserved);
parcelHelpers.export(exports, "onReactionError", ()=>onReactionError);
parcelHelpers.export(exports, "override", ()=>override);
parcelHelpers.export(exports, "ownKeys", ()=>apiOwnKeys);
parcelHelpers.export(exports, "reaction", ()=>reaction);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "runInAction", ()=>runInAction);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "spy", ()=>spy);
parcelHelpers.export(exports, "toJS", ()=>toJS);
parcelHelpers.export(exports, "trace", ()=>trace);
parcelHelpers.export(exports, "transaction", ()=>transaction);
parcelHelpers.export(exports, "untracked", ()=>untracked);
parcelHelpers.export(exports, "values", ()=>values);
parcelHelpers.export(exports, "when", ()=>when);
var global = arguments[3];
var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(annotationType, key) {
        return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */ 5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _(index, length) {
        return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _(other) {
        return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _(other) {
        return "Cannot initialize map from " + other;
    },
    21: function _(dataStructure) {
        return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _(thing) {
        return "Cannot obtain administration from " + thing;
    },
    25: function _(property, name) {
        return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _(property, name) {
        return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _(thing) {
        return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _(name, derivation) {
        return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _(name) {
        return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _(name) {
        return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _(method) {
        return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    },
    38: "'ownKeys()' can only be used on observable objects",
    39: "'defineProperty()' can only be used on observable objects"
};
var errors = niceErrors;
function die(error) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    if (typeof self !== "undefined") return self;
    return mockGlobal;
}
// We shorten anything used > 5 times
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/ Object.toString();
function assertProxies() {
    if (!hasProxy) die("`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`");
}
function warnAboutProxyRequirement(msg) {
    if (0, globalState.verifyProxies) die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
}
function getNextId() {
    return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */ function once(func) {
    var invoked = false;
    return function() {
        if (invoked) return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function noop() {};
function isFunction(fn) {
    return typeof fn === "function";
}
function isStringish(value) {
    var t = typeof value;
    switch(t){
        case "string":
        case "symbol":
        case "number":
            return true;
    }
    return false;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (!isObject(value)) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null) return true;
    var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
// https://stackoverflow.com/a/37865170
function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
    return false;
}
function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Yields true for both native and observable Map, even across different windows.
 */ function isES6Map(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
/**
 * Makes sure a Map is an instance of non-inherited native or observable Map.
 */ function isPlainES6Map(thing) {
    var mapProto = Object.getPrototypeOf(thing);
    var objectProto = Object.getPrototypeOf(mapProto);
    var nullProto = Object.getPrototypeOf(objectProto);
    return nullProto === null;
}
/**
 * Yields true for both native and observable Set, even across different windows.
 */ function isES6Set(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */ function getPlainObjectKeys(object) {
    var keys = Object.keys(object);
    // Not supported in IE, so there are not going to be symbol props anyway...
    if (!hasGetOwnPropertySymbols) return keys;
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) return keys;
    return [].concat(keys, symbols.filter(function(s) {
        return objectPrototype.propertyIsEnumerable.call(object, s);
    }));
}
// From Immer utils
// Returns all own keys, including non-enumerable and symbolic
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : /* istanbul ignore next */ Object.getOwnPropertyNames;
function stringifyKey(key) {
    if (typeof key === "string") return key;
    if (typeof key === "symbol") return key.toString();
    return new String(key).toString();
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
}
// From Immer utils
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {};
    // Note: without polyfill for ownKeys, symbols won't be picked up
    ownKeys(target).forEach(function(key) {
        res[key] = getDescriptor(target, key);
    });
    return res;
};
function getFlag(flags, mask) {
    return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
    if (newValue) flags |= mask;
    else flags &= ~mask;
    return flags;
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _createForOfIteratorHelperLoose(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (t) return (t = t.call(r)).next.bind(t);
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var o = 0;
        return function() {
            return o >= r.length ? {
                done: !0
            } : {
                done: !1,
                value: r[o++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, _extends.apply(null, arguments);
}
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
var storedAnnotationsSymbol = /*#__PURE__*/ Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */ function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
        if (is20223Decorator(property)) return annotation.decorate_20223_(target, property);
        else storeAnnotation(target, property, annotation);
    }
    return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */ function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    // @override must override something
    if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
        var fieldName = prototype.constructor.name + ".prototype." + key.toString();
        die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
    }
    // Cannot re-decorate
    assertNotDecorated(prototype, annotation, key);
    // Ignore override
    if (!isOverride(annotation)) prototype[storedAnnotationsSymbol][key] = annotation;
}
function assertNotDecorated(prototype, annotation, key) {
    if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
        var fieldName = prototype.constructor.name + ".prototype." + key.toString();
        var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
        var requestedAnnotationType = annotation.annotationType_;
        die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overridden by subclass.");
    }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */ function collectStoredAnnotations(target) {
    if (!hasProp(target, storedAnnotationsSymbol)) // if (__DEV__ && !target[storedAnnotationsSymbol]) {
    //     die(
    //         `No annotations were passed to makeObservable, but no decorated members have been found either`
    //     )
    // }
    // We need a copy as we will remove annotation from the list once it's applied.
    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
    return target[storedAnnotationsSymbol];
}
function is20223Decorator(context) {
    return typeof context == "object" && typeof context["kind"] == "string";
}
function assert20223DecoratorType(context, types) {
    if (!types.includes(context.kind)) die("The decorator applied to '" + String(context.name) + "' cannot be used on a " + context.kind + " element");
}
var $mobx = /*#__PURE__*/ Symbol("mobx administration");
var Atom = /*#__PURE__*/ function() {
    /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */ function Atom(name_) {
        if (name_ === void 0) name_ = "Atom@" + getNextId();
        this.name_ = void 0;
        this.flags_ = 0;
        this.observers_ = new Set();
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
        // onBecomeObservedListeners
        this.onBOL = void 0;
        // onBecomeUnobservedListeners
        this.onBUOL = void 0;
        this.name_ = name_;
    }
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
    var _proto = Atom.prototype;
    _proto.onBO = function onBO() {
        if (this.onBOL) this.onBOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) this.onBUOL.forEach(function(listener) {
            return listener();
        });
    } /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */ ;
    _proto.reportObserved = function reportObserved$1() {
        return reportObserved(this);
    } /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */ ;
    _proto.reportChanged = function reportChanged() {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    _proto.toString = function toString() {
        return this.name_;
    };
    return _createClass(Atom, [
        {
            key: "isBeingObserved",
            get: function get() {
                return getFlag(this.flags_, Atom.isBeingObservedMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Atom.isBeingObservedMask_, newValue);
            }
        },
        {
            key: "isPendingUnobservation",
            get: function get() {
                return getFlag(this.flags_, Atom.isPendingUnobservationMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Atom.isPendingUnobservationMask_, newValue);
            }
        },
        {
            key: "diffValue",
            get: function get() {
                return getFlag(this.flags_, Atom.diffValueMask_) ? 1 : 0;
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Atom.diffValueMask_, newValue === 1 ? true : false);
            }
        }
    ]);
}();
Atom.isBeingObservedMask_ = 1;
Atom.isPendingUnobservationMask_ = 2;
Atom.diffValueMask_ = 4;
var isAtom = /*#__PURE__*/ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) onBecomeObservedHandler = noop;
    if (onBecomeUnobservedHandler === void 0) onBecomeUnobservedHandler = noop;
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) onBecomeObserved(atom, onBecomeObservedHandler);
    if (onBecomeUnobservedHandler !== noop) onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    return atom;
}
function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    if (Object.is) return Object.is(a, b);
    return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
};
function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) return v;
    // something that can be converted and mutated?
    if (Array.isArray(v)) return observable.array(v, {
        name: name
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
        name: name
    });
    if (isES6Map(v)) return observable.map(v, {
        name: name
    });
    if (isES6Set(v)) return observable.set(v, {
        name: name
    });
    if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
        if (isGenerator(v)) return flow(v);
        else return autoAction(name, v);
    }
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
    if (Array.isArray(v)) return observable.array(v, {
        name: name,
        deep: false
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
        name: name,
        deep: false
    });
    if (isES6Map(v)) return observable.map(v, {
        name: name,
        deep: false
    });
    if (isES6Set(v)) return observable.set(v, {
        name: name,
        deep: false
    });
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue) {
    if (isObservable(v)) die("observable.struct should not be used with observable values");
    if (deepEqual(v, oldValue)) return oldValue;
    return v;
}
var OVERRIDE = "override";
var override = /*#__PURE__*/ createDecoratorAnnotation({
    annotationType_: OVERRIDE,
    make_: make_,
    extend_: extend_,
    decorate_20223_: decorate_20223_
});
function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
}
function make_(adm, key) {
    // Must not be plain object
    if (0, adm.isPlainObject_) die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
    // Must override something
    if (!hasProp(adm.appliedAnnotations_, key)) die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
    return 0 /* MakeResult.Cancel */ ;
}
function extend_(adm, key, descriptor, proxyTrap) {
    die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}
function decorate_20223_(desc, context) {
    console.warn("'" + this.annotationType_ + "' cannot be used with decorators - this is a no-op");
}
function createActionAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$1,
        extend_: extend_$1,
        decorate_20223_: decorate_20223_$1
    };
}
function make_$1(adm, key, descriptor, source) {
    var _this$options_;
    // bound
    if ((_this$options_ = this.options_) != null && _this$options_.bound) return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */  : 1 /* MakeResult.Break */ ;
    // own
    if (source === adm.target_) return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */  : 2 /* MakeResult.Continue */ ;
    // prototype
    if (isAction(descriptor.value)) // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1 /* MakeResult.Break */ ;
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2 /* MakeResult.Continue */ ;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorate_20223_$1(mthd, context) {
    assert20223DecoratorType(context, [
        "method",
        "field"
    ]);
    var kind = context.kind, name = context.name, addInitializer = context.addInitializer;
    var ann = this;
    var _createAction = function _createAction(m) {
        var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
        return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
    };
    if (kind == "field") return function(initMthd) {
        var _ann$options_3;
        var mthd = initMthd;
        if (!isAction(mthd)) mthd = _createAction(mthd);
        if ((_ann$options_3 = ann.options_) != null && _ann$options_3.bound) {
            mthd = mthd.bind(this);
            mthd.isMobxAction = true;
        }
        return mthd;
    };
    if (kind == "method") {
        var _this$options_2;
        if (!isAction(mthd)) mthd = _createAction(mthd);
        if ((_this$options_2 = this.options_) != null && _this$options_2.bound) addInitializer(function() {
            var self1 = this;
            var bound = self1[name].bind(self1);
            bound.isMobxAction = true;
            self1[name] = bound;
        });
        return mthd;
    }
    die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
}
function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
    if (safeDescriptors === void 0) safeDescriptors = globalState.safeDescriptors;
    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
        var _adm$proxy_;
        value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
        value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, // https://github.com/mobxjs/mobx/discussions/3140
        (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
        // Non-configurable for classes
        // prevents accidental field redefinition in subclass
        configurable: safeDescriptors ? adm.isPlainObject_ : true,
        // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
        enumerable: false,
        // Non-obsevable, therefore non-writable
        // Also prevents rewriting in subclass constructor
        writable: safeDescriptors ? false : true
    };
}
function createFlowAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$2,
        extend_: extend_$2,
        decorate_20223_: decorate_20223_$2
    };
}
function make_$2(adm, key, descriptor, source) {
    var _this$options_;
    // own
    if (source === adm.target_) return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */  : 2 /* MakeResult.Continue */ ;
    // prototype
    // bound - must annotate protos to support super.flow()
    if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
        if (this.extend_(adm, key, descriptor, false) === null) return 0 /* MakeResult.Cancel */ ;
    }
    if (isFlow(descriptor.value)) // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1 /* MakeResult.Break */ ;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
    defineProperty(source, key, flowDescriptor);
    return 2 /* MakeResult.Continue */ ;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
    var _this$options_2;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorate_20223_$2(mthd, context) {
    var _this$options_3;
    assert20223DecoratorType(context, [
        "method"
    ]);
    var name = context.name, addInitializer = context.addInitializer;
    if (!isFlow(mthd)) mthd = flow(mthd);
    if ((_this$options_3 = this.options_) != null && _this$options_3.bound) addInitializer(function() {
        var self1 = this;
        var bound = self1[name].bind(self1);
        bound.isMobXFlow = true;
        self1[name] = bound;
    });
    return mthd;
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
    if (safeDescriptors === void 0) safeDescriptors = globalState.safeDescriptors;
    assertFlowDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    // In case of flow.bound, the descriptor can be from already annotated prototype
    if (!isFlow(value)) value = flow(value);
    if (bound) {
        var _adm$proxy_;
        // We do not keep original function around, so we bind the existing flow
        value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
        // This is normally set by `flow`, but `bind` returns new function...
        value.isMobXFlow = true;
    }
    return {
        value: value,
        // Non-configurable for classes
        // prevents accidental field redefinition in subclass
        configurable: safeDescriptors ? adm.isPlainObject_ : true,
        // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
        enumerable: false,
        // Non-obsevable, therefore non-writable
        // Also prevents rewriting in subclass constructor
        writable: safeDescriptors ? false : true
    };
}
function createComputedAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$3,
        extend_: extend_$3,
        decorate_20223_: decorate_20223_$3
    };
}
function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */  : 1 /* MakeResult.Break */ ;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
        get: descriptor.get,
        set: descriptor.set
    }), proxyTrap);
}
function decorate_20223_$3(get, context) {
    assert20223DecoratorType(context, [
        "getter"
    ]);
    var ann = this;
    var key = context.name, addInitializer = context.addInitializer;
    addInitializer(function() {
        var adm = asObservableObject(this)[$mobx];
        var options = _extends({}, ann.options_, {
            get: get,
            context: this
        });
        options.name || (options.name = adm.name_ + "." + key.toString());
        adm.values_.set(key, new ComputedValue(options));
    });
    return function() {
        return this[$mobx].getObservablePropValue_(key);
    };
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get = _ref2.get;
    if (!get) die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
}
function createObservableAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$4,
        extend_: extend_$4,
        decorate_20223_: decorate_20223_$4
    };
}
function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* MakeResult.Cancel */  : 1 /* MakeResult.Break */ ;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;
    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function decorate_20223_$4(desc, context) {
    if (context.kind === "field") throw die("Please use `@observable accessor " + String(context.name) + "` instead of `@observable " + String(context.name) + "`");
    assert20223DecoratorType(context, [
        "accessor"
    ]);
    var ann = this;
    var kind = context.kind, name = context.name;
    // The laziness here is not ideal... It's a workaround to how 2022.3 Decorators are implemented:
    //   `addInitializer` callbacks are executed _before_ any accessors are defined (instead of the ideal-for-us right after each).
    //   This means that, if we were to do our stuff in an `addInitializer`, we'd attempt to read a private slot
    //   before it has been initialized. The runtime doesn't like that and throws a `Cannot read private member
    //   from an object whose class did not declare it` error.
    // TODO: it seems that this will not be required anymore in the final version of the spec
    // See TODO: link
    var initializedObjects = new WeakSet();
    function initializeObservable(target, value) {
        var _ann$options_$enhance, _ann$options_;
        var adm = asObservableObject(target)[$mobx];
        var observable = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, adm.name_ + "." + name.toString(), false);
        adm.values_.set(name, observable);
        initializedObjects.add(target);
    }
    if (kind == "accessor") return {
        get: function get() {
            if (!initializedObjects.has(this)) initializeObservable(this, desc.get.call(this));
            return this[$mobx].getObservablePropValue_(name);
        },
        set: function set(value) {
            if (!initializedObjects.has(this)) initializeObservable(this, value);
            return this[$mobx].setObservablePropValue_(name, value);
        },
        init: function init(value) {
            if (!initializedObjects.has(this)) initializeObservable(this, value);
            return value;
        }
    };
    return;
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;
    if (!("value" in descriptor)) die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
}
var AUTO = "true";
var autoAnnotation = /*#__PURE__*/ createAutoAnnotation();
function createAutoAnnotation(options) {
    return {
        annotationType_: AUTO,
        options_: options,
        make_: make_$5,
        extend_: extend_$5,
        decorate_20223_: decorate_20223_$5
    };
}
function make_$5(adm, key, descriptor, source) {
    var _this$options_3, _this$options_4;
    // getter -> computed
    if (descriptor.get) return computed.make_(adm, key, descriptor, source);
    // lone setter -> action setter
    if (descriptor.set) {
        // TODO make action applicable to setter and delegate to action.make_
        var set = createAction(key.toString(), descriptor.set);
        // own
        if (source === adm.target_) return adm.defineProperty_(key, {
            configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
            set: set
        }) === null ? 0 /* MakeResult.Cancel */  : 2 /* MakeResult.Continue */ ;
        // proto
        defineProperty(source, key, {
            configurable: true,
            set: set
        });
        return 2 /* MakeResult.Continue */ ;
    }
    // function on proto -> autoAction/flow
    if (source !== adm.target_ && typeof descriptor.value === "function") {
        var _this$options_2;
        if (isGenerator(descriptor.value)) {
            var _this$options_;
            var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
            return flowAnnotation.make_(adm, key, descriptor, source);
        }
        var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
        return actionAnnotation.make_(adm, key, descriptor, source);
    }
    // other -> observable
    // Copy props from proto as well, see test:
    // "decorate should work with Object.create"
    var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
        var _adm$proxy_;
        descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return observableAnnotation.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_5, _this$options_6;
    // getter -> computed
    if (descriptor.get) return computed.extend_(adm, key, descriptor, proxyTrap);
    // lone setter -> action setter
    if (descriptor.set) // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
    // other -> observable
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
        var _adm$proxy_2;
        descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }
    var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
    return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}
function decorate_20223_$5(desc, context) {
    die("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
    var _options$defaultDecor;
    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;
    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */ function createObservable(v, arg2, arg3) {
    // @observable someProp; (2022.3 Decorators)
    if (is20223Decorator(arg2)) return observableAnnotation.decorate_20223_(v, arg2);
    // @observable someProp;
    if (isStringish(arg2)) {
        storeAnnotation(v, arg2, observableAnnotation);
        return;
    }
    // already observable - ignore
    if (isObservable(v)) return v;
    // plain object
    if (isPlainObject(v)) return observable.object(v, arg2, arg3);
    // Array
    if (Array.isArray(v)) return observable.array(v, arg2);
    // Map
    if (isES6Map(v)) return observable.map(v, arg2);
    // Set
    if (isES6Set(v)) return observable.set(v, arg2);
    // other object - ignore
    if (typeof v === "object" && v !== null) return v;
    // anything else
    return observable.box(v, arg2);
}
assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
    box: function box(value, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
        return initObservable(function() {
            return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
        });
    },
    ref: /*#__PURE__*/ createDecoratorAnnotation(observableRefAnnotation),
    shallow: /*#__PURE__*/ createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /*#__PURE__*/ createDecoratorAnnotation(observableStructAnnotation)
};
// eslint-disable-next-line
var observable = /*#__PURE__*/ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/ createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */ var computed = function computed(arg1, arg2) {
    if (is20223Decorator(arg2)) // @computed (2022.3 Decorators)
    return computedAnnotation.decorate_20223_(arg1, arg2);
    if (isStringish(arg2)) // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
    if (isPlainObject(arg1)) // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
    if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || ""); /* for generated name */ 
    return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config, _getDescriptor;
// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/ getDescriptor(function() {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
// we can safely recycle this object
var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) autoAction = false;
    if (!isFunction(fn)) die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
    function res() {
        return executeAction(actionName, autoAction, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    res.toString = function() {
        return fn.toString();
    };
    if (isFunctionNameConfigurable) {
        tmpNameDescriptor.value = actionName;
        defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
    try {
        return fn.apply(scope, args);
    } catch (err) {
        runInfo.error_ = err;
        throw err;
    } finally{
        _endAction(runInfo);
    }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
    var notifySpy_ = isSpyEnabled() && !!actionName;
    var startTime_ = 0;
    if (notifySpy_) {
        startTime_ = Date.now();
        var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
        spyReportStart({
            type: ACTION,
            name: actionName,
            object: scope,
            arguments: flattenedArgs
        });
    }
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow
    if (runAsAction) {
        untrackedStart();
        prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
        runAsAction_: runAsAction,
        prevDerivation_: prevDerivation_,
        prevAllowStateChanges_: prevAllowStateChanges_,
        prevAllowStateReads_: prevAllowStateReads_,
        notifySpy_: notifySpy_,
        startTime_: startTime_,
        actionId_: nextActionId++,
        parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) die(30);
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== undefined) globalState.suppressReactionErrors = true;
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);
    if (0, runInfo.notifySpy_) spyReportEnd({
        time: Date.now() - runInfo.startTime_
    });
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    try {
        return func();
    } finally{
        allowStateChangesEnd(prev);
    }
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
var CREATE = "create";
var ObservableValue = /*#__PURE__*/ function(_Atom) {
    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
        var _this;
        if (name_ === void 0) name_ = "ObservableValue@" + getNextId();
        if (notifySpy === void 0) notifySpy = true;
        if (equals === void 0) equals = comparer["default"];
        _this = _Atom.call(this, name_) || this;
        _this.enhancer = void 0;
        _this.name_ = void 0;
        _this.equals = void 0;
        _this.hasUnreportedChange_ = false;
        _this.interceptors_ = void 0;
        _this.changeListeners_ = void 0;
        _this.value_ = void 0;
        _this.dehancer = void 0;
        _this.enhancer = enhancer;
        _this.name_ = name_;
        _this.equals = equals;
        _this.value_ = enhancer(value, undefined, name_);
        if (notifySpy && isSpyEnabled()) // only notify spy if this is a stand-alone observable
        spyReport({
            type: CREATE,
            object: _this,
            observableKind: "value",
            debugObjectName: _this.name_,
            newValue: "" + _this.value_
        });
        return _this;
    }
    _inheritsLoose(ObservableValue, _Atom);
    var _proto = ObservableValue.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.set = function set(newValue) {
        var oldValue = this.value_;
        newValue = this.prepareNewValue_(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) spyReportStart({
                type: UPDATE,
                object: this,
                observableKind: "value",
                debugObjectName: this.name_,
                newValue: newValue,
                oldValue: oldValue
            });
            this.setNewValue_(newValue);
            if (notifySpy) spyReportEnd();
        }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: UPDATE,
                newValue: newValue
            });
            if (!change) return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value_, this.name_);
        return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
        var oldValue = this.value_;
        this.value_ = newValue;
        this.reportChanged();
        if (hasListeners(this)) notifyListeners(this, {
            type: UPDATE,
            object: this,
            newValue: newValue,
            oldValue: oldValue
        });
    };
    _proto.get = function get() {
        this.reportObserved();
        return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately) listener({
            observableKind: "value",
            debugObjectName: this.name_,
            object: this,
            type: UPDATE,
            newValue: this.value_,
            oldValue: undefined
        });
        return registerListener(this, listener);
    };
    _proto.raw = function raw() {
        // used by MST ot get undehanced value
        return this.value_;
    };
    _proto.toJSON = function toJSON() {
        return this.get();
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
        return toPrimitive(this.get());
    };
    _proto[Symbol.toPrimitive] = function() {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/ createInstanceofPredicate("ObservableValue", ObservableValue);
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */ var ComputedValue = /*#__PURE__*/ function() {
    /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */ function ComputedValue(options) {
        this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
        this.observing_ = [];
        // nodes we are looking at. Our value depends on these nodes
        this.newObserving_ = null;
        // during tracking it's an array with new observed observers
        this.observers_ = new Set();
        this.runId_ = 0;
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
        this.unboundDepsCount_ = 0;
        this.value_ = new CaughtException(null);
        this.name_ = void 0;
        this.triggeredBy_ = void 0;
        this.flags_ = 0;
        this.derivation = void 0;
        // N.B: unminified as it is used by MST
        this.setter_ = void 0;
        this.isTracing_ = TraceMode.NONE;
        this.scope_ = void 0;
        this.equals_ = void 0;
        this.requiresReaction_ = void 0;
        this.keepAlive_ = void 0;
        this.onBOL = void 0;
        this.onBUOL = void 0;
        if (!options.get) die(31);
        this.derivation = options.get;
        this.name_ = options.name || "ComputedValue@" + getNextId();
        if (options.set) this.setter_ = createAction(this.name_ + "-setter", options.set);
        this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
        this.scope_ = options.context;
        this.requiresReaction_ = options.requiresReaction;
        this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
        if (this.onBOL) this.onBOL.forEach(function(listener) {
            return listener();
        });
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) this.onBUOL.forEach(function(listener) {
            return listener();
        });
    };
    /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */ _proto.get = function get() {
        if (this.isComputing) die(32, this.name_, this.derivation);
        if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
        this.observers_.size === 0 && !this.keepAlive_) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead_();
                startBatch(); // See perf test 'computed memoization'
                this.value_ = this.computeValue_(false);
                endBatch();
            }
        } else {
            reportObserved(this);
            if (shouldCompute(this)) {
                var prevTrackingContext = globalState.trackingContext;
                if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
                if (this.trackAndCompute()) propagateChangeConfirmed(this);
                globalState.trackingContext = prevTrackingContext;
            }
        }
        var result = this.value_;
        if (isCaughtException(result)) throw result.cause;
        return result;
    };
    _proto.set = function set(value) {
        if (this.setter_) {
            if (this.isRunningSetter) die(33, this.name_);
            this.isRunningSetter = true;
            try {
                this.setter_.call(this.scope_, value);
            } finally{
                this.isRunningSetter = false;
            }
        } else die(34, this.name_);
    };
    _proto.trackAndCompute = function trackAndCompute() {
        // N.B: unminified as it is used by MST
        var oldValue = this.value_;
        var wasSuspended = /* see #1208 */ this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
        var newValue = this.computeValue_(true);
        var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
        if (changed) {
            this.value_ = newValue;
            if (isSpyEnabled()) spyReport({
                observableKind: "computed",
                debugObjectName: this.name_,
                object: this.scope_,
                type: "update",
                oldValue: oldValue,
                newValue: newValue
            });
        }
        return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
        this.isComputing = true;
        // don't allow state changes during computation
        var prev = allowStateChangesStart(false);
        var res;
        if (track) res = trackDerivedFunction(this, this.derivation, this.scope_);
        else {
            if (globalState.disableErrorBoundaries === true) res = this.derivation.call(this.scope_);
            else try {
                res = this.derivation.call(this.scope_);
            } catch (e) {
                res = new CaughtException(e);
            }
        }
        allowStateChangesEnd(prev);
        this.isComputing = false;
        return res;
    };
    _proto.suspend_ = function suspend_() {
        if (!this.keepAlive_) {
            clearObserving(this);
            this.value_ = undefined; // don't hold on to computed value!
            if (this.isTracing_ !== TraceMode.NONE) console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
        }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function() {
            // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    observableKind: "computed",
                    debugObjectName: _this.name_,
                    type: UPDATE,
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
        if (this.isTracing_ !== TraceMode.NONE) console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
        if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
        return toPrimitive(this.get());
    };
    _proto[Symbol.toPrimitive] = function() {
        return this.valueOf();
    };
    return _createClass(ComputedValue, [
        {
            key: "isComputing",
            get: function get() {
                return getFlag(this.flags_, ComputedValue.isComputingMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, ComputedValue.isComputingMask_, newValue);
            }
        },
        {
            key: "isRunningSetter",
            get: function get() {
                return getFlag(this.flags_, ComputedValue.isRunningSetterMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, ComputedValue.isRunningSetterMask_, newValue);
            }
        },
        {
            key: "isBeingObserved",
            get: function get() {
                return getFlag(this.flags_, ComputedValue.isBeingObservedMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, ComputedValue.isBeingObservedMask_, newValue);
            }
        },
        {
            key: "isPendingUnobservation",
            get: function get() {
                return getFlag(this.flags_, ComputedValue.isPendingUnobservationMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, ComputedValue.isPendingUnobservationMask_, newValue);
            }
        },
        {
            key: "diffValue",
            get: function get() {
                return getFlag(this.flags_, ComputedValue.diffValueMask_) ? 1 : 0;
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, ComputedValue.diffValueMask_, newValue === 1 ? true : false);
            }
        }
    ]);
}();
ComputedValue.isComputingMask_ = 1;
ComputedValue.isRunningSetterMask_ = 2;
ComputedValue.isBeingObservedMask_ = 4;
ComputedValue.isPendingUnobservationMask_ = 8;
ComputedValue.diffValueMask_ = 16;
var isComputedValue = /*#__PURE__*/ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause;
// Empty
};
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */ function shouldCompute(derivation) {
    switch(derivation.dependenciesState_){
        case IDerivationState_.UP_TO_DATE_:
            return false;
        case IDerivationState_.NOT_TRACKING_:
        case IDerivationState_.STALE_:
            return true;
        case IDerivationState_.POSSIBLY_STALE_:
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing_, l = obs.length;
            for(var i = 0; i < l; i++){
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) obj.get();
                    else try {
                        obj.get();
                    } catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers_.size > 0;
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
    if (!globalState.allowStateReads && globalState.observableRequiresReaction) console.warn("[mobx] Observable '" + observable.name_ + "' being read outside a reactive context.");
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */ function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    // Preallocate array; will be trimmed by bindDependencies.
    derivation.newObserving_ = new Array(// Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    derivation.runId_ === 0 ? 100 : derivation.observing_.length);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) result = f.call(context);
    else try {
        result = f.call(context);
    } catch (e) {
        result = new CaughtException(e);
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (derivation.observing_.length !== 0) return;
    if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */ function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount_;
    for(var i = 0; i < l; i++){
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i) observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState_ > lowestNewObservingDerivationState) lowestNewObservingDerivationState = dep.dependenciesState_;
    }
    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while(l--){
        var _dep = prevObserving[l];
        if (_dep.diffValue === 0) removeObserver(_dep, derivation);
        _dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while(i0--){
        var _dep2 = observing[i0];
        if (_dep2.diffValue === 1) {
            _dep2.diffValue = 0;
            addObserver(_dep2, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
        derivation.dependenciesState_ = lowestNewObservingDerivationState;
        derivation.onBecomeStale_();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;
    while(i--)removeObserver(obs[i], derivation);
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    } finally{
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */ function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;
    while(i--)obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
}
/**
 * These values will persist if global state is reset
 */ var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED",
    "useProxies"
];
var MobXGlobals = function MobXGlobals() {
    /**
   * MobXGlobals version.
   * MobX compatiblity with other versions loaded in memory as long as this version matches.
   * It indicates that the global state still stores similar information
   *
   * N.B: this version is unrelated to the package version of MobX, and is only the version of the
   * internal state storage of MobX, and can be the same across many different package versions
   */ this.version = 6;
    /**
   * globally unique token to signal unchanged
   */ this.UNCHANGED = {};
    /**
   * Currently running derivation
   */ this.trackingDerivation = null;
    /**
   * Currently running reaction. This determines if we currently have a reactive context.
   * (Tracking derivation is also set for temporal tracking of computed values inside actions,
   * but trackingReaction can only be set by a form of Reaction)
   */ this.trackingContext = null;
    /**
   * Each time a derivation is tracked, it is assigned a unique run-id
   */ this.runId = 0;
    /**
   * 'guid' for general purpose. Will be persisted amongst resets.
   */ this.mobxGuid = 0;
    /**
   * Are we in a batch block? (and how many of them)
   */ this.inBatch = 0;
    /**
   * Observables that don't have observers anymore, and are about to be
   * suspended, unless somebody else accesses it in the same batch
   *
   * @type {IObservable[]}
   */ this.pendingUnobservations = [];
    /**
   * List of scheduled, not yet executed, reactions.
   */ this.pendingReactions = [];
    /**
   * Are we currently processing reactions?
   */ this.isRunningReactions = false;
    /**
   * Is it allowed to change observables at this point?
   * In general, MobX doesn't allow that when running computations and React.render.
   * To ensure that those functions stay pure.
   */ this.allowStateChanges = false;
    /**
   * Is it allowed to read observables at this point?
   * Used to hold the state needed for `observableRequiresReaction`
   */ this.allowStateReads = true;
    /**
   * If strict mode is enabled, state changes are by default not allowed
   */ this.enforceActions = true;
    /**
   * Spy callbacks
   */ this.spyListeners = [];
    /**
   * Globally attached error handlers that react specifically to errors in reactions
   */ this.globalReactionErrorHandlers = [];
    /**
   * Warn if computed values are accessed outside a reactive context
   */ this.computedRequiresReaction = false;
    /**
   * (Experimental)
   * Warn if you try to create to derivation / reactive context without accessing any observable.
   */ this.reactionRequiresObservable = false;
    /**
   * (Experimental)
   * Warn if observables are accessed outside a reactive context
   */ this.observableRequiresReaction = false;
    /*
   * Don't catch and rethrow exceptions. This is useful for inspecting the state of
   * the stack when an exception occurs while debugging.
   */ this.disableErrorBoundaries = false;
    /*
   * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
   * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
   */ this.suppressReactionErrors = false;
    this.useProxies = true;
    /*
   * print warnings about code that would fail if proxies weren't available
   */ this.verifyProxies = false;
    /**
   * False forces all object's descriptors to
   * writable: true
   * configurable: true
   */ this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/ function() {
    var global = /*#__PURE__*/ getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        // Because this is a IIFE we need to let isolateCalled a chance to change
        // so we run it after the event loop completed at least 1 iteration
        setTimeout(function() {
            if (!isolateCalled) die(35);
        }, 1);
        return new MobXGlobals();
    } else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {};
         // make merge backward compatible
        return global.__mobxGlobals;
    } else {
        global.__mobxInstanceCount = 1;
        return global.__mobxGlobals = /*#__PURE__*/ new MobXGlobals();
    }
}();
function isolateGlobalState() {
    if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
    isolateCalled = true;
    if (canMergeGlobalState) {
        var global = getGlobal();
        if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */ function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for(var key in defaultGlobals)if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}
function hasObservers(observable) {
    return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
    return observable.observers_;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_;
// invariantObservers(observable);
// invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);
    if (observable.observers_.size === 0) // deleting last observer
    queueForUnobservation(observable);
// invariantObservers(observable);
// invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */ function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for(var i = 0; i < list.length; i++){
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers_.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBUO();
                }
                if (observable instanceof ComputedValue) // computed values are automatically teared down when the last observer leaves
                // this process happens recursively, this computed might be the last observabe of another, etc..
                observable.suspend_();
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */ if (derivation.runId_ !== observable.lastAccessedBy_) {
            observable.lastAccessedBy_ = derivation.runId_;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
            if (!observable.isBeingObserved && globalState.trackingContext) {
                observable.isBeingObserved = true;
                observable.onBO();
            }
        }
        return observable.isBeingObserved;
    } else if (observable.observers_.size === 0 && globalState.inBatch > 0) queueForUnobservation(observable);
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */ // Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            if (d.isTracing_ !== TraceMode.NONE) logTraceInfo(d, observable);
            d.onBecomeStale_();
        }
        d.dependenciesState_ = IDerivationState_.STALE_;
    });
// invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
            d.dependenciesState_ = IDerivationState_.STALE_;
            if (d.isTracing_ !== TraceMode.NONE) logTraceInfo(d, observable);
        } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
        ) observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    });
// invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
    observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
            d.onBecomeStale_();
        }
    });
// invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");
    if (derivation.isTracing_ === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + "	".repeat(depth - 1) + tree.name);
    if (tree.dependencies) tree.dependencies.forEach(function(child) {
        return printDepTree(child, lines, depth + 1);
    });
}
var Reaction = /*#__PURE__*/ function() {
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
        if (name_ === void 0) name_ = "Reaction@" + getNextId();
        this.name_ = void 0;
        this.onInvalidate_ = void 0;
        this.errorHandler_ = void 0;
        this.requiresObservable_ = void 0;
        this.observing_ = [];
        // nodes we are looking at. Our value depends on these nodes
        this.newObserving_ = [];
        this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
        this.runId_ = 0;
        this.unboundDepsCount_ = 0;
        this.flags_ = 0;
        this.isTracing_ = TraceMode.NONE;
        this.name_ = name_;
        this.onInvalidate_ = onInvalidate_;
        this.errorHandler_ = errorHandler_;
        this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
        if (!this.isScheduled) {
            this.isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    } /**
   * internal, use schedule() if you intend to kick off a reaction
   */ ;
    _proto.runReaction_ = function runReaction_() {
        if (!this.isDisposed) {
            startBatch();
            this.isScheduled = false;
            var prev = globalState.trackingContext;
            globalState.trackingContext = this;
            if (shouldCompute(this)) {
                this.isTrackPending = true;
                try {
                    this.onInvalidate_();
                    if ((0, this.isTrackPending) && isSpyEnabled()) // onInvalidate didn't trigger track right away..
                    spyReport({
                        name: this.name_,
                        type: "scheduled-reaction"
                    });
                } catch (e) {
                    this.reportExceptionInDerivation_(e);
                }
            }
            globalState.trackingContext = prev;
            endBatch();
        }
    };
    _proto.track = function track(fn) {
        if (this.isDisposed) return;
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name_,
                type: "reaction"
            });
        }
        this.isRunning = true;
        var prevReaction = globalState.trackingContext; // reactions could create reactions...
        globalState.trackingContext = this;
        var result = trackDerivedFunction(this, fn, undefined);
        globalState.trackingContext = prevReaction;
        this.isRunning = false;
        this.isTrackPending = false;
        if (this.isDisposed) // disposed during last run. Clean up everything that was bound after the dispose call.
        clearObserving(this);
        if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);
        if (notify) spyReportEnd({
            time: Date.now() - startTime
        });
        endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
        var _this = this;
        if (this.errorHandler_) {
            this.errorHandler_(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries) throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (!globalState.suppressReactionErrors) console.error(message, error);
        else console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
         // prettier-ignore
        if (isSpyEnabled()) spyReport({
            type: "error",
            name: this.name_,
            message: message,
            error: "" + error
        });
        globalState.globalReactionErrorHandlers.forEach(function(f) {
            return f(error, _this);
        });
    };
    _proto.dispose = function dispose() {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this.isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    _proto.getDisposer_ = function getDisposer_(abortSignal) {
        var _this2 = this;
        var dispose = function dispose() {
            _this2.dispose();
            abortSignal == null || abortSignal.removeEventListener == null || abortSignal.removeEventListener("abort", dispose);
        };
        abortSignal == null || abortSignal.addEventListener == null || abortSignal.addEventListener("abort", dispose);
        dispose[$mobx] = this;
        return dispose;
    };
    _proto.toString = function toString() {
        return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
        if (enterBreakPoint === void 0) enterBreakPoint = false;
        trace(this, enterBreakPoint);
    };
    return _createClass(Reaction, [
        {
            key: "isDisposed",
            get: function get() {
                return getFlag(this.flags_, Reaction.isDisposedMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Reaction.isDisposedMask_, newValue);
            }
        },
        {
            key: "isScheduled",
            get: function get() {
                return getFlag(this.flags_, Reaction.isScheduledMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Reaction.isScheduledMask_, newValue);
            }
        },
        {
            key: "isTrackPending",
            get: function get() {
                return getFlag(this.flags_, Reaction.isTrackPendingMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Reaction.isTrackPendingMask_, newValue);
            }
        },
        {
            key: "isRunning",
            get: function get() {
                return getFlag(this.flags_, Reaction.isRunningMask_);
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Reaction.isRunningMask_, newValue);
            }
        },
        {
            key: "diffValue",
            get: function get() {
                return getFlag(this.flags_, Reaction.diffValueMask_) ? 1 : 0;
            },
            set: function set(newValue) {
                this.flags_ = setFlag(this.flags_, Reaction.diffValueMask_, newValue === 1 ? true : false);
            }
        }
    ]);
}();
Reaction.isDisposedMask_ = 1;
Reaction.isScheduledMask_ = 2;
Reaction.isTrackPendingMask_ = 4;
Reaction.isRunningMask_ = 8;
Reaction.diffValueMask_ = 16;
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function() {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */ var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler(f) {
    return f();
};
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while(allReactions.length > 0){
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for(var i = 0, l = remainingReactions.length; i < l; i++)remainingReactions[i].runReaction_();
    }
    globalState.isRunningReactions = false;
}
var isReaction = /*#__PURE__*/ createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function reactionScheduler(f) {
        return fn(function() {
            return baseScheduler(f);
        });
    };
}
function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length) return;
    var listeners = globalState.spyListeners;
    for(var i = 0, l = listeners.length; i < l; i++)listeners[i](event);
}
function spyReportStart(event) {
    var change = _extends({}, event, {
        spyReportStart: true
    });
    spyReport(change);
}
var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
};
function spyReportEnd(change) {
    if (change) spyReport(_extends({}, change, {
        type: "report-end",
        spyReportEnd: true
    }));
    else spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function() {
        globalState.spyListeners = globalState.spyListeners.filter(function(l) {
            return l !== listener;
        });
    });
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/ createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/ createActionAnnotation(ACTION_BOUND, {
    bound: true
});
var autoActionAnnotation = /*#__PURE__*/ createActionAnnotation(AUTOACTION, {
    autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/ createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
});
function createActionFactory(autoAction) {
    var res = function action(arg1, arg2) {
        // action(fn() {})
        if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
        // action("name", fn() {})
        if (isFunction(arg2)) return createAction(arg1, arg2, autoAction);
        // @action (2022.3 Decorators)
        if (is20223Decorator(arg2)) return (autoAction ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
        // @action
        if (isStringish(arg2)) return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
        // action("name") & @action("name")
        if (isStringish(arg1)) return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
            name: arg1,
            autoAction: autoAction
        }));
        die("Invalid arguments for `action`");
    };
    return res;
}
var action = /*#__PURE__*/ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/ createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
    return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */ function autorun(view, opts) {
    var _opts$name, _opts, _opts2, _opts3;
    if (opts === void 0) opts = EMPTY_OBJECT;
    if (!isFunction(view)) die("Autorun expects a function as first argument");
    if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) // normal autorun
    reaction = new Reaction(name, function() {
        this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
    else {
        var scheduler = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled = false;
        reaction = new Reaction(name, function() {
            if (!isScheduled) {
                isScheduled = true;
                scheduler(function() {
                    isScheduled = false;
                    if (!reaction.isDisposed) reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    if (!((_opts2 = opts) != null && (_opts2 = _opts2.signal) != null && _opts2.aborted)) reaction.schedule_();
    return reaction.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
}
var run = function run(f) {
    return f();
};
function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
        return setTimeout(f, opts.delay);
    } : run;
}
function reaction(expression, effect, opts) {
    var _opts$name2, _opts4, _opts5;
    if (opts === void 0) opts = EMPTY_OBJECT;
    if (!isFunction(expression) || !isFunction(effect)) die("First and second argument to reaction should be functions");
    if (!isPlainObject(opts)) die("Third argument of reactions should be an object");
    var name = (_opts$name2 = opts.name) != null ? _opts$name2 : "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
    var r = new Reaction(name, function() {
        if (firstTime || runSync) reactionRunner();
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false;
        if (r.isDisposed) return;
        var changed = false;
        var oldValue = value;
        r.track(function() {
            var nextValue = allowStateChanges(false, function() {
                return expression(r);
            });
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);
        else if (!firstTime && changed) effectAction(value, oldValue, r);
        firstTime = false;
    }
    if (!((_opts4 = opts) != null && (_opts4 = _opts4.signal) != null && _opts4.aborted)) r.schedule_();
    return r.getDisposer_((_opts5 = opts) == null ? void 0 : _opts5.signal);
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function() {
        try {
            return baseFn.apply(this, arguments);
        } catch (e) {
            errorHandler.call(this, e);
        }
    };
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) atom[listenersKey].add(cb);
    else atom[listenersKey] = new Set([
        cb
    ]);
    return function() {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners["delete"](cb);
            if (hookListeners.size === 0) delete atom[listenersKey];
        }
    };
}
var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed";
// const IF_AVAILABLE = "ifavailable"
function configure(options) {
    if (options.isolateGlobalState === true) isolateGlobalState();
    var useProxies = options.useProxies, enforceActions = options.enforceActions;
    if (useProxies !== undefined) globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
    if (useProxies === "ifavailable") globalState.verifyProxies = true;
    if (enforceActions !== undefined) {
        var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
    }
    [
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "disableErrorBoundaries",
        "safeDescriptors"
    ].forEach(function(key) {
        if (key in options) globalState[key] = !!options[key];
    });
    globalState.allowStateReads = !globalState.observableRequiresReaction;
    if (globalState.disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    if (options.reactionScheduler) setReactionScheduler(options.reactionScheduler);
}
function extendObservable(target, properties, annotations, options) {
    if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties)) die("'extendObservable' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
    // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)
    var descriptors = getOwnPropertyDescriptors(properties);
    initObservable(function() {
        var adm = asObservableObject(target, options)[$mobx];
        ownKeys(descriptors).forEach(function(key) {
            adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
            !annotations ? true : key in annotations ? annotations[key] : true);
        });
    });
    return target;
}
function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name_
    };
    if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}
function unique(list) {
    return Array.from(new Set(list));
}
var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/ Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/ createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/ createFlowAnnotation("flow.bound", {
    bound: true
});
var flow = /*#__PURE__*/ Object.assign(function flow(arg1, arg2) {
    // @flow (2022.3 Decorators)
    if (is20223Decorator(arg2)) return flowAnnotation.decorate_20223_(arg1, arg2);
    // @flow
    if (isStringish(arg2)) return storeAnnotation(arg1, arg2, flowAnnotation);
    // flow(fn)
    if (arguments.length !== 1) die("Flow expects single argument with generator function");
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    var res = function res() {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function(resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (isFunction(ret == null ? void 0 : ret.then)) {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done) return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
            try {
                if (pendingPromise) cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var _res = gen["return"](undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(_res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            } catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
    res.isMobXFlow = true;
    return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
    if (isFunction(promise.cancel)) promise.cancel();
}
function flowResult(result) {
    return result; // just tricking TypeScript :)
}
function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) target = getAdministration(thing);
    else if (isObservableObject(thing)) {
        if (!isStringish(propOrHandler)) return die("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    } else return die("Expected observable map, object or array as first array");
    if (target.dehancer !== undefined) return die("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function() {
        target.dehancer = undefined;
    };
}
function intercept(thing, propOrHandler, handler) {
    if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);
    else return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept_(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept_(handler);
}
function _isComputed(value, property) {
    if (property === undefined) return isComputedValue(value);
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
}
function isComputed(value) {
    if (arguments.length > 1) return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (!isStringish(propName)) return die("isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}
function _isObservable(value, property) {
    if (!value) return false;
    if (property !== undefined) {
        if (isObservableMap(value) || isObservableArray(value)) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) return value[$mobx].values_.has(property);
        return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
    if (arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (!isStringish(propName)) return die("expected a property name as second argument");
    return _isObservable(value, propName);
}
function keys(obj) {
    if (isObservableObject(obj)) return obj[$mobx].keys_();
    if (isObservableMap(obj) || isObservableSet(obj)) return Array.from(obj.keys());
    if (isObservableArray(obj)) return obj.map(function(_, index) {
        return index;
    });
    die(5);
}
function values(obj) {
    if (isObservableObject(obj)) return keys(obj).map(function(key) {
        return obj[key];
    });
    if (isObservableMap(obj)) return keys(obj).map(function(key) {
        return obj.get(key);
    });
    if (isObservableSet(obj)) return Array.from(obj.values());
    if (isObservableArray(obj)) return obj.slice();
    die(6);
}
function entries(obj) {
    if (isObservableObject(obj)) return keys(obj).map(function(key) {
        return [
            key,
            obj[key]
        ];
    });
    if (isObservableMap(obj)) return keys(obj).map(function(key) {
        return [
            key,
            obj.get(key)
        ];
    });
    if (isObservableSet(obj)) return Array.from(obj.entries());
    if (isObservableArray(obj)) return obj.map(function(key, index) {
        return [
            index,
            key
        ];
    });
    die(7);
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var _values = key;
        try {
            for(var _key in _values)set(obj, _key, _values[_key]);
        } finally{
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) obj[$mobx].set_(key, value);
    else if (isObservableMap(obj)) obj.set(key, value);
    else if (isObservableSet(obj)) obj.add(key);
    else if (isObservableArray(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        if (key < 0) die("Invalid index: '" + key + "'");
        startBatch();
        if (key >= obj.length) obj.length = key + 1;
        obj[key] = value;
        endBatch();
    } else die(8);
}
function remove(obj, key) {
    if (isObservableObject(obj)) obj[$mobx].delete_(key);
    else if (isObservableMap(obj)) obj["delete"](key);
    else if (isObservableSet(obj)) obj["delete"](key);
    else if (isObservableArray(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        obj.splice(key, 1);
    } else die(9);
}
function has(obj, key) {
    if (isObservableObject(obj)) return obj[$mobx].has_(key);
    else if (isObservableMap(obj)) return obj.has(key);
    else if (isObservableSet(obj)) return obj.has(key);
    else if (isObservableArray(obj)) return key >= 0 && key < obj.length;
    die(10);
}
function get(obj, key) {
    if (!has(obj, key)) return undefined;
    if (isObservableObject(obj)) return obj[$mobx].get_(key);
    else if (isObservableMap(obj)) return obj.get(key);
    else if (isObservableArray(obj)) return obj[key];
    die(11);
}
function apiDefineProperty(obj, key, descriptor) {
    if (isObservableObject(obj)) return obj[$mobx].defineProperty_(key, descriptor);
    die(39);
}
function apiOwnKeys(obj) {
    if (isObservableObject(obj)) return obj[$mobx].ownKeys_();
    die(38);
}
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe_(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe_(listener, fireImmediately);
}
function cache(map, key, value) {
    map.set(key, value);
    return value;
}
function toJSHelper(source, __alreadySeen) {
    if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
    if (isObservableValue(source) || isComputedValue(source)) return toJSHelper(source.get(), __alreadySeen);
    if (__alreadySeen.has(source)) return __alreadySeen.get(source);
    if (isObservableArray(source)) {
        var res = cache(__alreadySeen, source, new Array(source.length));
        source.forEach(function(value, idx) {
            res[idx] = toJSHelper(value, __alreadySeen);
        });
        return res;
    }
    if (isObservableSet(source)) {
        var _res = cache(__alreadySeen, source, new Set());
        source.forEach(function(value) {
            _res.add(toJSHelper(value, __alreadySeen));
        });
        return _res;
    }
    if (isObservableMap(source)) {
        var _res2 = cache(__alreadySeen, source, new Map());
        source.forEach(function(value, key) {
            _res2.set(key, toJSHelper(value, __alreadySeen));
        });
        return _res2;
    } else {
        // must be observable object
        var _res3 = cache(__alreadySeen, source, {});
        apiOwnKeys(source).forEach(function(key) {
            if (objectPrototype.propertyIsEnumerable.call(source, key)) _res3[key] = toJSHelper(source[key], __alreadySeen);
        });
        return _res3;
    }
}
/**
 * Recursively converts an observable to it's non-observable native counterpart.
 * It does NOT recurse into non-observables, these are left as they are, even if they contain observables.
 * Computed and other non-enumerable properties are completely ignored.
 * Complex scenarios require custom solution, eg implementing `toJSON` or using `serializr` lib.
 */ function toJS(source, options) {
    if (options) die("toJS no longer supports options");
    return toJSHelper(source, new Map());
}
function trace() {
    var enterBreakPoint = false;
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    if (derivation.isTracing_ === TraceMode.NONE) console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch(args.length){
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */ function transaction(action, thisArg) {
    if (thisArg === void 0) thisArg = undefined;
    startBatch();
    try {
        return action.apply(thisArg);
    } finally{
        endBatch();
    }
}
function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        var error = new Error("WHEN_TIMEOUT");
        timeoutHandle = setTimeout(function() {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                if (opts.onError) opts.onError(error);
                else throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    // eslint-disable-next-line
    var disposer = autorun(function(r) {
        // predicate should not change state
        var cond = allowStateChanges(false, predicate);
        if (cond) {
            r.dispose();
            if (timeoutHandle) clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    var _opts$signal;
    if (opts && opts.onError) return die("the options 'onError' and 'promise' cannot be combined");
    if (opts != null && (_opts$signal = opts.signal) != null && _opts$signal.aborted) return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
        cancel: function cancel() {
            return null;
        }
    });
    var cancel;
    var abort;
    var res = new Promise(function(resolve, reject) {
        var _opts$signal2;
        var disposer = _when(predicate, resolve, _extends({}, opts, {
            onError: reject
        }));
        cancel = function cancel() {
            disposer();
            reject(new Error("WHEN_CANCELLED"));
        };
        abort = function abort() {
            disposer();
            reject(new Error("WHEN_ABORTED"));
        };
        opts == null || (_opts$signal2 = opts.signal) == null || _opts$signal2.addEventListener == null || _opts$signal2.addEventListener("abort", abort);
    })["finally"](function() {
        var _opts$signal3;
        return opts == null || (_opts$signal3 = opts.signal) == null || _opts$signal3.removeEventListener == null ? void 0 : _opts$signal3.removeEventListener("abort", abort);
    });
    res.cancel = cancel;
    return res;
}
function getAdm(target) {
    return target[$mobx];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function has(target, name) {
        if (0, globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
        return getAdm(target).has_(name);
    },
    get: function get(target, name) {
        return getAdm(target).get_(name);
    },
    set: function set(target, name, value) {
        var _getAdm$set_;
        if (!isStringish(name)) return false;
        if (!getAdm(target).values_.has(name)) warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
        // null (intercepted) -> true (success)
        return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
        var _getAdm$delete_;
        warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
        if (!isStringish(name)) return false;
        // null (intercepted) -> true (success)
        return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty(target, name, descriptor) {
        var _getAdm$definePropert;
        warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
        // null (intercepted) -> true (success)
        return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys(target) {
        if (0, globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
        return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
        die(13);
    }
};
function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;
    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function() {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1) interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = [].concat(interceptable.interceptors_ || []);
        for(var i = 0, l = interceptors.length; i < l; i++){
            change = interceptors[i](change);
            if (change && !change.type) die(14);
            if (!change) break;
        }
        return change;
    } finally{
        untrackedEnd(prevU);
    }
}
function hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function() {
        var idx = listeners.indexOf(handler);
        if (idx !== -1) listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) return;
    listeners = listeners.slice();
    for(var i = 0, l = listeners.length; i < l; i++)listeners[i](change);
    untrackedEnd(prevU);
}
function makeObservable(target, annotations, options) {
    initObservable(function() {
        var _annotations;
        var adm = asObservableObject(target, options)[$mobx];
        if (annotations && target[storedAnnotationsSymbol]) die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
        // Default to decorators
        (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
        // Annotate
        ownKeys(annotations).forEach(function(key) {
            return adm.make_(key, annotations[key]);
        });
    });
    return target;
}
// proto[keysSymbol] = new Set<PropertyKey>()
var keysSymbol = /*#__PURE__*/ Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
    // Optimization: avoid visiting protos
    // Assumes that annotation.make_/.extend_ works the same for plain objects
    if (isPlainObject(target)) return extendObservable(target, target, overrides, options);
    initObservable(function() {
        var adm = asObservableObject(target, options)[$mobx];
        // Optimization: cache keys on proto
        // Assumes makeAutoObservable can be called only once per object and can't be used in subclass
        if (!target[keysSymbol]) {
            var proto = Object.getPrototypeOf(target);
            var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
            keys["delete"]("constructor");
            keys["delete"]($mobx);
            addHiddenProp(proto, keysSymbol, keys);
        }
        target[keysSymbol].forEach(function(key) {
            return adm.make_(key, // must pass "undefined" for { key: undefined }
            !overrides ? true : key in overrides ? overrides[key] : true);
        });
    });
    return target;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function get(target, name) {
        var adm = target[$mobx];
        if (name === $mobx) return adm;
        if (name === "length") return adm.getArrayLength_();
        if (typeof name === "string" && !isNaN(name)) return adm.get_(parseInt(name));
        if (hasProp(arrayExtensions, name)) return arrayExtensions[name];
        return target[name];
    },
    set: function set(target, name, value) {
        var adm = target[$mobx];
        if (name === "length") adm.setArrayLength_(value);
        if (typeof name === "symbol" || isNaN(name)) target[name] = value;
        else // numeric string
        adm.set_(parseInt(name), value);
        return true;
    },
    preventExtensions: function preventExtensions() {
        die(15);
    }
};
var ObservableArrayAdministration = /*#__PURE__*/ function() {
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
        if (name === void 0) name = "ObservableArray@" + getNextId();
        this.owned_ = void 0;
        this.legacyMode_ = void 0;
        this.atom_ = void 0;
        this.values_ = [];
        // this is the prop that gets proxied, so can't replace it!
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.enhancer_ = void 0;
        this.dehancer = void 0;
        this.proxy_ = void 0;
        this.lastKnownLength_ = 0;
        this.owned_ = owned_;
        this.legacyMode_ = legacyMode_;
        this.atom_ = new Atom(name);
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV, name + "[..]");
        };
    }
    var _proto = ObservableArrayAdministration.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
        if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
        return values;
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately === void 0) fireImmediately = false;
        if (fireImmediately) listener({
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: "splice",
            index: 0,
            added: this.values_.slice(),
            addedCount: this.values_.length,
            removed: [],
            removedCount: 0
        });
        return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
        this.atom_.reportObserved();
        return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
        if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) die("Out of range: " + newLength);
        var currentLength = this.values_.length;
        if (newLength === currentLength) return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for(var i = 0; i < newLength - currentLength; i++)newItems[i] = undefined;
             // No Array.fill everywhere...
            this.spliceWithArray_(currentLength, 0, newItems);
        } else this.spliceWithArray_(newLength, currentLength - newLength);
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
        if (oldLength !== this.lastKnownLength_) die(16);
        this.lastKnownLength_ += delta;
        if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom_);
        var length = this.values_.length;
        if (index === undefined) index = 0;
        else if (index > length) index = length;
        else if (index < 0) index = Math.max(0, length + index);
        if (arguments.length === 1) deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;
        else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined) newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy_,
                type: SPLICE,
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change) return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
            return _this.enhancer_(v, undefined);
        });
        this.legacyMode_;
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
        var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
        return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            var _this$values_;
            return (_this$values_ = this.values_).splice.apply(_this$values_, [
                index,
                deleteCount
            ].concat(newItems));
        } else {
            // The items removed by the splice
            var res = this.values_.slice(index, index + deleteCount);
            // The items that that should remain at the end of the array
            var oldItems = this.values_.slice(index + deleteCount);
            // New length is the previous length + addition count - deletion count
            this.values_.length += newItems.length - deleteCount;
            for(var i = 0; i < newItems.length; i++)this.values_[index + i] = newItems[i];
            for(var _i = 0; _i < oldItems.length; _i++)this.values_[index + newItems.length + _i] = oldItems[_i];
            return res;
        }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
        var notifySpy = !this.owned_ && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            type: UPDATE,
            debugObjectName: this.atom_.name_,
            index: index,
            newValue: newValue,
            oldValue: oldValue
        } : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy) spyReportStart(change);
        this.atom_.reportChanged();
        if (notify) notifyListeners(this, change);
        if (notifySpy) spyReportEnd();
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
        var notifySpy = !this.owned_ && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: SPLICE,
            index: index,
            removed: removed,
            added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy) spyReportStart(change);
        this.atom_.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify) notifyListeners(this, change);
        if (notifySpy) spyReportEnd();
    };
    _proto.get_ = function get_(index) {
        if (this.legacyMode_ && index >= this.values_.length) {
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
            return undefined;
        }
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
    };
    _proto.set_ = function set_(index, newValue) {
        var values = this.values_;
        if (this.legacyMode_ && index > values.length) // out of bounds
        die(17, index, values.length);
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(this.atom_);
            var oldValue = values[index];
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    type: UPDATE,
                    object: this.proxy_,
                    // since "this" is the real array we need to pass its proxy
                    index: index,
                    newValue: newValue
                });
                if (!change) return;
                newValue = change.newValue;
            }
            newValue = this.enhancer_(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                this.notifyArrayChildUpdate_(index, newValue, oldValue);
            }
        } else {
            // For out of bound index, we don't create an actual sparse array,
            // but rather fill the holes with undefined (same as setArrayLength_).
            // This could be considered a bug.
            var newItems = new Array(index + 1 - values.length);
            for(var i = 0; i < newItems.length - 1; i++)newItems[i] = undefined;
             // No Array.fill everywhere...
            newItems[newItems.length - 1] = newValue;
            this.spliceWithArray_(values.length, 0, newItems);
        }
    };
    return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) name = "ObservableArray@" + getNextId();
    if (owned === void 0) owned = false;
    assertProxies();
    return initObservable(function() {
        var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
        addHiddenFinalProp(adm.values_, $mobx, adm);
        var proxy = new Proxy(adm.values_, arrayTraps);
        adm.proxy_ = proxy;
        if (initialValues && initialValues.length) adm.spliceWithArray_(0, 0, initialValues);
        return proxy;
    });
}
// eslint-disable-next-line
var arrayExtensions = {
    clear: function clear() {
        return this.splice(0);
    },
    replace: function replace(newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
        return this.slice();
    },
    /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */ splice: function splice(index, deleteCount) {
        for(var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)newItems[_key - 2] = arguments[_key];
        var adm = this[$mobx];
        switch(arguments.length){
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray_(index);
            case 2:
                return adm.spliceWithArray_(index, deleteCount);
        }
        return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
        return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
        var adm = this[$mobx];
        for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)items[_key2] = arguments[_key2];
        adm.spliceWithArray_(adm.values_.length, 0, items);
        return adm.values_.length;
    },
    pop: function pop() {
        return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
        return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
        var adm = this[$mobx];
        for(var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)items[_key3] = arguments[_key3];
        adm.spliceWithArray_(0, 0, items);
        return adm.values_.length;
    },
    reverse: function reverse() {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        if (globalState.trackingDerivation) die(37, "reverse");
        this.replace(this.slice().reverse());
        return this;
    },
    sort: function sort() {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (globalState.trackingDerivation) die(37, "sort");
        var copy = this.slice();
        copy.sort.apply(copy, arguments);
        this.replace(copy);
        return this;
    },
    remove: function remove(value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues_(adm.values_).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */ addArrayExtension("at", simpleFunc);
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("toSorted", simpleFunc);
addArrayExtension("toSpliced", simpleFunc);
addArrayExtension("with", simpleFunc);
// map
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("findLast", mapLikeFunc);
addArrayExtension("findLastIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("toReversed", mapLikeFunc);
// reduce
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") arrayExtensions[funcName] = funcFactory(funcName);
}
// Report and delegate to dehanced array
function simpleFunc(funcName) {
    return function() {
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
}
// Make sure callbacks receive correct array arg #2326
function mapLikeFunc(funcName) {
    return function(callback, thisArg) {
        var _this2 = this;
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName](function(element, index) {
            return callback.call(thisArg, element, index, _this2);
        });
    };
}
// Make sure callbacks receive correct array arg #2326
function reduceLikeFunc(funcName) {
    return function() {
        var _this3 = this;
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function(accumulator, currentValue, index) {
            return callback(accumulator, currentValue, index, _this3);
        };
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
}
var isObservableArrayAdministration = /*#__PURE__*/ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /*#__PURE__*/ function() {
    function ObservableMap(initialData, enhancer_, name_) {
        var _this = this;
        if (enhancer_ === void 0) enhancer_ = deepEnhancer;
        if (name_ === void 0) name_ = "ObservableMap@" + getNextId();
        this.enhancer_ = void 0;
        this.name_ = void 0;
        this[$mobx] = ObservableMapMarker;
        this.data_ = void 0;
        this.hasMap_ = void 0;
        // hasMap, not hashMap >-).
        this.keysAtom_ = void 0;
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = enhancer_;
        this.name_ = name_;
        if (!isFunction(Map)) die(18);
        initObservable(function() {
            _this.keysAtom_ = createAtom(_this.name_ + ".keys()");
            _this.data_ = new Map();
            _this.hasMap_ = new Map();
            if (initialData) _this.merge(initialData);
        });
    }
    var _proto = ObservableMap.prototype;
    _proto.has_ = function has_(key) {
        return this.data_.has(key);
    };
    _proto.has = function has(key) {
        var _this2 = this;
        if (!globalState.trackingDerivation) return this.has_(key);
        var entry = this.hasMap_.get(key);
        if (!entry) {
            var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
            this.hasMap_.set(key, newEntry);
            onBecomeUnobserved(newEntry, function() {
                return _this2.hasMap_["delete"](key);
            });
        }
        return entry.get();
    };
    _proto.set = function set(key, value) {
        var hasKey = this.has_(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? UPDATE : ADD,
                object: this,
                newValue: value,
                name: key
            });
            if (!change) return this;
            value = change.newValue;
        }
        if (hasKey) this.updateValue_(key, value);
        else this.addValue_(key, value);
        return this;
    };
    _proto["delete"] = function _delete(key) {
        var _this3 = this;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: DELETE,
                object: this,
                name: key
            });
            if (!change) return false;
        }
        if (this.has_(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: DELETE,
                object: this,
                oldValue: this.data_.get(key).value_,
                name: key
            } : null;
            if (notifySpy) spyReportStart(_change);
             // TODO fix type
            transaction(function() {
                var _this3$hasMap_$get;
                _this3.keysAtom_.reportChanged();
                (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null || _this3$hasMap_$get.setNewValue_(false);
                var observable = _this3.data_.get(key);
                observable.setNewValue_(undefined);
                _this3.data_["delete"](key);
            });
            if (notify) notifyListeners(this, _change);
            if (notifySpy) spyReportEnd();
            return true;
        }
        return false;
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
        var observable = this.data_.get(key);
        newValue = observable.prepareNewValue_(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: UPDATE,
                object: this,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            if (notifySpy) spyReportStart(change);
             // TODO fix type
            observable.setNewValue_(newValue);
            if (notify) notifyListeners(this, change);
            if (notifySpy) spyReportEnd();
        }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
        var _this4 = this;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        transaction(function() {
            var _this4$hasMap_$get;
            var observable = new ObservableValue(newValue, _this4.enhancer_, _this4.name_ + "." + stringifyKey(key), false);
            _this4.data_.set(key, observable);
            newValue = observable.value_; // value might have been changed
            (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null || _this4$hasMap_$get.setNewValue_(true);
            _this4.keysAtom_.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: ADD,
            object: this,
            name: key,
            newValue: newValue
        } : null;
        if (notifySpy) spyReportStart(change);
         // TODO fix type
        if (notify) notifyListeners(this, change);
        if (notifySpy) spyReportEnd();
    };
    _proto.get = function get(key) {
        if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
        return this.dehanceValue_(undefined);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.keys = function keys() {
        this.keysAtom_.reportObserved();
        return this.data_.keys();
    };
    _proto.values = function values() {
        var self1 = this;
        var keys = this.keys();
        return makeIterable({
            next: function next() {
                var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
                return {
                    done: done,
                    value: done ? undefined : self1.get(value)
                };
            }
        });
    };
    _proto.entries = function entries() {
        var self1 = this;
        var keys = this.keys();
        return makeIterable({
            next: function next() {
                var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
                return {
                    done: done,
                    value: done ? undefined : [
                        value,
                        self1.get(value)
                    ]
                };
            }
        });
    };
    _proto[Symbol.iterator] = function() {
        return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
        for(var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;){
            var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
            callback.call(thisArg, value, key, this);
        }
    } /** Merge another object into this object, returns this. */ ;
    _proto.merge = function merge(other) {
        var _this5 = this;
        if (isObservableMap(other)) other = new Map(other);
        transaction(function() {
            if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function(key) {
                return _this5.set(key, other[key]);
            });
            else if (Array.isArray(other)) other.forEach(function(_ref) {
                var key = _ref[0], value = _ref[1];
                return _this5.set(key, value);
            });
            else if (isES6Map(other)) {
                if (!isPlainES6Map(other)) die(19, other);
                other.forEach(function(value, key) {
                    return _this5.set(key, value);
                });
            } else if (other !== null && other !== undefined) die(20, other);
        });
        return this;
    };
    _proto.clear = function clear() {
        var _this6 = this;
        transaction(function() {
            untracked(function() {
                for(var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;){
                    var key = _step2.value;
                    _this6["delete"](key);
                }
            });
        });
    };
    _proto.replace = function replace(values) {
        var _this7 = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function() {
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            for(var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;){
                var key = _step3.value;
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this7["delete"](key);
                    // Was the key removed?
                    if (deleted) // _keysAtom.reportChanged() was already called
                    keysReportChangedCalled = true;
                    else {
                        // Delete prevented by interceptor
                        var value = _this7.data_.get(key);
                        orderedData.set(key, value);
                    }
                }
            }
            // Merge entries
            for(var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;){
                var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
                // We will want to know whether a new key is added
                var keyExisted = _this7.data_.has(_key);
                // Add or update value
                _this7.set(_key, _value);
                // The addition could have been prevent by interceptor
                if (_this7.data_.has(_key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var _value2 = _this7.data_.get(_key);
                    orderedData.set(_key, _value2);
                    // Was a new key added?
                    if (!keyExisted) // _keysAtom.reportChanged() was already called
                    keysReportChangedCalled = true;
                }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this7.data_.size !== orderedData.size) // If size differs, keys are definitely modified
                _this7.keysAtom_.reportChanged();
                else {
                    var iter1 = _this7.data_.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while(!next1.done){
                        if (next1.value !== next2.value) {
                            _this7.keysAtom_.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this7.data_ = orderedData;
        });
        return this;
    };
    _proto.toString = function toString() {
        return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */ _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    return _createClass(ObservableMap, [
        {
            key: "size",
            get: function get() {
                this.keysAtom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: Symbol.toStringTag,
            get: function get() {
                return "Map";
            }
        }
    ]);
}();
// eslint-disable-next-line
var isObservableMap = /*#__PURE__*/ createInstanceofPredicate("ObservableMap", ObservableMap);
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) return dataStructure;
    else if (Array.isArray(dataStructure)) return new Map(dataStructure);
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for(var key in dataStructure)map.set(key, dataStructure[key]);
        return map;
    } else return die(21, dataStructure);
}
var ObservableSetMarker = {};
var ObservableSet = /*#__PURE__*/ function() {
    function ObservableSet(initialData, enhancer, name_) {
        var _this = this;
        if (enhancer === void 0) enhancer = deepEnhancer;
        if (name_ === void 0) name_ = "ObservableSet@" + getNextId();
        this.name_ = void 0;
        this[$mobx] = ObservableSetMarker;
        this.data_ = new Set();
        this.atom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = void 0;
        this.name_ = name_;
        if (!isFunction(Set)) die(22);
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV, name_);
        };
        initObservable(function() {
            _this.atom_ = createAtom(_this.name_);
            if (initialData) _this.replace(initialData);
        });
    }
    var _proto = ObservableSet.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    _proto.clear = function clear() {
        var _this2 = this;
        transaction(function() {
            untracked(function() {
                for(var _iterator = _createForOfIteratorHelperLoose(_this2.data_.values()), _step; !(_step = _iterator()).done;){
                    var value = _step.value;
                    _this2["delete"](value);
                }
            });
        });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
        for(var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;){
            var value = _step2.value;
            callbackFn.call(thisArg, value, value, this);
        }
    };
    _proto.add = function add(value) {
        var _this3 = this;
        checkIfStateModificationsAreAllowed(this.atom_);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: ADD,
                object: this,
                newValue: value
            });
            if (!change) return this;
        // ideally, value = change.value would be done here, so that values can be
        // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function() {
                _this3.data_.add(_this3.enhancer_(value, undefined));
                _this3.atom_.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: ADD,
                object: this,
                newValue: value
            } : null;
            if (notifySpy && true) spyReportStart(_change);
            if (notify) notifyListeners(this, _change);
            if (notifySpy && true) spyReportEnd();
        }
        return this;
    };
    _proto["delete"] = function _delete(value) {
        var _this4 = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: DELETE,
                object: this,
                oldValue: value
            });
            if (!change) return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var _change2 = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: DELETE,
                object: this,
                oldValue: value
            } : null;
            if (notifySpy && true) spyReportStart(_change2);
            transaction(function() {
                _this4.atom_.reportChanged();
                _this4.data_["delete"](value);
            });
            if (notify) notifyListeners(this, _change2);
            if (notifySpy && true) spyReportEnd();
            return true;
        }
        return false;
    };
    _proto.has = function has(value) {
        this.atom_.reportObserved();
        return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function next() {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length ? {
                    value: [
                        keys[index],
                        values[index]
                    ],
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.keys = function keys() {
        return this.values();
    };
    _proto.values = function values() {
        this.atom_.reportObserved();
        var self1 = this;
        var nextIndex = 0;
        var observableValues = Array.from(this.data_.values());
        return makeIterable({
            next: function next() {
                return nextIndex < observableValues.length ? {
                    value: self1.dehanceValue_(observableValues[nextIndex++]),
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.intersection = function intersection(otherSet) {
        if (isES6Set(otherSet) && !isObservableSet(otherSet)) return otherSet.intersection(this);
        else {
            var dehancedSet = new Set(this);
            return dehancedSet.intersection(otherSet);
        }
    };
    _proto.union = function union(otherSet) {
        if (isES6Set(otherSet) && !isObservableSet(otherSet)) return otherSet.union(this);
        else {
            var dehancedSet = new Set(this);
            return dehancedSet.union(otherSet);
        }
    };
    _proto.difference = function difference(otherSet) {
        return new Set(this).difference(otherSet);
    };
    _proto.symmetricDifference = function symmetricDifference(otherSet) {
        if (isES6Set(otherSet) && !isObservableSet(otherSet)) return otherSet.symmetricDifference(this);
        else {
            var dehancedSet = new Set(this);
            return dehancedSet.symmetricDifference(otherSet);
        }
    };
    _proto.isSubsetOf = function isSubsetOf(otherSet) {
        return new Set(this).isSubsetOf(otherSet);
    };
    _proto.isSupersetOf = function isSupersetOf(otherSet) {
        return new Set(this).isSupersetOf(otherSet);
    };
    _proto.isDisjointFrom = function isDisjointFrom(otherSet) {
        if (isES6Set(otherSet) && !isObservableSet(otherSet)) return otherSet.isDisjointFrom(this);
        else {
            var dehancedSet = new Set(this);
            return dehancedSet.isDisjointFrom(otherSet);
        }
    };
    _proto.replace = function replace(other) {
        var _this5 = this;
        if (isObservableSet(other)) other = new Set(other);
        transaction(function() {
            if (Array.isArray(other)) {
                _this5.clear();
                other.forEach(function(value) {
                    return _this5.add(value);
                });
            } else if (isES6Set(other)) {
                _this5.clear();
                other.forEach(function(value) {
                    return _this5.add(value);
                });
            } else if (other !== null && other !== undefined) die("Cannot initialize set from " + other);
        });
        return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        // ... 'fireImmediately' could also be true?
        if (fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    _proto.toString = function toString() {
        return "[object ObservableSet]";
    };
    _proto[Symbol.iterator] = function() {
        return this.values();
    };
    return _createClass(ObservableSet, [
        {
            key: "size",
            get: function get() {
                this.atom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: Symbol.toStringTag,
            get: function get() {
                return "Set";
            }
        }
    ]);
}();
// eslint-disable-next-line
var isObservableSet = /*#__PURE__*/ createInstanceofPredicate("ObservableSet", ObservableSet);
var descriptorCache = /*#__PURE__*/ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/ function() {
    function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
    defaultAnnotation_) {
        if (values_ === void 0) values_ = new Map();
        if (defaultAnnotation_ === void 0) defaultAnnotation_ = autoAnnotation;
        this.target_ = void 0;
        this.values_ = void 0;
        this.name_ = void 0;
        this.defaultAnnotation_ = void 0;
        this.keysAtom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.proxy_ = void 0;
        this.isPlainObject_ = void 0;
        this.appliedAnnotations_ = void 0;
        this.pendingKeys_ = void 0;
        this.target_ = target_;
        this.values_ = values_;
        this.name_ = name_;
        this.defaultAnnotation_ = defaultAnnotation_;
        this.keysAtom_ = new Atom(this.name_ + ".keys");
        // Optimization: we use this frequently
        this.isPlainObject_ = isPlainObject(this.target_);
        if (!isAnnotation(this.defaultAnnotation_)) die("defaultAnnotation must be valid annotation");
        // Prepare structure for tracking which fields were already annotated
        this.appliedAnnotations_ = {};
    }
    var _proto = ObservableObjectAdministration.prototype;
    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
        return this.values_.get(key).get();
    };
    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
        var observable = this.values_.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return true;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: UPDATE,
                object: this.proxy_ || this.target_,
                name: key,
                newValue: newValue
            });
            if (!change) return null;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue_(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var _change = notify || notifySpy ? {
                type: UPDATE,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            if (notifySpy) spyReportStart(_change);
            observable.setNewValue_(newValue);
            if (notify) notifyListeners(this, _change);
            if (notifySpy) spyReportEnd();
        }
        return true;
    };
    _proto.get_ = function get_(key) {
        if (globalState.trackingDerivation && !hasProp(this.target_, key)) // Key doesn't exist yet, subscribe for it in case it's added later
        this.has_(key);
        return this.target_[key];
    } /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */ ;
    _proto.set_ = function set_(key, value, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        // Don't use .has(key) - we care about own
        if (hasProp(this.target_, key)) {
            // Existing prop
            if (this.values_.has(key)) // Observable (can be intercepted)
            return this.setObservablePropValue_(key, value);
            else if (proxyTrap) // Non-observable - proxy
            return Reflect.set(this.target_, key, value);
            else {
                // Non-observable
                this.target_[key] = value;
                return true;
            }
        } else // New prop
        return this.extend_(key, {
            value: value,
            enumerable: true,
            writable: true,
            configurable: true
        }, this.defaultAnnotation_, proxyTrap);
    };
    _proto.has_ = function has_(key) {
        if (!globalState.trackingDerivation) // Skip key subscription outside derivation
        return key in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var entry = this.pendingKeys_.get(key);
        if (!entry) {
            entry = new ObservableValue(key in this.target_, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
            this.pendingKeys_.set(key, entry);
        }
        return entry.get();
    } /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */ ;
    _proto.make_ = function make_(key, annotation) {
        if (annotation === true) annotation = this.defaultAnnotation_;
        if (annotation === false) return;
        assertAnnotable(this, annotation, key);
        if (!(key in this.target_)) {
            var _this$target_$storedA;
            // Throw on missing key, except for decorators:
            // Decorator annotations are collected from whole prototype chain.
            // When called from super() some props may not exist yet.
            // However we don't have to worry about missing prop,
            // because the decorator must have been applied to something.
            if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) return; // will be annotated by subclass constructor
            else die(1, annotation.annotationType_, this.name_ + "." + key.toString());
        }
        var source = this.target_;
        while(source && source !== objectPrototype){
            var descriptor = getDescriptor(source, key);
            if (descriptor) {
                var outcome = annotation.make_(this, key, descriptor, source);
                if (outcome === 0 /* MakeResult.Cancel */ ) return;
                if (outcome === 1 /* MakeResult.Break */ ) break;
            }
            source = Object.getPrototypeOf(source);
        }
        recordAnnotationApplied(this, annotation, key);
    } /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */ ;
    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        if (annotation === true) annotation = this.defaultAnnotation_;
        if (annotation === false) return this.defineProperty_(key, descriptor, proxyTrap);
        assertAnnotable(this, annotation, key);
        var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
        if (outcome) recordAnnotationApplied(this, annotation, key);
        return outcome;
    } /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */ ;
    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) // Failure or intercepted
            return deleteOutcome;
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: descriptor.value
                });
                if (!change) return null;
                var newValue = change.newValue;
                if (descriptor.value !== newValue) descriptor = _extends({}, descriptor, {
                    value: newValue
                });
            }
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) return false;
            } else defineProperty(this.target_, key, descriptor);
            // Notify
            this.notifyPropertyAddition_(key, descriptor.value);
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) // Failure or intercepted
            return deleteOutcome;
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: value
                });
                if (!change) return null;
                value = change.newValue;
            }
            var cachedDescriptor = getCachedObservablePropDescriptor(key);
            var descriptor = {
                configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
                enumerable: true,
                get: cachedDescriptor.get,
                set: cachedDescriptor.set
            };
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) return false;
            } else defineProperty(this.target_, key, descriptor);
            var observable = new ObservableValue(value, enhancer, this.name_ + "." + key.toString(), false);
            this.values_.set(key, observable);
            // Notify (value possibly changed by ObservableValue)
            this.notifyPropertyAddition_(key, observable.value_);
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) // Failure or intercepted
            return deleteOutcome;
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: undefined
                });
                if (!change) return null;
            }
            options.name || (options.name = this.name_ + "." + key.toString());
            options.context = this.proxy_ || this.target_;
            var cachedDescriptor = getCachedObservablePropDescriptor(key);
            var descriptor = {
                configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
                enumerable: false,
                get: cachedDescriptor.get,
                set: cachedDescriptor.set
            };
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) return false;
            } else defineProperty(this.target_, key, descriptor);
            this.values_.set(key, new ComputedValue(options));
            // Notify
            this.notifyPropertyAddition_(key, undefined);
        } finally{
            endBatch();
        }
        return true;
    } /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */ ;
    _proto.delete_ = function delete_(key, proxyTrap) {
        if (proxyTrap === void 0) proxyTrap = false;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        // No such prop
        if (!hasProp(this.target_, key)) return true;
        // Intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy_ || this.target_,
                name: key,
                type: REMOVE
            });
            // Cancelled
            if (!change) return null;
        }
        // Delete
        try {
            var _this$pendingKeys_;
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var observable = this.values_.get(key);
            // Value needed for spies/listeners
            var value = undefined;
            // Optimization: don't pull the value unless we will need it
            if (!observable && (notify || notifySpy)) {
                var _getDescriptor;
                value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
            }
            // delete prop (do first, may fail)
            if (proxyTrap) {
                if (!Reflect.deleteProperty(this.target_, key)) return false;
            } else delete this.target_[key];
            delete this.appliedAnnotations_[key];
            // Clear observable
            if (observable) {
                this.values_["delete"](key);
                // for computed, value is undefined
                if (observable instanceof ObservableValue) value = observable.value_;
                // Notify: autorun(() => obj[key]), see #1796
                propagateChanged(observable);
            }
            // Notify "keys/entries/values" observers
            this.keysAtom_.reportChanged();
            // Notify "has" observers
            // "in" as it may still exist in proto
            (_this$pendingKeys_ = this.pendingKeys_) == null || (_this$pendingKeys_ = _this$pendingKeys_.get(key)) == null || _this$pendingKeys_.set(key in this.target_);
            // Notify spies/listeners
            if (notify || notifySpy) {
                var _change2 = {
                    type: REMOVE,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: value,
                    name: key
                };
                if (notifySpy) spyReportStart(_change2);
                if (notify) notifyListeners(this, _change2);
                if (notifySpy) spyReportEnd();
            }
        } finally{
            endBatch();
        }
        return true;
    } /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */ ;
    _proto.observe_ = function observe_(callback, fireImmediately) {
        if (fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
        var _this$pendingKeys_2;
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        if (notify || notifySpy) {
            var change = notify || notifySpy ? {
                type: ADD,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: key,
                newValue: value
            } : null;
            if (notifySpy) spyReportStart(change);
            if (notify) notifyListeners(this, change);
            if (notifySpy) spyReportEnd();
        }
        (_this$pendingKeys_2 = this.pendingKeys_) == null || (_this$pendingKeys_2 = _this$pendingKeys_2.get(key)) == null || _this$pendingKeys_2.set(true);
        // Notify "keys/entries/values" observers
        this.keysAtom_.reportChanged();
    };
    _proto.ownKeys_ = function ownKeys_() {
        this.keysAtom_.reportObserved();
        return ownKeys(this.target_);
    };
    _proto.keys_ = function keys_() {
        // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
        // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
        // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
        // We choose to over-report in Object.keys(object), because:
        // - typically it's used with simple data objects
        // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
        this.keysAtom_.reportObserved();
        return Object.keys(this.target_);
    };
    return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
    var _options$name;
    if (options && isObservableObject(target)) die("Options can't be provided for already observable objects.");
    if (hasProp(target, $mobx)) {
        if (!(getAdministration(target) instanceof ObservableObjectAdministration)) die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
        return target;
    }
    if (!Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
}
var isObservableObjectAdministration = /*#__PURE__*/ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
        get: function get() {
            return this[$mobx].getObservablePropValue_(key);
        },
        set: function set(value) {
            return this[$mobx].setObservablePropValue_(key, value);
        }
    });
}
function isObservableObject(thing) {
    if (isObject(thing)) return isObservableObjectAdministration(thing[$mobx]);
    return false;
}
function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;
    adm.appliedAnnotations_[key] = annotation;
    // Remove applied decorator annotation so we don't try to apply it again in subclass constructor
    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null || delete _adm$target_$storedAn[key];
}
function assertAnnotable(adm, annotation, key) {
    // Valid annotation
    if (!isAnnotation(annotation)) die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */ // Not annotated
    if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
        var fieldName = adm.name_ + "." + key.toString();
        var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
        var requestedAnnotationType = annotation.annotationType_;
        die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overridden by subclass.");
    }
}
// Bug in safari 9.* (or iOS 9 safari mobile). See #364
var ENTRY_0 = /*#__PURE__*/ createArrayEntryDescriptor(0);
var safariPrototypeSetterInheritanceBug = /*#__PURE__*/ function() {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function set() {
            v = true;
        }
    });
    /*#__PURE__*/ Object.create(p)["0"] = 1;
    return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */ var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = function StubArray() {};
function inherit(ctor, proto) {
    if (Object.setPrototypeOf) Object.setPrototypeOf(ctor.prototype, proto);
    else if (ctor.prototype.__proto__ !== undefined) ctor.prototype.__proto__ = proto;
    else ctor.prototype = proto;
}
inherit(StubArray, Array.prototype);
// Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6
var LegacyObservableArray = /*#__PURE__*/ function(_StubArray) {
    function LegacyObservableArray(initialValues, enhancer, name, owned) {
        var _this;
        if (name === void 0) name = "ObservableArray@" + getNextId();
        if (owned === void 0) owned = false;
        _this = _StubArray.call(this) || this;
        initObservable(function() {
            var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
            adm.proxy_ = _this;
            addHiddenFinalProp(_this, $mobx, adm);
            if (initialValues && initialValues.length) // @ts-ignore
            _this.spliceWithArray(0, 0, initialValues);
            if (safariPrototypeSetterInheritanceBug) // Seems that Safari won't use numeric prototype setter until any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(_this, "0", ENTRY_0);
        });
        return _this;
    }
    _inheritsLoose(LegacyObservableArray, _StubArray);
    var _proto = LegacyObservableArray.prototype;
    _proto.concat = function concat() {
        this[$mobx].atom_.reportObserved();
        for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++)arrays[_key] = arguments[_key];
        return Array.prototype.concat.apply(this.slice(), //@ts-ignore
        arrays.map(function(a) {
            return isObservableArray(a) ? a.slice() : a;
        }));
    };
    _proto[Symbol.iterator] = function() {
        var self1 = this;
        var nextIndex = 0;
        return makeIterable({
            next: function next() {
                return nextIndex < self1.length ? {
                    value: self1[nextIndex++],
                    done: false
                } : {
                    done: true,
                    value: undefined
                };
            }
        });
    };
    return _createClass(LegacyObservableArray, [
        {
            key: "length",
            get: function get() {
                return this[$mobx].getArrayLength_();
            },
            set: function set(newLength) {
                this[$mobx].setArrayLength_(newLength);
            }
        },
        {
            key: Symbol.toStringTag,
            get: function get() {
                return "Array";
            }
        }
    ]);
}(StubArray);
Object.entries(arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: true,
        get: function get() {
            return this[$mobx].get_(index);
        },
        set: function set(value) {
            this[$mobx].set_(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
        for(var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++)createArrayBufferItem(index);
        OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined) die(23);
            return thing[$mobx].atom_;
        }
        if (isObservableSet(thing)) return thing.atom_;
        if (isObservableMap(thing)) {
            if (property === undefined) return thing.keysAtom_;
            var observable = thing.data_.get(property) || thing.hasMap_.get(property);
            if (!observable) die(25, property, getDebugName(thing));
            return observable;
        }
        if (isObservableObject(thing)) {
            if (!property) return die(26);
            var _observable = thing[$mobx].values_.get(property);
            if (!_observable) die(27, property, getDebugName(thing));
            return _observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    } else if (isFunction(thing)) {
        if (isReaction(thing[$mobx])) // disposer function
        return thing[$mobx];
    }
    die(28);
}
function getAdministration(thing, property) {
    if (!thing) die(29);
    if (property !== undefined) return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    if (isObservableMap(thing) || isObservableSet(thing)) return thing;
    if (thing[$mobx]) return thing[$mobx];
    die(24, thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined) named = getAtom(thing, property);
    else if (isAction(thing)) return thing.name;
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);
    else // valid for arrays as well
    named = getAtom(thing);
    return named.name_;
}
/**
 * Helper function for initializing observable structures, it applies:
 * 1. allowStateChanges so we don't violate enforceActions.
 * 2. untracked so we don't accidentaly subscribe to anything observable accessed during init in case the observable is created inside derivation.
 * 3. batch to avoid state version updates
 */ function initObservable(cb) {
    var derivation = untrackedStart();
    var allowStateChanges = allowStateChangesStart(true);
    startBatch();
    try {
        return cb();
    } finally{
        endBatch();
        allowStateChangesEnd(allowStateChanges);
        untrackedEnd(derivation);
    }
}
var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) depth = -1;
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch(className){
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) depth++;
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object") return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return false;
    }
    if (depth === 0) return false;
    else if (depth < 0) depth = -1;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while(length--){
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while(length--){
            if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
        }
    } else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length) return false;
        while(length--){
            // Deep compare each member
            key = keys[length];
            if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a)) return a.slice();
    if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
    return a;
}
function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}
function isAnnotation(thing) {
    return(// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_));
}
/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get a global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */ [
    "Symbol",
    "Map",
    "Set"
].forEach(function(m) {
    var g = getGlobal();
    if (typeof g[m] === "undefined") die("MobX requires global '" + m + "' to be available or polyfilled");
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") // See: https://github.com/andykog/mobx-devtools/
__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
        getDebugName: getDebugName
    },
    $mobx: $mobx
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FYBK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormStore", ()=>FormStore);
parcelHelpers.export(exports, "formStore", ()=>formStore);
var _mobx = require("mobx");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class FormStore {
    constructor(){
        Object.defineProperty(this, "_itemName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_itemQuantity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        (0, _mobx.makeObservable)(this);
    }
    setItemInputValue(item) {
        this._itemName = item;
    }
    setItemCount(itemCount) {
        this._itemQuantity = itemCount;
    }
    get itemCount() {
        console.log(`current item count: ${this._itemQuantity}`);
        return this._itemQuantity;
    }
    get itemValue() {
        return this._itemName;
    }
}
__decorate([
    (0, _mobx.observable),
    __metadata("design:type", String)
], FormStore.prototype, "_itemName", void 0);
__decorate([
    (0, _mobx.observable),
    __metadata("design:type", Object)
], FormStore.prototype, "_itemQuantity", void 0);
__decorate([
    (0, _mobx.action),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        String
    ]),
    __metadata("design:returntype", void 0)
], FormStore.prototype, "setItemInputValue", null);
__decorate([
    (0, _mobx.action),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Number
    ]),
    __metadata("design:returntype", void 0)
], FormStore.prototype, "setItemCount", null);
__decorate([
    (0, _mobx.computed),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], FormStore.prototype, "itemCount", null);
__decorate([
    (0, _mobx.computed),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], FormStore.prototype, "itemValue", null);
const formStore = new FormStore();

},{"mobx":"coRKn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e98ks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "itemStore", ()=>itemStore);
var _mobx = require("mobx");
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class ItemStore {
    constructor(){
        Object.defineProperty(this, "_items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        (0, _mobx.makeObservable)(this);
    }
    addItemsToList(item) {
        this._items = [
            ...this._items,
            item
        ];
    }
    get itemList() {
        console.log(`item list updated`);
        return this._items;
    }
    toggleItemState(itemId) {
        this._items.map((item)=>{
            if (item.id === itemId) item.packed = !item.packed;
        });
    }
    removeItemFromList(id) {
        console.log("delete item with id:", id);
        this._items = this._items.filter((item)=>item.id !== id);
    }
}
__decorate([
    (0, _mobx.observable),
    __metadata("design:type", Array)
], ItemStore.prototype, "_items", void 0);
__decorate([
    (0, _mobx.action),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Object
    ]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "addItemsToList", null);
__decorate([
    (0, _mobx.computed),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ItemStore.prototype, "itemList", null);
__decorate([
    (0, _mobx.action),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Number
    ]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "toggleItemState", null);
__decorate([
    (0, _mobx.action),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        Number
    ]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "removeItemFromList", null);
const itemStore = new ItemStore();

},{"mobx":"coRKn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>t);
const t = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipYYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>n);
parcelHelpers.export(exports, "standardProperty", ()=>r);
var _reactiveElementJs = require("../reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = {
    attribute: !0,
    type: String,
    converter: (0, _reactiveElementJs.defaultConverter),
    reflect: !1,
    hasChanged: (0, _reactiveElementJs.notEqual)
}, r = (t = o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function n(t) {
    return (e, o)=>"object" == typeof o ? r(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}

},{"../reactive-element.js":"hypet","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>r);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r(r) {
    return (0, _propertyJs.property)({
        ...r,
        state: !0,
        attribute: !1
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8b5ex":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>t);
function t(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, _baseJs.desc)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, _baseJs.desc)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "desc", ()=>e);
const e = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>r);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let e;
function r(r) {
    return (n, o)=>(0, _baseJs.desc)(n, o, {
            get () {
                return (this.renderRoot ?? (e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>r);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r(r) {
    return (n, e)=>(0, _baseJs.desc)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>o);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, _baseJs.desc)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>n);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function n(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, _baseJs.desc)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4zR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form_css", ()=>form_css);
var _lit = require("lit");
const form_css = (0, _lit.css)`

    form {
        border: 5px solid blue;
        display: flex;
        justify-content: start;
        align-items: center;
        align-content:center;
        background-color: orange;
        gap:0.1rem;
    }
    slot[name="item-list-text"]{
        color:grey;
        font-size:2rem;
        font-weight: bold;
        padding:1em;
    }
    select,input,button{
        border-radius: 20rem;
        padding: 1.5em 4.5em;
        margin-left: 1.5em;
        margin-bottom:2em;
        margin-top:2.2em;
        font-family: inherit;
        background-color: #ffebb3;
        border: none;
    }

`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4C6Ru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PackingList", ()=>PackingList) //// <button>&times;</button>
;
var _litMobx = require("@adobe/lit-mobx");
var _itemStore = require("../store/ItemStore");
var _lit = require("lit");
var _packingItemsCss = require("../css/packing-items.css");
var _map = require("lit/directives/map");
class PackingList extends (0, _litMobx.MobxLitElement) {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "onRemoveItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (id)=>{
                (0, _itemStore.itemStore).removeItemFromList(id);
            }
        });
    }
    renderAddedItems() {}
    render() {
        return (0, _lit.html)`
            <div class="list">
                <ul>
                    ${(0, _map.map)((0, _itemStore.itemStore).itemList, (item)=>(0, _lit.html)`
                        <li> 
                            <input type="checkbox" 
                            ?checked=${item.packed}
                            @click=${()=>this.toggleCheckBox(item.id)}
                            />
                            <span class="item-list-description" style=${item.packed ? "text-decoration:line-through" : ""}>${item.quantity} ${item.description}</span>
                            <button 
                            @click=${()=>this.onRemoveItem(item.id)}
                            >❌</button>
                        </li>`)}
                </ul>        
            </div>
        `;
    }
    toggleCheckBox(id) {
        (0, _itemStore.itemStore).toggleItemState(id);
    }
}
Object.defineProperty(PackingList, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        (0, _packingItemsCss.packing_css)
    ]
});

},{"@adobe/lit-mobx":"8SIpA","../store/ItemStore":"e98ks","lit":"4antt","../css/packing-items.css":"kpJT3","lit/directives/map":"ejxgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpJT3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "packing_css", ()=>packing_css);
var _lit = require("lit");
const packing_css = (0, _lit.css)`

.list {
  border:5px solid green;
  background-color: #5a3e2b;
  color: #ffebb3;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap:1em;
} 

  .list>ul {
        list-style:none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.2rem;
        justify-content: center;
        align-content: start;
        // overflow: scroll;
    }


    .list li {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }
    
    .list button {
        border: none;
        background:none;
    }
    .item-list-description{
      font-family: sans-serif;
      font-size: 1.4rem;
    }
    


`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejxgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("lit-html/directives/map.js");
parcelHelpers.exportAll(_mapJs, exports);

},{"lit-html/directives/map.js":"7r7rb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7r7rb":[function(require,module,exports) {
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>oo);
function* oo(o, f) {
    if (void 0 !== o) {
        let i = 0;
        for (const t of o)yield f(t, i++);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ANnx":[function(require,module,exports) {
var _components = require("../components");
const TAG_NAME = "items-list";
if (!customElements.get(TAG_NAME)) customElements.define(TAG_NAME, (0, _components.PackingList));

},{"../components":"btU4q"}]},["75Toe","kTanD"], "kTanD", "parcelRequire39d8")

//# sourceMappingURL=far-away.687a2490.js.map
