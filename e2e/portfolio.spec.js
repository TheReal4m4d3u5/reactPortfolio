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

  const buttons = ["Archive"];

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
    page.getByRole("link", { name: "GitHub", exact: true }),
  ).toBeVisible();

  const footer = page.locator(".footer-links");
  await expect(footer).toBeVisible();
});

test("portfolio card content can be viewed above fixed footer", async ({
  page,
}) => {
  await page.goto("/portfolio");

  const activeCard = page.locator(
    ".outerCarousel > .swiper-wrapper > .swiper-slide-active " +
      ".innerCarousel > .swiper-wrapper > .swiper-slide-active .project-card",
  );

  const footer = page.locator(".footer-links");
  const projectLink = activeCard.getByRole("link", {
    name: /view github project/i,
  });

  await expect(activeCard).toBeVisible();
  await expect(footer).toBeVisible();
  await expect(projectLink).toBeAttached();

  const footerHeight = await footer.evaluate(
    (element) => element.getBoundingClientRect().height,
  );

  await projectLink.scrollIntoViewIfNeeded();

  // Move the target above the fixed footer.
  await page.evaluate((height) => {
    window.scrollBy(0, height + 16);
  }, footerHeight);

  await expect
    .poll(async () => {
      const linkBox = await projectLink.boundingBox();
      const footerBox = await footer.boundingBox();

      if (!linkBox || !footerBox) return false;

      return linkBox.y + linkBox.height <= footerBox.y;
    })
    .toBe(true);
});

test("contact form fields render", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByPlaceholder("Enter your name")).toBeVisible();
  await expect(page.getByPlaceholder("Enter your email")).toBeVisible();
  await expect(page.getByPlaceholder("Enter your message")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
});


test("project cards do not overlap while moving through the carousel", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1860, height: 750 });
  await page.goto("/portfolio");

  const carousel = page.locator(".outerCarousel");

  // Scope this to the OUTER carousel so it does not click
  // the image/video carousel's next button.
  const nextButton = carousel.locator(":scope > .swiper-button-next");

  const slides = carousel.locator(
    ":scope > .swiper-wrapper > .swiper-slide:not(.swiper-slide-duplicate)"
  );

  const slideCount = await slides.count();

  for (let slideNumber = 0; slideNumber < slideCount; slideNumber++) {
    const activeSlide = carousel.locator(
      ":scope > .swiper-wrapper > .swiper-slide-active"
    );

    await expect(activeSlide).toBeVisible();

    const overlappingCards = await carousel
      .locator(".project-card")
      .evaluateAll((cards) => {
        const cardData = cards.map((card, index) => {
          const rect = card.getBoundingClientRect();

          return {
            index,
            active: Boolean(card.closest(".swiper-slide-active")),
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom,
          };
        });

        const activeCard = cardData.find((card) => card.active);

        if (!activeCard) {
          return [];
        }

        return cardData.filter((card) => {
          if (card.index === activeCard.index) {
            return false;
          }

          const horizontalOverlap =
            activeCard.left < card.right && activeCard.right > card.left;

          const verticalOverlap =
            activeCard.top < card.bottom && activeCard.bottom > card.top;

          return horizontalOverlap && verticalOverlap;
        });
      });

    expect(
      overlappingCards,
      `Project slide ${slideNumber + 1} overlaps another project card`
    ).toHaveLength(0);

    if (slideNumber < slideCount - 1) {
      const currentIndex = await activeSlide.getAttribute(
        "data-swiper-slide-index"
      );

      await nextButton.click();

      await expect
        .poll(async () => {
          return carousel
            .locator(
              ":scope > .swiper-wrapper > .swiper-slide-active"
            )
            .getAttribute("data-swiper-slide-index");
        })
        .not.toBe(currentIndex);
    }
  }
});