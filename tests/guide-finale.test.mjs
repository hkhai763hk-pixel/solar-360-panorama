import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");

test("小轨使用立体探测器结构", () => {
  assert.match(html, /guide-shell/);
  assert.match(html, /guide-eye/);
  assert.match(html, /guide-antenna/);
  assert.match(css, /transform-style:\s*preserve-3d/);
});

test("任务完成动画具备独立界面和返回总览流程", () => {
  assert.match(html, /id="missionCompleteOverlay"/);
  assert.match(css, /\.mission-complete-overlay/);
  assert.match(script, /function finishMissionSequence/);
  assert.match(script, /showOverview\(false\)/);
});
