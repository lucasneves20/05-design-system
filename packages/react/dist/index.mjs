// src/index.tsx
import { jsxs } from "react/jsx-runtime";
function Button({ size = "small" }) {
  if (size === "big") {
    return /* @__PURE__ */ jsxs("button", { className: "font-default bg-ignite500 px-20 py-10", children: [
      " ",
      "Hello world",
      " "
    ] });
  }
  return /* @__PURE__ */ jsxs("button", { className: "font-default bg-ignite500 px-10 py-5", children: [
    " ",
    "Hello world",
    " "
  ] });
}
export {
  Button
};
