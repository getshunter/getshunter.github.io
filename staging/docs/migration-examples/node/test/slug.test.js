import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../sample/slug.js";

test("slugify trims and joins words", function () {
  assert.equal(slugify("  Flow Book  "), "flow-book");
});
