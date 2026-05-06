#!/usr/bin/env node
// Capture screenshots of the dev site via system Chrome.
// Usage:
//   npm run shot -- [path] [options]
//
// Examples:
//   npm run shot                        # full-page home at 1440x900
//   npm run shot -- /values             # full-page values index
//   npm run shot -- / --w 1920 --h 1080 # specific viewport
//   npm run shot -- / --scroll 1200     # scroll to Y=1200 then shot (no full-page)
//   npm run shot -- / --tag passage-mid # custom filename suffix

import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOT_DIR = resolve(__dirname, '..', 'screenshots');
const BASE_URL = process.env.SHOT_BASE_URL ?? 'http://localhost:3000';

function parseArgs(argv) {
  const args = { path: '/', w: 1440, h: 900, scroll: null, tag: null, deviceScale: 2 };
  const rest = argv.slice(2);
  if (rest[0] && !rest[0].startsWith('--')) {
    args.path = rest.shift();
  }
  for (let i = 0; i < rest.length; i += 2) {
    const key = rest[i].replace(/^--/, '');
    const val = rest[i + 1];
    if (key === 'scroll' || key === 'w' || key === 'h' || key === 'deviceScale') {
      args[key] = Number(val);
    } else {
      args[key] = val;
    }
  }
  return args;
}

async function findChrome() {
  const { existsSync } = await import('node:fs');
  for (const p of CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  throw new Error('Chrome/Edge not found. Install Chrome or set CHROME_PATH.');
}

function slugify(p) {
  if (p === '/' || p === '') return 'home';
  return p.replace(/^\/+/, '').replace(/\/+$/, '').replace(/\//g, '-');
}

async function main() {
  const args = parseArgs(process.argv);
  const url = new URL(args.path, BASE_URL).toString();
  const executablePath = process.env.CHROME_PATH ?? (await findChrome());

  await mkdir(SHOT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    defaultViewport: { width: args.w, height: args.h, deviceScaleFactor: args.deviceScale },
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });
    // Wait for fonts to settle so type doesn't render in fallback
    await page.evaluate(() => document.fonts?.ready);

    const fullPage = args.scroll == null;
    if (args.scroll != null) {
      await page.evaluate((y) => window.scrollTo(0, y), args.scroll);
      // give the scroll-driven CSS animations a frame to settle
      await new Promise((r) => setTimeout(r, 80));
    }

    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const tagPart = args.tag ? `_${args.tag}` : args.scroll != null ? `_y${args.scroll}` : '';
    const file = resolve(SHOT_DIR, `${slugify(args.path)}_${args.w}x${args.h}${tagPart}_${stamp}.png`);

    await page.screenshot({ path: file, fullPage });
    console.log(file);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
