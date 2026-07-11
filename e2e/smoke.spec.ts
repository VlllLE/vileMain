import { test, expect } from '@playwright/test';

const BASE = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:4173/vileMain/';

test.describe('Portfolio smoke tests', () => {
  test('homepage loads with featured project', async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByRole('heading', { name: /full-stack products/i })).toBeVisible();
    await expect(page.getByText('Automated HR Decision Support Tool')).toBeVisible();
  });

  test('navigation links have valid href patterns', async ({ page }) => {
    await page.goto(BASE);
    const githubLink = page.getByRole('link', { name: /view github/i });
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
  });

  test('contact section is reachable', async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole('menuitem', { name: 'Contact' }).click();
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible();
  });

  test('case study route loads', async ({ page }) => {
    await page.goto(`${BASE}projects/hr-decision-support`);
    await expect(
      page.getByRole('heading', { name: /Automated HR Decision Support Tool/i }),
    ).toBeVisible();
  });
});
