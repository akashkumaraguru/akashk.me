import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(6000);
await page.locator('button:has-text("Claim Your Gift")').scrollIntoViewIfNeeded();
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-mobile-tile.png' });

await page.locator('button:has-text("Claim Your Gift")').click();
await page.waitForTimeout(500);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-mobile-form.png' });

await page.fill('#gift-name', 'Riya');
await page.getByRole('button', { name: 'Female', exact: true }).click();
await page.locator('button:has-text("Generate My Gift")').click();
await page.waitForTimeout(1000);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/gift-mobile-result.png' });

console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
