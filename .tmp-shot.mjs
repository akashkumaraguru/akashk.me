import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1.5 });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(8000);

// scroll to gift card and screenshot it
const giftTitle = page.locator('text=A Gift From Akash').first();
await giftTitle.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await giftTitle.locator('xpath=ancestor::*[self::div][4]').screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-tile.png' });

// click Claim Your Gift
await page.locator('button:has-text("Claim Your Gift")').click();
await page.waitForTimeout(600);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-modal-form.png' });

// fill form
await page.fill('#gift-name', 'Priya');
await page.locator('button:has-text("Female")').click();
await page.waitForTimeout(200);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-modal-filled.png' });

// submit
await page.locator('button:has-text("Generate My Gift")').click();
await page.waitForTimeout(900);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-modal-result.png' });

console.log('ERRORS:', JSON.stringify(errors, null, 2));
await browser.close();
