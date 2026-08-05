import { test, expect } from "@playwright/test";

test("main navigation pages load", async ({ page, isMobile }) => {
  test.skip(isMobile, "mobile nav handled separately");

  await page.goto("/");

  await expect(page.getByText("Avery Jacobson")).toBeVisible();

  await page.getByRole("link", { name: "Portfolio" }).click();
  await expect(
    page.getByRole("heading", { name: "My Portfolio" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Resume" }).click();
  await expect(page.getByText("Download Resume")).toBeVisible();

  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("heading", { name: "Contact Me" })).toBeVisible();
});

test("portfolio subject buttons render", async ({ page }) => {
  await page.goto("/portfolio");

  const buttons = [
    "Archive",
  ];

  for (const button of buttons) {
    await expect(
      page
        .getByRole("button", { name: button })
        .or(page.getByRole("link", { name: button })),
    ).toBeVisible();
  }
});

test("footer links are visible and not covered", async ({ page }) => {
  await page.goto("/portfolio");

  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(
  page.getByRole("link", { name: "GitHub", exact: true })
).toBeVisible();

  const footer = page.locator(".footer-links");
  await expect(footer).toBeVisible();
});

test("portfolio card does not overlap footer", async ({ page }) => {
  await page.goto("/portfolio");

  const card = page.locator(".project-card:visible").last();
  const footer = page.locator(".footer-links");

  await expect(card).toBeVisible();
  await expect(footer).toBeVisible();

  await page.evaluate(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  });

  await page.waitForTimeout(300);

  const [cardBox, footerBox] = await Promise.all([
    card.boundingBox(),
    footer.boundingBox(),
  ]);

  if (!cardBox || !footerBox) {
    throw new Error("Unable to measure the project card or footer");
  }

  const cardBottom = cardBox.y + cardBox.height;

  expect(cardBottom).toBeLessThanOrEqual(footerBox.y + 1);
});

test("contact form fields render", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByPlaceholder("Enter your name")).toBeVisible();
  await expect(page.getByPlaceholder("Enter your email")).toBeVisible();
  await expect(page.getByPlaceholder("Enter your message")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
});
