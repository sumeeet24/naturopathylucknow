from playwright.sync_api import sync_playwright

def verify_header_z_index():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to local server
            page.goto("http://localhost:3000")

            # Wait for header to be visible
            page.wait_for_selector("header")

            # Check Z-Index of Header
            header_z = page.evaluate("window.getComputedStyle(document.querySelector('header')).zIndex")
            print(f"Header Z-Index: {header_z}")

            # Hover over Treatments to trigger dropdown
            page.get_by_role("button", name="Treatments").hover()

            # Wait for dropdown
            page.wait_for_timeout(1000) # Wait for transition

            # Check visibility of dropdown item - Use a specific selector for the dropdown link
            # The dropdown links are inside the absolute div.
            # We can select by text and ensure it's the one inside the dropdown container.
            # However, simpler is just to take the screenshot as visual proof.

            # Take screenshot of Desktop Dropdown
            page.screenshot(path="verification/desktop_dropdown.png")

            # Switch to mobile view
            page.set_viewport_size({"width": 375, "height": 812})

            # Click mobile menu button
            page.get_by_role("button", name="Open main menu").click()

            # Wait for menu animation
            page.wait_for_timeout(1000)

            # Open Treatments in Mobile
            page.get_by_role("button", name="Treatments").click()
            page.wait_for_timeout(500)

            # Take screenshot of Mobile Menu
            page.screenshot(path="verification/mobile_menu.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_header_z_index()
