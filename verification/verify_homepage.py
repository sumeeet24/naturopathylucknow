from playwright.sync_api import sync_playwright, expect

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to homepage
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for key elements to ensure page is loaded
            page.wait_for_selector('h1', state='visible')

            # Take screenshot of Hero Section
            page.screenshot(path="verification/hero_section.png", full_page=False)
            print("Hero section screenshot taken.")

            # Scroll down and take screenshot of Services
            page.evaluate("window.scrollBy(0, 1000)")
            page.wait_for_timeout(1000) # Wait for potential animations
            page.screenshot(path="verification/services_section.png")
            print("Services section screenshot taken.")

            # Scroll to Footer
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/footer_section.png")
            print("Footer section screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
