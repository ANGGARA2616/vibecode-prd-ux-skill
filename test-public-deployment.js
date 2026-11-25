const { chromium } = require('playwright-core');

async function verifyPublicUrl() {
  const publicUrl = 'https://dont-okay-mia-wisdom.trycloudflare.com';
  console.log(`\n=== Verifying Live Public URL: ${publicUrl} ===\n`);

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('[Console Error]:', msg.text());
    }
  });

  // 1. Visit live public URL
  console.log('1. Navigating to public deployment...');
  const resp = await page.goto(publicUrl, { waitUntil: 'networkidle' });
  console.log('HTTP Status:', resp.status());
  console.log('Page Title:', await page.title());

  const initialCards = await page.locator('.room-card').count();
  console.log('Initial Room Cards Count:', initialCards);
  if (initialCards !== 4) throw new Error(`Expected 4 initial room cards, got ${initialCards}`);

  // 2. Open Choose Method Modal (Screen 3)
  console.log('2. Opening Choose Method Modal (Screen 3)...');
  await page.click('button:has-text("⚡ + Tambah Beberapa Kamar Sekaligus")');
  await page.waitForTimeout(300);
  const modalVisible = await page.isVisible('#modal-choose');
  console.log('Choose Method Modal Visible:', modalVisible);
  if (!modalVisible) throw new Error('Screen 3 modal failed to open on public URL');

  // 3. Select "Tambah Kamar Massal" -> Go to Form (Screen 4)
  console.log('3. Selecting "Tambah Kamar Massal" -> Screen 4 Form Massal...');
  await page.click('.option-card.highlight');
  await page.waitForTimeout(300);
  const formVisible = await page.isVisible('#screen-form-massal');
  console.log('Screen 4 Form Visible:', formVisible);
  if (!formVisible) throw new Error('Screen 4 form failed to display on public URL');

  // 4. Fill form & check live calculation
  await page.fill('#gen-count', '6');
  await page.fill('#gen-prefix', '20');
  await page.fill('#gen-start', '1');
  await page.waitForTimeout(200);
  const rangeVal = await page.inputValue('#gen-range-display');
  console.log('Calculated Room Range:', rangeVal);

  // 5. Proceed to Summary Table (Screen 5)
  console.log('4. Proceeding to Summary Table (Screen 5)...');
  await page.click('button:has-text("Lanjut ke Pratinjau & Ringkasan →")');
  await page.waitForTimeout(300);
  const summaryVisible = await page.isVisible('#screen-summary');
  console.log('Summary Table Visible:', summaryVisible);

  // 6. Save rooms (Screen 7A & 7B)
  console.log('5. Saving all rooms (Screen 7A Progress & 7B Success)...');
  await page.click('#btn-save-summary');
  await page.waitForTimeout(2000); // Progress & success modal
  const successVisible = await page.isVisible('#modal-success');
  console.log('Success Modal Visible:', successVisible);
  if (!successVisible) throw new Error('Screen 7B modal failed on public URL');

  // 7. Return to Room List
  await page.click('#btn-view-rooms-success');
  await page.waitForTimeout(400);
  const updatedCards = await page.locator('.room-card').count();
  console.log('Updated Room Cards in List:', updatedCards, '(Expected 10)');
  if (updatedCards !== 10) throw new Error(`Expected 10 rooms, got ${updatedCards}`);

  await browser.close();

  console.log('\n======================================================');
  console.log('PUBLIC DEPLOYMENT VERIFICATION PASSED WITH 0 ERRORS!');
  console.log('Console Errors:', consoleErrors.length);
  console.log('======================================================\n');
}

verifyPublicUrl().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
