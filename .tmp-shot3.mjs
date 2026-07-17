import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(`pageerror: ${e}`));
page.on('console', msg => { if (msg.type() === 'error') errors.push(`console: ${msg.text()}`); });

await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await page.waitForTimeout(6000);
await page.locator('button:has-text("Claim Your Gift")').click();
await page.waitForTimeout(500);
await page.fill('#gift-name', 'Test User');
await page.getByRole('button', { name: 'Male', exact: true }).click();
await page.locator('button:has-text("Generate My Gift")').click();
await page.waitForTimeout(1000);

// test download card
const downloadPromise = page.waitForEvent('download', { timeout: 8000 }).catch(() => null);
await page.locator('button:has-text("Download Card")').click();
const download1 = await downloadPromise;
console.log('Download Card result:', download1 ? await download1.suggestedFilename() : 'NO DOWNLOAD EVENT');
await page.waitForTimeout(500);

// test save contact
const downloadPromise2 = page.waitForEvent('download', { timeout: 8000 }).catch(() => null);
await page.locator('button:has-text("Save Contact")').click();
const download2 = await downloadPromise2;
console.log('Save Contact result:', download2 ? await download2.suggestedFilename() : 'NO DOWNLOAD EVENT');

// test close and reopen resets to form
await page.keyboard.press('Escape');
await page.waitForTimeout(500);
const modalVisibleAfterClose = await page.locator('text=Nice meeting you today!').isVisible().catch(() => false);
console.log('Modal closed properly:', !(await page.locator('text=Nice meeting you, Test User').isVisible().catch(() => false)));

await page.locator('button:has-text("Claim Your Gift")').click();
await page.waitForTimeout(500);
const resetToForm = await page.locator('text=Nice meeting you today!').isVisible();
console.log('Reopened modal resets to form step:', resetToForm);

console.log('ERRORS:', JSON.stringify(errors, null, 2));
await browser.close();
