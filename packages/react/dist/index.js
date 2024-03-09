"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ size = "small" }) {
  if (size === "big") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "font-default bg-ignite500 px-20 py-10", children: [
      " ",
      "Hello world",
      " "
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "font-default bg-ignite500 px-10 py-5", children: [
    " ",
    "Hello world",
    " "
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
