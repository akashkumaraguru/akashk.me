import { chromium } from 'playwright';

const browser = await chromium.launch();

async function runFlow(genderLabel, filename) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(6000);
  await page.locator('button:has-text("Claim Your Gift")').click();
  await page.waitForTimeout(500);
  await page.fill('#gift-name', 'Sam');
  await page.getByRole('button', { name: genderLabel, exact: true }).click();
  await page.locator('button:has-text("Generate My Gift")').click();
  await page.waitForTimeout(1200);
  await page.locator('text=Nice meeting you, Sam').first().locator('xpath=ancestor::*[self::div][2]').screenshot({ path: `/private/tmp/claude-502/-Users-Akash-Akash--Design---Dev-Akash-Akash-Card/be507eb7-e1a8-4394-934e-c71599c41b87/scratchpad/${filename}` });
  await page.close();
}

await runFlow('Male', 'gift-male.png');
await runFlow('Female', 'gift-female.png');
await runFlow('Prefer not to say', 'gift-unspecified.png');

await browser.close();
console.log('DONE');
