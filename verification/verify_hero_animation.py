import asyncio
from playwright.async_api import async_playwright

async def verify_hero_animation():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        print("Navigating to localhost:3000...")
        await page.goto("http://localhost:3000")

        # 1. Capture initial state (Intro Text should be visible, H1 hidden)
        print("Waiting for initial load...")
        # Give it a tiny bit to render initial frame
        await asyncio.sleep(0.5)
        await page.screenshot(path="verification/hero_initial.png")
        print("Screenshot saved: verification/hero_initial.png")

        # 2. Wait for animation transition (approx 2s-3s mark)
        print("Waiting for text swap animation (3.0s)...")
        await asyncio.sleep(3.0)

        # 3. Capture final state (Intro Text hidden, H1 visible)
        await page.screenshot(path="verification/hero_final.png")
        print("Screenshot saved: verification/hero_final.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_hero_animation())