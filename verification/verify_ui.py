from playwright.sync_api import sync_playwright

def verify_conditions():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Homepage List
        try:
            page.goto("http://localhost:3001/")
            page.wait_for_selector('text=Conditions We Treat') # Wait for section to load
            page.screenshot(path="verification/homepage_conditions.png")

            # Verify Cancer Page
            page.goto("http://localhost:3001/conditions/cancer")
            page.wait_for_selector('text=Natural Support for') # Wait for Hero text
            page.screenshot(path="verification/cancer_page.png")

            # Verify Infertility Page
            page.goto("http://localhost:3001/conditions/childless-couple-infertility")
            page.wait_for_selector('text=Hope for Childless Couples')
            page.screenshot(path="verification/infertility_page.png")

            print("Screenshots taken successfully.")
        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_conditions()
